const { converter } = require('../../type/base');
let Number = require('../../type');
const ops = require('../../operations');
const { eFlags } = require('../../type/flags');

module.exports = {
    prepareMultiplicationTable: (number) => {
        let Ten = number._base.value;
        const multiplactionTable = [Ten - 1];
        multiplactionTable[0] = Number.getNumber(0, number._base);
        for (let index = 1; index < Ten; index++) {
            multiplactionTable[index] = ops.addition(multiplactionTable[index - 1], number);
            if (index == Ten - 1) {
                // console.log(number._value,' * 10 = ', multiplactionTable[index]._value);
                // console.log('leftShift(',number._value,') =', module.exports.leftShift(number)._value);
                return multiplactionTable;
            }
        }
    },
    multiplication: (num1, num2) => {
        // multiplcation of two numbers num1 and num2
        let multiplier = num2._value + '';
        if (multiplier.startsWith('-')) {
            multiplier = multiplier.substr(1);
        }

        let shiftDecimals = num1._rightLength + num2._rightLength;
        let n1 = Number.getNumber(
            Number.getNumberWithoutDotOrDash(num1._value),
            num1._base
        );
        let n2 = Number.getNumber(
            Number.getNumberWithoutDotOrDash(num2._value),
            num2._base
        );
        multiplier = multiplier.split()[0] + '' + (multiplier.split().length > 1 ? multiplier.split()[1] : '');
        let sign = n1._flags._sign == n2._flags._sign ? eFlags.RESET : eFlags.SET;
        let sum = Number.getZeros(n1._leftLength + n2._leftLength, n1._rightLength + n2._rightLength)
        let multiplicationTable = module.exports.prepareMultiplicationTable(n1);
        for (let index = 0; index < multiplier.length; index++) {

            let currentMultiplier = multiplier[index];
            currentMultiplier = converter.getBaseFromTextChar(currentMultiplier).value;
            sum = ops.leftShift(sum);
            sum = ops.addition(sum, multiplicationTable[currentMultiplier]);

            if (index == multiplier.length - 1) {
                let value = sign == eFlags.SET ? '-' : '';
                value += sum._value;
                sum = Number.getNumber(value, sum._base);
                sum = ops.rightShift(sum, shiftDecimals);
                return sum;
            }
        }
    },    
}