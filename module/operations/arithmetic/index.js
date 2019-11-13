let number = require('../../type/');
const {eBase} = require('../../type/base');
const {eFlags} = require('../../type/flags');
module.exports = {
    addition:(num1, num2)=>{
        let addition = require('./addition');
        // check for signs here
        if(num1._flags._sign == num2._flags._sign){
            // both signs same, perform addition
            return addition.unsignedAddition(num1, num2);
        }else{
            // both signs different, perform subtraction,
            sum = module.exports.subtraction(num1 , num2);
        }
    },
    subtraction:(num1, num2)=>{
        let arr = [num1, num2];
        let ops = require('../../operations');
        let min = ops.min(arr, false);
        // check for signs here
        if(num1._flags._sign == num2._flags._sign){
            // both signs same, perform subtraction
            let subtraction = require('./subtraction');
            let sign;
            let r;
            if(min == 0){
                // num2 - num1
                sign = num2._flags._sign;
                r = subtraction.unsignedSubtraction(num2, num1);
                // let numString = sign==eFlags.SET || r._flags._zero==eFlags.SET?r._getValue():'-'+r._getValue();
                let numString = sign==eFlags.SET ?'-'+r._getValue():r._getValue();
                r = number.getNumber(numString, r._base);
                return r;
            }else if (min == 1){
                // num1 - num2
                sign = num1._flags._sign;
                r = subtraction.unsignedSubtraction(num1, num2);
                // let numString = sign==eFlags.SET || r._flags._zero==eFlags.SET?r._getValue():'-'+r._getValue();
                let numString = sign==eFlags.SET?'-'+r._getValue():r._getValue();
                r = number.getNumber(numString, r._base);
                return r;
            }else{
                // exception
                console.log('something went wrong');
            }
        }else {
            // num1 is -ve
            let addition = require('./addition');
            r = addition.unsignedAddition(num1, num2);
            let numString = r._getValue();
            if(num1._flags._sign==eFlags.SET){
                numString = '-'+numString;
            }
            r = number.getNumber(numString, r._base);
            return r;
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
                // check for signs here
                if(sum._flags._sign == number._flags._sign){
                    // both signs same, perform addition
                    sum = module.exports.addition(sum, number);
                }else if(sum._flags._sign != number._flags._sign){
                    // both signs different, perform subtraction,
                    sum = module.subtraction(sum , number);
                }
            }
        }else if(numbers.length==1){
            sum = numbers[0]
        }else{
            let Number = require('../../type');
            sum = Number.getZeros(null, 0, 0);
        }
        return sum;
    },
}