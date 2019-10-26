let BXCNumber = require('./number');

module.exports = {
    getNumber:(value, base, sign)=>{
        let o = new BXCNumber(value, base);
        return o;
    }
}