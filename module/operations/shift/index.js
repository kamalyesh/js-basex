
module.exports = {

    shift: (number, shiftCount) => {
        if (shiftCount == 0) {
            return number;
        } else if (shiftCount > 0) {
            return module.exports.leftShift(number, shiftCount);
        } else if (shiftCount < 0) {
            return module.exports.rightShift(number, shiftCount);
        }
    },
    leftShift: (number, shiftCount) => {
        const {leftShift} = require('./leftShift');
        return leftShift(number, shiftCount);
    },
    rightShift: (number, shiftCount) => {
        const {rightShift} = require('./rightShift');
        return rightShift(number, shiftCount);
    },

}