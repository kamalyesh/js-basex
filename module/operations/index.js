let BXCNumber = require('../type/number');
const {eBase} = require('../type/base');
module.exports = {
    sum:(numbers)=>{
        let arith = require('./arithmetic');
        return arith.sum(numbers);
    },
}