const number = require('../../type/');
const ops = require('../../operations');
const { eFlags } = require('../../type/flags');
module.exports = {
    addition: (num1, num2) => {
        const arith = require('./addition');
        return arith.addition(num1, num2);
    },
    unsignedAddition: (num1, num2) => {
        const arith = require('./addition');
        return arith.unsignedAddition(num1, num2);
    },
    subtraction: (num1, num2) => {
        const arith = require('./subtraction');
        return arith.subtraction(num1, num2);
    },
    unsignedSubtraction: (num1, num2) => {
        const arith = require('./subtraction');
        return arith.unsignedSubtraction(num1, num2);
    },
    prepareMultiplicationTable: (number) => {
        const arith = require('./multiplication');
        return arith.prepareMultiplicationTable(num1, num2);
    },
    multiplication: (num1, num2) => {
        const arith = require('./multiplication');
        return arith.multiplication(num1, num2);
    }
}