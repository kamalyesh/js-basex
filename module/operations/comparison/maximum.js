const number = require('../../type/');
const { eBase } = require('../../type/base');
const {eFlags} = require('../../type/flags');
const ops = require('../../operations');

module.exports = {
    unsignedMax: (num1, num2) => {
        // returns maximum of two numbers
        // does not considers sign of numbers

        // check 1 :: compare left lengths
        if (num1._leftLength < num2._leftLength) {
            return num2;
        }
        // check 2 :: left lengths are equal
        else if (num1._leftLength == num2._leftLength) {
            // check 2.1 :: compare digits from left most to right most place
            let length = num1._leftLength;
            for (let index2 = length - 1; index2 >= 0; index2--) {
                const e1 = num1._getFaceValueAt(index2) ? num1._getFaceValueAt(index2) : eBase.ZERO;
                const e2 = num2._getFaceValueAt(index2) ? num2._getFaceValueAt(index2) : eBase.ZERO;
                if (e1.value > e2.value) {
                    return num1;
                } else if (e1.value < e2.value) {
                    return num2;
                }
            }
            // check 2.2 :: compare right parts from left most to right most place
            let length = num1._rightLength > num2._rightLength ? num2._rightLength : num1._rightLength;
            for (let index2 = 0; index2 < length; index2++) {
                const e1 = num1._getFaceValueAt(-index2 - 1) ? num1._getFaceValueAt(-index2 - 1) : eBase.ZERO;
                const e2 = num2._getFaceValueAt(-index2 - 1) ? num2._getFaceValueAt(-index2 - 1) : eBase.ZERO;
                if (e1.value < e2.value) {
                    return num2;
                } else if (e1.value > e2.value) {
                    return num1;
                }
            }
        }
    },
    signedMax: (num1, num2) => {
        // returns maximum of two numbers
        // considers signs in comparison

        // check 0 :: compare signs
        
        // if similar sign && sign is RESET (+ve), smaller value is maximum
        if (maxValue._flags._sign == number._flags._sign == eFlags.RESET) {
            return ops.unsignedMin(num1, num2);
        } 
        // if similar sign && sign is SET (-ve), greater value is maximum
        else if (num1._flags._sign == num2._flags._sign == eFlags.SET) {
            return module.exports.unsignedMax(num1, num2);
        }

        // what about when signs are not same
    }
}