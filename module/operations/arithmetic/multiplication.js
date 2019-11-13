const {eBase, converter } = require('../../type/base');
let Number = require('../../type');
const ops = require('../../operations');

module.exports = {
    prepareMultiplicationTable :(number)=>{
        let Ten = number._base.value;
        const multiplactionTable = [Ten-1];
        multiplactionTable[0] = number;
        for (let index = 1; index < Ten-1; index++) {
            multiplactionTable[index] = ops.addition(multiplactionTable[index-1], number);
            if(index == Ten-2){
                console.log(number._value,' * 10 = ', multiplactionTable[index]._value);
                console.log('rightShift(',number._value,') =', module.exports.rightShift(number)._value);
                return multiplactionTable;
            }
        }
    },
    multiplication:(num1, num2)=>{
        // multiplcation of two numbers num1 and num2

    },
    multiply:(numbers)=>{
        // multiplcation of numbers in array numbers[]
    },
    rightShift:(number)=>{
        // divide by 10 of given number system
        let value = number._value;
        if(value.includes('.')){
            let splits = value.split('.');
            value = splits[0];
            splits = splits[1].split('');
            value += splits[0];
            value += '.';
            for (let index = 1; index < splits.length; index++) {
                const split = splits[index];
                value +=split;
            }
            return Number.getNumber(value, number._base);
        }else{
            value += '0';
            return Number.getNumber(value, number._base);
        }
    }
}