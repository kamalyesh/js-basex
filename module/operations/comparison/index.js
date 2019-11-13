let BXCNumber = require('../../type/number');
const {eBase} = require('../../type/base');

module.exports = {
    min:(numbers, signed)=>{
        let compare = require('./minimum');
        if(signed)  return compare.signedMin(numbers);
        else        return compare.unsignedMin(numbers);
    },
    max:(numbers, signed)=>{
        let compare = require('./maximum');
        if(signed)  return compare.signedMin(numbers);
        else        return compare.unsignedMax(numbers);
    },
}