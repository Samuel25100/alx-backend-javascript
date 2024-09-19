var assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
	it("Should return correct result", () => {
		const re = calculateNumber(1, 3);
		assert.equal(re, 4);
	});
	it("should round number correctly", () => {
		const re = calculateNumber(1, 3.7);
                assert.equal(re, 5);
	});
	it("should round number correctly", () => {
                const re = calculateNumber(1.2, 3.7);
                assert.equal(re, 5);
        });
	it("should round number correctly", () => {
                const re = calculateNumber(1.5, 3.7);
                assert.equal(re, 6);
        });
	it("should round number correctly", () => {
                const re = calculateNumber(0, 3.7);
                assert.equal(re, 4);
        });
	it("should round -ve number correctly", () => {
                const re = calculateNumber(2, -3.7);
                assert.equal(re, -2);
        });
	it("should round two -ve number correctly", () => {
                const re = calculateNumber(-2.3, -3.7);
                assert.equal(re, -6);
        });
	it("should round two -ve number correctly", () => {
                const re = calculateNumber(-1.5, -3.7);
                assert.equal(re, -5);
        });
});
