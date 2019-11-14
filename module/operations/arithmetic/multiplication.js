const {eBase, converter } = require('../../type/base');
let Number = require('../../type');
const ops = require('../../operations');
const {eFlags} = require('../../type/flags');

module.exports = {
    prepareMultiplicationTable :(number)=>{
        let Ten = number._base.value;
        const multiplactionTable = [Ten-1];
        multiplactionTable[0] = Number.getNumber(0, number._base);
        for (let index = 1; index < Ten; index++) {
            multiplactionTable[index] = ops.addition(multiplactionTable[index-1], number);
            if(index == Ten-1){
                console.log(number._value,' * 10 = ', multiplactionTable[index]._value);
                console.log('leftShift(',number._value,') =', module.exports.leftShift(number)._value);
                return multiplactionTable;
            }
        }
    },
    multiplication:(num1, num2)=>{
        // multiplcation of two numbers num1 and num2
        let multiplier = num2._value+'';
        if(multiplier.startsWith('-')){
            multiplier = multiplier.substr(1);
        }
        multiplier = multiplier.split()[0]+''+(multiplier.split().length>1?multiplier.split()[1]:'');
        let sign = num1._flags._sign == num2._flags._sign?eFlags.RESET:eFlags.SET;
        let sum = Number.getZeros(num1._leftLength+num2._leftLength, num1._rightLength+ num2._rightLength)
        let multiplicationTable = module.exports.prepareMultiplicationTable(num1);
        for (let index = 0; index < multiplier.length; index++) {
            let currentMultiplier = multiplier[index];
            currentMultiplier = converter.getBaseFromTextChar(currentMultiplier).value;
            sum = module.exports.leftShift(sum);
            sum = ops.addition(sum, multiplicationTable[currentMultiplier]);
            if(index==multiplier.length-1){
                let v = sign==eFlags.SET?'-':'';
                v += sum._value
                sum = Number.getNumber(v, sum._base);
                console.log('multiplication:', sum);
                return
            }
        }        
    },
    multiply:(numbers)=>{
        // multiplcation of numbers in array numbers[]
    },
    leftShift:(number)=>{
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