let BXCNumber = require('../../type/number');
const {eBase} = require('../../type/base');
module.exports = {
    sum:(numbers)=>{
        // let n = '[';
        // for (let index = 0; index < numbers.length; index++) {
        //     const number = numbers[index];
        //     n+= number._getFormattedValue(0);
        //     n+=index+1 < numbers.length?',':'';
        // }
        // n+=']';
        let addition = require('./addition');
        let sum;
        if(numbers.length>1){
            sum = numbers[0];
            for (let index = 1; index < numbers.length; index++) {
                const number = numbers[index];
                // check for larger of two and signs here
                if(sum._flags._sign == number._flags._sign){
                    // both signs same, perform addition
                    sum = addition.unsignedAddition(sum, number);
                }else if(sum._flags._sign != number._flags._sign){
                    // both signs different, perform subtraction,
                    // and put larger number's sign
                    let arr = [sum, number];
                    let ops = require('../../operations');
                    let min = ops.min(arr);
                    if(min == 0){
                        // number - sum
                    }else if (min == 1){
                        // sum - number
                    }else{
                        // exception
                        console.log('something went wrong');
                    }
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