
function getPaymentTokenFromAPI(success) {
	if (success) {
		const re = {data: 'Successful response from the API' };
		return Promise.resolve(re);
	}
}
module.exports = getPaymentTokenFromAPI;
