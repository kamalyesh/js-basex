let BXCNumber = require('../../type/number');
const {eBase} = require('../../type/base');

module.exports = {
    min:(numbers, signed)=>{
        let compare = require('./minimum');
        if(signed)  return compare.signedMin(numbers);
        else        return compare.unsignedMin(numbers);
    }
}