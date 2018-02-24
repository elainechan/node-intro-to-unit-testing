const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {
	it('should throw error if `num` is not a number', () => {
		const badInputs = [
			true,
			'hello',
			[1, 5, 6],
			function() {}
		];
		badInputs.forEach((input) => {
			expect(function() {
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
	it('should return `fizz-buzz` if `num` is divisible by both 3 and 5', () => {
		const normalCases = [
			15,
			30,
			45
		];
		normalCases.forEach((input) => {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('fizz-buzz');
		});
	});
	it('should return `buzz` if `num` is divisible by 5 but not by 3', () => {
		const normalCases = [
			25,
			10,
			40,
			200
		];
		normalCases.forEach((input) => {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('buzz');
		});
	});
	it ('should return `fizz` if `num` is divisible by 3 but not by 5', () => {
		const normalCases = [
			9,
			18,
			36,
			303
		];
		normalCases.forEach((input) => {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('fizz');
		});
	});
	it ('should return the input number itself if `num` is neither divisible by 3 nor by 5', () => {
		const normalCases = [
			2,
			632,
			44,
			94,
			34.24
		];
		normalCases.forEach((input) => {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal(input);
		});
	});
});