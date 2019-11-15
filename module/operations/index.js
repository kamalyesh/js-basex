module.exports = {

    addition: (num1, num2) => {
        const arith = require('./arithmetic');
        return arith.addition(num1, num2);
    },
    unsignedAddition: (num1, num2) => {
        const arith = require('./arithmetic');
        return arith.unsignedAddition(num1, num2);
    },
    subtraction: (num1, num2) => {
        const arith = require('./arithmetic');
        return arith.subtraction(num1, num2);
    },
    unsignedSubtraction: (num1, num2) => {
        const arith = require('./arithmetic');
        return arith.unsignedSubtraction(num1, num2);
    },

    unsignedEquate: (num1, num2) => {
        const comparison = require('./comparison');
        return comparison.unsignedEquate(num1, num2);
    },
    signedEquate: (num1, num2) => {
        const comparison = require('./comparison');
        return comparison.signedEquate(num1, num2);
    },
    equate: (num1, num2, signed) => {
        const comparison = require('./comparison');
        return comparison.areEqual(num1, num2, signed);
    },
    unsignedMax: (num1, num2) => {
        const comparison = require('./comparison');
        return comparison.unsignedMax(num1, num2);
    },
    signedMax: (num1, num2) => {
        const comparison = require('./comparison');
        return comparison.signedMax(num1, num2);
    },
    max: (num1, num2, signed) => {
        const comparison = require('./comparison');
        if (signed) return comparison.signedMax(num1, num2);
        else return comparison.unsignedMax(num1, num2);
    },

    unsignedMin: (num1, num2) => {
        const comparison = require('./comparison');
        return comparison.unsignedMin(num1, num2);
    },
    signedMin: (num1, num2) => {
        const comparison = require('./comparison');
        return comparison.signedMin(num1, num2);
    },
    min: (num1, num2, signed) => {
        const comparison = require('./comparison');
        if (signed) return comparison.signedMin(num1, num2);
        else return comparison.unsignedMin(num1, num2);
    },

    sum: (numbers) => {
        const arith = require('./operationsOnArray');
        return arith.sum(numbers);
    },
    unsignedMaximum: (numbers) => {
        const comparison = require('./operationsOnArray');
        return comparison.unsignedMaximum(numbers);
    },
    signedMaximum: (numbers) => {
        const comparison = require('./operationsOnArray');
        return comparison.signedMaximum(numbers);
    },
    maximum: (numbers, signed) => {
        const comparison = require('./operationsOnArray');
        return comparison.maximum(numbers, signed);
    },
    unsignedMinimum: (numbers) => {
        const comparison = require('./operationsOnArray');
        return comparison.unsignedMinimum(numbers);
    },
    signedMinimum: (numbers) => {
        const comparison = require('./operationsOnArray');
        return comparison.signedMinimum(numbers);
    },
    minimum: (numbers, signed) => {
        const comparison = require('./operationsOnArray');
        return comparison.minimum(numbers, signed);
    },
    unsignedAreEqual: (numbers) => {
        const comparison = require('./operationsOnArray');
        return comparison.unsignedEquate(numbers);
    },
    signedAreEqual: (numbers) => {
        const comparison = require('./operationsOnArray');
        return comparison.signedEquate(numbers);
    },
    areEqual: (numbers, signed) => {
        const comparison = require('./operationsOnArray');
        return comparison.equate(numbers, signed);
    },
    // min: (numbers, signed) => {
    //     const compare = require('./comparison');
    //     return compare.min(numbers, signed);
    // },
    // max: (numbers, signed) => {
    //     const compare = require('./comparison');
    //     return compare.max(numbers, signed);
    // },
    // multiply: (numbers) => {
    //     // multiplcation of numbers in array numbers[]
    // },
    // areEqual: (numbers, signed) => {
    //     const compare = require('./comparison');
    //     return compare.areEqual(numbers, signed);
    // },
    
    shift: (number, shiftCount) => {
        const shifter = require('./shift');
        return shifter.shift(number, shiftCount);
    },
    leftShift: (number, shiftCount) => {
        const shifter = require('./shift');
        return shifter.leftShift(number, shiftCount);
    },
    rightShift: (number, shiftCount) => {
        const shifter = require('./shift');
        return shifter.rightShift(number, shiftCount);
    },

}