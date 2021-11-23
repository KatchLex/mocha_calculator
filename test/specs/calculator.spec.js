const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('calculator', function() {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'Calculator');
    });

    afterEach(() => {
        calculator = null;
    });

    it('should add up positive values', function() {
        expect(calculator.addNumbers(333333.33, 333333.33, 333333.34)).to.be.equal(1000000);
    });

    it('should add up negative values', function() {
        expect(calculator.addNumbers(-333333.33, -333333.33, -333333.34)).to.be.equal(-1000000);
    });

    it('should throw error if provided with not a number', function() {
        let callWithError = () => calculator.addNumbers('string', 0, 5);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("Not all varaibles are of type 'Number'");
    });

    it('should throw error if provided with a variable name', function() {
        let callWithError = () => calculator.addNumbers(variable, 100500, 19);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("variable is not defined");
    });

    it('should correctly multiply values', function() {
        expect(calculator.muliplyNumbers(1, 12345679, 9)).to.be.equal(111111111);
    });

    it('should be positive if all 3 numbers are positive', function() {
        expect(calculator.muliplyNumbers(10, 11258, 548)).to.be.above(0);
    });

    it('should be negative if 1 number is negative', function() {
        expect(calculator.muliplyNumbers(10, 11258, -548)).to.be.below(0);
    });

    it('should be positive if 2 numbers are negative', function() {
        expect(calculator.muliplyNumbers(15, -1, -148)).to.be.above(0);
    });

    it('should be negative if all 3 numbers are negative', function() {
        expect(calculator.muliplyNumbers(-1, -1, -548)).to.be.below(0);
    });

    it('should return 0 when any number is 0', function() {
        expect(calculator.muliplyNumbers(1, 0, -548)).to.be.equal(0);
    });

    it('should throw error if provided with not a number', function() {
        let callWithError = () => calculator.muliplyNumbers('string', 0, 5);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("Not all varaibles are of type 'Number'");
    });

    it('should throw error if provided with a variable name', function() {
        let callWithError = () => calculator.muliplyNumbers(100500, variable, 19);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("variable is not defined");
    });
})
