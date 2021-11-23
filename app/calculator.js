class Calculator {
    constructor(){
        
    };
    
    addNumbers(a, b, c) {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
           throw new Error("Not all varaibles are of type 'Number'");
        }
        return a + b + c;
    };

    muliplyNumbers(d, e, f) {
        if (typeof d !== 'number' || typeof e !== 'number' || typeof f !== 'number') {
            throw new Error("Not all varaibles are of type 'Number'");
        }
        return d * e * f;
    };
}

module.exports = Calculator;
