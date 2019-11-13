let BXCNumber = require('../type/number');
const {eBase} = require('../type/base');
module.exports = {
    sum:(numbers)=>{
        let arith = require('./arithmetic');
        return arith.sum(numbers);
    },
    addition:(num1, num2)=>{
        let arith = require('./arithmetic');
        return arith.addition(num1, num2);
    },
    subtraction:(num1, num2)=>{
        let arith = require('./arithmetic');
        return arith.subtraction(num1, num2);
    },
    min:(numbers, signed)=>{
        let compare = require('./comparison');
        return compare.min(numbers, signed);
    },
    max:(numbers, signed)=>{
        let compare = require('./comparison');
        return compare.max(numbers, signed);
    }
}