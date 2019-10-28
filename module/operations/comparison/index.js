let BXCNumber = require('../../type/number');
const {eBase} = require('../../type/base');

module.exports = {
    min:(numbers)=>{
        let compare = require('./minimum');
        return compare.signedMin(numbers);
    }
}