const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe("Test async function", () => {

	it("The func excute correctly", (done) => {
		getPaymentTokenFromAPI(true).then((data) => {
			assert.equal(data.data,
				'Successful response from the API');
			done();
		});
	});
});
