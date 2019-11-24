const { eBase, converter } = require('../../type/base');
const Number = require('../../type');
const ops = require('../../operations');
const {eFlags} = require('../../type/flags');

module.exports = {
    unsignedAddition: (num1, num2) => {
        let leftPart1 = num1._leftPart;
        let leftPart2 = num2._leftPart;
        let rightPart1;
        let rightPart2;
        if (num1._flags._float) {
            // get right part of num1
            rightPart1 = num1._rightPart;
        } else { rightPart1 = [] }
        if (num2._flags._float) {
            //  get right part of num2
            rightPart2 = num2._rightPart;
        } else { rightPart2 = [] }

        let leftLength = leftPart1.length > leftPart2.length ? leftPart1.length : leftPart2.length;
        let rightLength = rightPart1.length > rightPart2.length ? rightPart1.length : rightPart2.length;
        // create a zero
        let zero = Number.getZeros(num1._base, leftLength + 1, rightLength);
        let base = num1._base;
        let carry = eBase.ZERO;
        for (let index = rightLength - 1; index >= 0; index--) {
            // sum of right side. do this first and get a carry

            // get values for single digit addition
            let a = rightPart1[index] ? rightPart1[index] : eBase.ZERO;
            let b = rightPart2[index] ? rightPart2[index] : eBase.ZERO;
            // make addition
            let s = a.value + b.value + carry.value;
            if (s >= base.value) {
                // if addition is greater than or equal to 10, make adjustments
                s = s - base.value;
                // carry is one
                carry = eBase.ONE;
            } else {
                // carry is zero
                carry = eBase.ZERO;
            }
            // put new single digit sum into the addition zero
            s = converter.getBaseFromValue(s);
            zero._setFaceValueAt(-index - 1, s);
        }
        leftPart1 = leftPart1.reverse();
        leftPart2 = leftPart2.reverse();
        for (let index = 0; index < leftLength; index++) {
            // sum of left side. do this second using earlier carry

            // get values for single digit addition
            let a = leftPart1[index] ? leftPart1[index] : eBase.ZERO;
            let b = leftPart2[index] ? leftPart2[index] : eBase.ZERO;
            // make addition
            let s = a.value + b.value + carry.value;
            if (s >= base.value) {
                // if addition is greater than or equal to 10, make adjustments
                s = s - base.value;
                // carry is one
                carry = eBase.ONE;
            } else {
                // carry is zero
                carry = eBase.ZERO;
            }
            // put new single digit sum into the addition zero
            s = converter.getBaseFromValue(s);
            zero._setFaceValueAt(index, s);
        }
        leftPart1 = leftPart1.reverse();
        leftPart2 = leftPart2.reverse();
        zero._setFaceValueAt(leftLength, carry);
        zero._trimZero();
        return zero;
    },
    addition: (num1, num2) => {
        if(num2._flags._zero == eFlags.SET){
            return num1;
        }else if(num1._flags._zero == eFlags.SET){
            return num2;
        }
        // check for signs here
        if (num1._flags._sign == num2._flags._sign) {
            // both signs same, perform addition
            return ops.unsignedAddition(num1, num2);
        } else {
            // both signs different, perform subtraction,
            return ops.subtraction(num1, num2);
        }
    }
}