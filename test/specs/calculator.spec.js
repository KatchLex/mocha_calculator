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

    it('should return 5 when receives 1 and 2 and 2', function() {
        expect(calculator.addNumbers(1, -2, 2)).to.be.equal(1);
    });

    it('should throw an error if provided with a not a number', function() {
        let callWithError = () => calculator.addNumbers('f', 0, 5);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("Not all varaibles are of type 'Number'");
    });

    it('should throw an error if provided with a not a number', function() {
        let callWithError = () => calculator.addNumbers(f, 0, 5);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("f is not defined");
    });

    it('should perform correct multiplication', function() {
        expect(calculator.muliplyNumbers(1, 12345679, 9)).to.be.equal(111111111);
    });

    it('should return 0 when receives a 0', function() {
        expect(calculator.muliplyNumbers(1, 0, -548)).to.be.equal(0);
    });

    it('should be positive if 2 numbers are negative', function() {
        expect(calculator.muliplyNumbers(1, -1, -548)).to.be.above(0);
    });

    it('should be negative if 1 number is negative', function() {
        expect(calculator.muliplyNumbers(1, 1, -548)).to.be.below(0);
    });

    it('should be negative if 3 number are negative', function() {
        expect(calculator.muliplyNumbers(-1, -1, -548)).to.be.below(0);
    });

    it('should throw an error if provided with not a number', function() {
        let callWithError = () => calculator.muliplyNumbers('f', 0, 5);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("Not all varaibles are of type 'Number'");
    });

    it('should throw an error if provided with a not a number', function() {
        let callWithError = () => calculator.muliplyNumbers(f, 'd', d);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("f is not defined");
    });

    // it('should be called twice when provided with 2', function() {
    //     factorial.factorialSimple(2);
    //     expect(spy).to.have.been.called(1);
    // });

    // it('should return 1 when provided 1', function() {
    //     expect(factorial.factorialSimple(1)).to.be.equal(1);
    // });
})