const { eBase, converter } = require('../../type/base');
const Number = require('../../type');
const ops = require('../../operations');
const { eFlags } = require('../../type/flags');

module.exports = {
    unsignedSubtraction: (num1, num2) => {
        // assume num1 is greater than num2
        let result = Number.getNumber();
        let leftPart1 = num1._leftPart;
        let leftPart2 = num2._leftPart;
        let rightPart1;
        let rightPart2;
        if (num1._flags._float) {
            // get right part of num1
            rightPart1 = num1._rightPart;
        } else rightPart1 = '';
        if (num2._flags._float) {
            //  get right part of num2
            rightPart2 = num2._rightPart;
        } else rightPart2 = '';

        let leftLength = leftPart1.length > leftPart2.length ? leftPart1.length : leftPart2.length;
        let rightLength = rightPart1.length > rightPart2.length ? rightPart1.length : rightPart2.length;
        // create a zero
        let zero = Number.getZeros(num1._base, leftLength + 1, rightLength);
        let base = num1._base;
        let borrow = eBase.ZERO;
        for (let index = rightLength; index >= 0; index--) {
            // sum of right side. do this first and get a borrow

            let i = index - 1;
            let j = index - 1;
            // get values for single digit subtraction
            let a = rightPart1[i] ? rightPart1[i] : eBase.ZERO;
            let b = rightPart2[j] ? rightPart2[j] : eBase.ZERO;
            // make subtraction
            let s = b.value + borrow.value;
            if (s > a.value) {
                // if first number is smaller than second number and borrow, make adjustments
                s = a.value + base.value;
                s = s - b.value - borrow.value;
                // borrow is one
                borrow = eBase.ONE;
            } else {
                // borrow is zero
                s = a.value - b.value - borrow.value;
                borrow = eBase.ZERO;
            }
            // put new single digit sum into the subtraction zero
            s = converter.getBaseFromValue(s);
            zero._setFaceValueAt(-rightLength - index + 1, s);
        }
        for (let index = 0; index < leftLength; index++) {
            // sum of left side. do this second using earlier borrow
            let i = num1._leftLength - index - 1;
            let j = num2._leftLength - index - 1;
            // get values for single digit subtraction
            let a = leftPart1[i] ? leftPart1[i] : eBase.ZERO;
            let b = leftPart2[j] ? leftPart2[j] : eBase.ZERO;
            // make subtraction
            let s = b.value + borrow.value;
            if (s > a.value) {
                // if first number is smaller than second number and borrow, make adjustments
                s = a.value + base.value;
                s = s - b.value - borrow.value;
                // borrow is one
                borrow = eBase.ONE;
            } else {
                // borrow is zero
                s = a.value - b.value - borrow.value;
                borrow = eBase.ZERO;
            }
            // put new single digit sum into the subtraction zero
            s = converter.getBaseFromValue(s);
            zero._setFaceValueAt(index, s);
        }
        zero._setFaceValueAt(leftLength, borrow);
        zero._trimZero();
        // console.log('num1:', num1._getValue());
        // console.log('num2:', num2._getValue());
        // console.log('sum :',zero._getValue());
        // console.log('borrow: ', borrow);
        return zero;
    },
    subtraction: (num1, num2) => {
        if (num2._flags._zero == eFlags.SET) {
            return num1;
        } else if (num1._flags._zero == eFlags.SET) {
            return Number.getNumber('-' + num2._value, num2._base);
        }
        let arr = [num1, num2];
        let min = ops.minimum(arr, true);
        // check for signs here
        if (num1._flags._sign == num2._flags._sign) {
            // both signs same, perform subtraction
            let subtraction = require('./subtraction');
            let sign;
            let returnValue;
            if (min == 0) {
                // num2 - num1
                sign = eFlags.SET;
                returnValue = subtraction.unsignedSubtraction(num2, num1);
                // let numString = sign==eFlags.SET || r._flags._zero==eFlags.SET?r._getValue():'-'+r._getValue();
                let numString = sign == eFlags.SET ? '-' + returnValue._getValue() : returnValue._getValue();
                returnValue = Number.getNumber(numString, returnValue._base);
                return returnValue;
            } else if (min == 1) {
                // num1 - num2
                sign = eFlags.RESET;
                returnValue = subtraction.unsignedSubtraction(num1, num2);
                // let numString = sign==eFlags.SET || r._flags._zero==eFlags.SET?r._getValue():'-'+r._getValue();
                let numString = sign == eFlags.SET ? '-' + returnValue._getValue() : returnValue._getValue();
                returnValue = Number.getNumber(numString, returnValue._base);
                return returnValue;
            } else {
                // exception
                console.log('something went wrong');
            }
        } else {
            // num1 is -ve
            let returnValue = ops.unsignedAddition(num1, num2);
            let numString = returnValue._getValue();
            if (num1._flags._sign == eFlags.SET) {
                numString = '-' + numString;
            }
            returnValue = Number.getNumber(numString, returnValue._base);
            return returnValue;
        }
    }
}