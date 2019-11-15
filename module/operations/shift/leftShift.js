let Number = require('../../type');

module.exports = {
    leftShift: (number, shiftCount) => {
        // divide by 10 of given number system
        if (shiftCount == 0) {
            return number;
        } else if (shiftCount > 0) {
            let value = number._value;
            if (value.includes('.')) {
                let splits = value.split('.');
                value = splits[0];
                splits = splits[1].split('');
                value += splits[0];
                value += '.';
                for (let index = 1; index < splits.length; index++) {
                    const split = splits[index];
                    value += split;
                    if(index == splits.length-1){
                        return module.exports.leftShift(Number.getNumber(value, number._base), shiftCount-1);
                    }
                }
            } else {
                value += '0';
                return module.exports.leftShift(Number.getNumber(value, number._base), shiftCount-1);
            }
        }else if (!shiftCount){
            return module.exports.leftShift(number, 1);
        }
    }
}