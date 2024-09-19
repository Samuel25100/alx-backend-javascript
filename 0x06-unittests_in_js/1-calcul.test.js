const calculateNumber = require('./1-calcul');
var assert = require('assert');

describe('calculateNumber', () => {
	describe('calculateNumber SUM', () => {
		it("Should return correct result", () => {
                	const re = calculateNumber('SUM', 1, 3);
                	assert.equal(re, 4);
        	});
        	it("should round number correctly", () => {
                	const re = calculateNumber('SUM', 1, 3.7);
                	assert.equal(re, 5);
        	});
        	it("should round number correctly", () => {
                	const re = calculateNumber('SUM', 1.2, 3.7);
                	assert.equal(re, 5);
        	});
        	it("should round number correctly", () => {
        	        const re = calculateNumber('SUM', 1.5, 3.7);
        	        assert.equal(re, 6);
        	});
        	it("should round number correctly", () => {
        	        const re = calculateNumber('SUM', 0, 3.7);
        	        assert.equal(re, 4);
        	});
        	it("should round -ve number correctly", () => {
                	const re = calculateNumber('SUM', 2, -3.7);
                	assert.equal(re, -2);
        	});
        	it("should round two -ve number correctly", () => {
                	const re = calculateNumber('SUM', -2.3, -3.7);
                	assert.equal(re, -6);
        	});
        	it("should round two -ve number correctly", () => {
        	        const re = calculateNumber('SUM', -1.5, -3.7);
        	        assert.equal(re, -5);
        	});
	});

	describe("calculateNumber SUBTRACT", () => {
		it("Should return correct result", () => {
                        const re = calculateNumber('SUBTRACT', 1, 3);
                        assert.equal(re, -2);
                });
                it("should round number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 3.7, 1);
                        assert.equal(re, 3);
                });
                it("should round number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 3.7, 1.2);
                        assert.equal(re, 3);
                });
                it("should round number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 1.5, 3.7);
                        assert.equal(re, -2);
                });
                it("should round number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 0, 3.7);
                        assert.equal(re, -4);
                });
                it("should round -ve number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 2, -3.7);
                        assert.equal(re, 6);
                });
                it("should round two -ve number correctly", () => {
                        const re = calculateNumber('SUBTRACT', -2.3, -3.7);
                        assert.equal(re, 2);
                });
                it("should round two -ve number correctly", () => {
                        const re = calculateNumber('SUBTRACT', -1.5, -3.7);
                        assert.equal(re, 3);
		});
	});

	describe("calculateNumber DIVIDE", () => {
		it("should return correct division", () => {
			const re = calculateNumber('DIVIDE', 4, 2);
			assert.equal(re, 2);
		});
		it("should return correct division", () => {
                        const re = calculateNumber('DIVIDE', 3.5, 2);
                        assert.equal(re, 2);
                });
		it("should return correct division", () => {
                        const re = calculateNumber('DIVIDE', 4, 1.5);
                        assert.equal(re, 2);
                });
		it("should return correct division", () => {
                        const re = calculateNumber('DIVIDE', 0, 2);
                        assert.equal(re, 0);
                });
		it("should return correct division", () => {
                        const re = calculateNumber('DIVIDE', 3.5, 1.5);
                        assert.equal(re, 2);
                });
		it("should return Error", () => {
                        const re = calculateNumber('DIVIDE', 4, 0);
                        assert.equal(re, "Error");
                });
	});
});
