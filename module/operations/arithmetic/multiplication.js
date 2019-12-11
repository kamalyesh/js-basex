const { converter } = require('../../type/base');
let Number = require('../../type');
const ops = require('../../operations');
const { eFlags } = require('../../type/flags');

module.exports = {
    prepareMultiplicationTable: (number) => {
        if (number._flags._sign == eFlags.SET) {
            let n = number._value;
            n = n.substr(1);
            number = Number.getNumber(n, number._base);
        }
        let Ten = number._base.value;
        const multiplactionTable = [];
        multiplactionTable[0] = Number.getNumber(0, number._base);
        multiplactionTable[0]._trimZero();

        let index;
        for (index = 1; index < Ten; index++) {
            let n = ops.addition(multiplactionTable[index - 1], number)._value;
            multiplactionTable[index] = Number.getNumber(n, number._base);
            if (index == Ten - 1) {
                // console.log(number._value,' * 10 = ', multiplactionTable[index]._value);
                // console.log('leftShift(',number._value,') =', module.exports.leftShift(number)._value);
                return multiplactionTable;
            }
        }
        if (index > Ten) {
            throw new Error('invalid base for preparing multiplaction table');
        }
    },
    multiplication: (num1, num2) => {
        // multiplcation of two numbers num1 and num2
        let base;
        if (num1._base.value == num2._base.value) base = num1._base;
        else throw new Error('invald operation! base mismatch!');

        let shiftDecimals = 0;
        let n1 = num1;
        let n2 = num2;
        while (n1._value.includes('.') && n2._value.includes('.')) {
            n1 = ops.leftShift(n1);
            n2 = ops.leftShift(n2);
            shiftDecimals += 2;
        }
        while (n1._value.includes('.')) {
            n1 = ops.leftShift(n1);
            shiftDecimals++;
        }
        while (n2._value.includes('.')) {
            n2 = ops.leftShift(n2);
            shiftDecimals++;
        }
        let multiplier = n2._value.startsWith('-') ? n2._value.substr(1) : n2._value;

        let sign = n1._flags._sign == n2._flags._sign ? eFlags.RESET : eFlags.SET;
        let sum = Number.getZeros(base, num1._leftLength + num2._leftLength, num1._rightLength + num2._rightLength);
        let multiplicationTable = module.exports.prepareMultiplicationTable(n1);
        for (let index = 0; index < multiplier.length; index++) {

            let currentMultiplier = multiplier[index];
            currentMultiplier = converter.getBaseFromTextChar(currentMultiplier).value;
            sum = ops.addition(sum, multiplicationTable[currentMultiplier]);

            if (index == multiplier.length - 1) {
                let value = sign == eFlags.SET ? '-' : '';
                value += sum._value;
                sum = Number.getNumber(value, sum._base);
                sum = ops.rightShift(sum, shiftDecimals);
                return sum;
            }
            sum = ops.leftShift(sum);
        }
    },
}