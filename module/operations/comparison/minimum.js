let Number = require('../../type/');
const { eBase } = require('../../type/base');
const { eFlags } = require('../../type/flags');
const ops = require('../../operations');

module.exports = {
    unsignedMin: (num1, num2) => {
        // returns minimum of two numbers
        // does not considers sign of numbers

        let base;
        if (num1._base.value == num2._base.value) base = num1._base;
        else throw new Error('invald operation! base mismatch!');

        if (ops.equate(num1, num2)) {
            return num1;
        }
        // check 1 :: compare left lengths
        else if (num1._leftLength > num2._leftLength) {
            return num2;
        }
        // check 2 :: left lengths are equal
        else if (num1._leftLength == num2._leftLength) {
            // check 2.1 :: compare digits from left most to right most place
            let length = num1._leftLength;
            for (let index2 = length - 1; index2 >= 0; index2--) {
                const e1 = num1._getFaceValueAt(index2) ? num1._getFaceValueAt(index2) : eBase.ZERO;
                const e2 = num2._getFaceValueAt(index2) ? num2._getFaceValueAt(index2) : eBase.ZERO;
                if (e1.value < e2.value) {
                    return num1;
                } else if (e1.value > e2.value) {
                    return num2;
                }
            }
            // check 2.2 :: compare right parts from left most to right most place
            if (num1._rightLength == 0) return num1;
            if (num2._rightLength == 0) return num2;
            length = num1._rightLength > num2._rightLength ? num2._rightLength : num1._rightLength;
            for (let index2 = 0; index2 < length; index2++) {
                const e1 = num1._getFaceValueAt(-index2 - 1) ? num1._getFaceValueAt(-index2 - 1) : eBase.ZERO;
                const e2 = num2._getFaceValueAt(-index2 - 1) ? num2._getFaceValueAt(-index2 - 1) : eBase.ZERO;
                if (e1.value > e2.value) {
                    return num2;
                } else if (e1.value < e2.value) {
                    return num1;
                }
            }
        } else {
            return num1;
        }
    },
    signedMin: (num1, num2) => {
        // returns maximum of two numbers
        // considers signs in comparison

        let base;
        if (num1._base.value == num2._base.value) base = num1._base;
        else throw new Error('invald operation! base mismatch!');

        if (ops.equate(num1, num2)) {
            return num1;
        }
        // check 0 :: compare signs
        // if similar sign && sign is RESET (+ve), smaller value is maximum
        if (num1._flags._sign == num2._flags._sign == eFlags.RESET) {
            return module.exports.unsignedMin(num1, num2);
        }
        // if similar sign && sign is SET (-ve), greater value is maximum
        else if (num1._flags._sign == num2._flags._sign == eFlags.SET) {
            return ops.unsignedMax(num1, num2);
        }

        // what about when signs are not same
    }
}