const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe("Sinon spy on sendPaymentRequestToApi", () => {
	let add;

	beforeEach(() => {
		add = sinon.spy(Utils, 'calculateNumber');
	});
	afterEach(() => {
		add.restore();
	});

	it("sinon.spy should spy on sendPaymentRequestToApi", () => {
		sendPaymentRequestToApi(100, 20);
		expect(add.called).to.be.true;
		expect(add.calledOnce).to.be.true;
		expect(add.calledWith("SUM", 100, 20)).to.be.true;
	});
	it("Should return correct result", () => {
        	sendPaymentRequestToApi(1, 3);
		expect(add.called).to.be.true;
		expect(add.calledWith("SUM", 1, 3)).to.be.true;
        });
        it("should round number correctly", () => {
                sendPaymentRequestToApi(1, 3.7);
		expect(add.called).to.be.true;
		expect(add.calledWith("SUM", 1, 3.7)).to.be.true;
        });
        it("should round number correctly", () => {
                sendPaymentRequestToApi(1.2, 3.7);
		expect(add.called).to.be.true;
		expect(add.calledWith("SUM", 1.2, 3.7)).to.be.true;
        });
        it("should round number correctly", () => {
                sendPaymentRequestToApi(1.5, 3.7);
		expect(add.called).to.be.true;
		expect(add.calledWith("SUM", 1.5, 3.7)).to.be.true;
        });
        it("should round number correctly", () => {
                sendPaymentRequestToApi(0, 3.7);
		expect(add.called).to.be.true;
		expect(add.calledWith("SUM", 0, 3.7)).to.be.true;
        });
});
