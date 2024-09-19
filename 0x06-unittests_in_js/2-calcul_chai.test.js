const calculateNumber = require('./1-calcul');
const { expect } = require('chai');

describe('calculateNumber', () => {
	describe('calculateNumber SUM', () => {
		it("Should return correct result", () => {
                	const re = calculateNumber('SUM', 1, 3);
                	expect(re).to.equal( 4);
        	});
        	it("should round number correctly", () => {
                	const re = calculateNumber('SUM', 1, 3.7);
			expect(re).to.equal(5);
        	});
        	it("should round number correctly", () => {
                	const re = calculateNumber('SUM', 1.2, 3.7);
			expect(re).to.equal(5);
        	});
        	it("should round number correctly", () => {
        	        const re = calculateNumber('SUM', 1.5, 3.7);
			expect(re).to.equal(6);
        	});
        	it("should round number correctly", () => {
        	        const re = calculateNumber('SUM', 0, 3.7);
			expect(re).to.equal(4);
        	});
        	it("should round -ve number correctly", () => {
                	const re = calculateNumber('SUM', 2, -3.7);
			expect(re).to.equal(-2);
        	});
        	it("should round two -ve number correctly", () => {
                	const re = calculateNumber('SUM', -2.3, -3.7);
			expect(re).to.equal(-6);
        	});
        	it("should round two -ve number correctly", () => {
        	        const re = calculateNumber('SUM', -1.5, -3.7);
			expect(re).to.equal(-5);
        	});
	});

	describe("calculateNumber SUBTRACT", () => {
		it("Should return correct result", () => {
                        const re = calculateNumber('SUBTRACT', 1, 3);
			expect(re).to.equal(-2);
                });
                it("should round number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 3.7, 1);
			expect(re).to.equal(3);
                });
                it("should round number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 3.7, 1.2);
			expect(re).to.equal(3);
                });
                it("should round number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 1.5, 3.7);
			expect(re).to.equal(-2);
                });
                it("should round number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 0, 3.7);
			expect(re).to.equal(-4);
                });
                it("should round -ve number correctly", () => {
                        const re = calculateNumber('SUBTRACT', 2, -3.7);
			expect(re).to.equal(6);
                });
                it("should round two -ve number correctly", () => {
                        const re = calculateNumber('SUBTRACT', -2.3, -3.7);
			expect(re).to.equal(2);
                });
                it("should round two -ve number correctly", () => {
                        const re = calculateNumber('SUBTRACT', -1.5, -3.7);
			expect(re).to.equal(3);
		});
	});

	describe("calculateNumber DIVIDE", () => {
		it("should return correct division", () => {
			const re = calculateNumber('DIVIDE', 4, 2);
			expect(re).to.equal(2);
		});
		it("should return correct division", () => {
                        const re = calculateNumber('DIVIDE', 3.5, 2);
			expect(re).to.equal(2);
                });
		it("should return correct division", () => {
                        const re = calculateNumber('DIVIDE', 4, 1.5);
			expect(re).to.equal(2);
                });
		it("should return correct division", () => {
                        const re = calculateNumber('DIVIDE', 0, 2);
			expect(re).to.equal(0);
                });
		it("should return correct division", () => {
                        const re = calculateNumber('DIVIDE', 3.5, 1.5);
			expect(re).to.equal(2);
                });
		it("should return Error", () => {
                        const re = calculateNumber('DIVIDE', 4, 0);
			expect(re).to.equal("Error");
                });
	});
});
