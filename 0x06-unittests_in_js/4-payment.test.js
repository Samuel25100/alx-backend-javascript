const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe("Sinon spy on sendPaymentRequestToApi", () => {
	let add;
	let consol

	beforeEach(() => {
		consol = sinon.spy(console, "log");
		add = sinon.stub(Utils, 'calculateNumber');
		add.returns(10);
	});
	afterEach(() => {
		add.restore();
		consol.restore();
	});

	it("sinon.spy should spy on sendPaymentRequestToApi", () => {
		sendPaymentRequestToApi(10, 20);
		expect(add.called).to.be.true;
		expect(add.calledOnce).to.be.true;
		expect(add.calledWith("SUM", 10, 20)).to.be.true;
		expect(consol.calledWith("The total is: 10")).to.be.true;

	});
        it("should round number correctly", () => {
                sendPaymentRequestToApi(100, 3);
		expect(add.called).to.be.true;
		expect(add.calledWith("SUM", 100, 3)).to.be.true;
		expect(consol.calledWith("The total is: 10")).to.be.true;
        });
});
