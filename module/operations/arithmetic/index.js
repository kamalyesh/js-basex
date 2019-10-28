let number = require('../../type/');
const {eBase} = require('../../type/base');
module.exports = {
    addition:(num1, num2)=>{
        let addition = require('./addition');
        return addition.unsignedAddition(num1, num2);
    },
    subtraction:(num1, num2)=>{
        let subtraction = require('./subtraction');
        let arr = [num1, num2];
        let ops = require('../../operations');
        let min = ops.min(arr);
        if(min == 0){
            // num2 - num1
            let r = subtraction.unsignedSubtraction(num2, num1);
            r = number.getNumber('-'+r._getValue(), r._base);
            return r;
        }else if (min == 1){
            // num1 - num2
            return subtraction.unsignedSubtraction(num1, num2);
        }else{
            // exception
            console.log('something went wrong');
        }
    },
    sum:(numbers)=>{
        // let n = '[';
        // for (let index = 0; index < numbers.length; index++) {
        //     const number = numbers[index];
        //     n+= number._getFormattedValue(0);
        //     n+=index+1 < numbers.length?',':'';
        // }
        // n+=']';
        let sum;
        if(numbers.length>1){
            sum = numbers[0];
            for (let index = 1; index < numbers.length; index++) {
                const number = numbers[index];
                // check for larger of two and signs here
                if(sum._flags._sign == number._flags._sign){
                    // both signs same, perform addition
                    sum = module.exports.addition(sum, number);
                }else if(sum._flags._sign != number._flags._sign){
                    // both signs different, perform subtraction,
                    // and put larger number's sign
                    sum = module.subtraction(sum , number);
                }
            }
        }else if(numbers.length==1){
            sum = numbers[0]
        }else{
            let number = require('../../type');
            sum = number.getZeros(null, 0, 0);
        }
        return sum;
    },
}