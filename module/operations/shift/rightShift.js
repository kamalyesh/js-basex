const Number = require('../../type');

module.exports = {
    rightShift: (number, shiftCount) => {
        // divide by 10 of given number system
        if (shiftCount == 0) {
            return number;
        } else if (shiftCount > 0) {
            let value = number._value;
            let splits = value.split('.');
            let p1 = splits[0]==''?'0':splits[0].substr(0, splits[0].length - 1);
            let p2 = splits[0]==''?'0':splits[0][splits[0].length-1];
            let p3 = p1 + '.' + p2;
            let p4 = splits[1] ? splits[1] : '';
            value = p3 + p4;
            return module.exports.rightShift(Number.getNumber(value, number._base), shiftCount - 1);
        } else if (!shiftCount) {
            return module.exports.rightShift(number, 1);
        }
    }
}