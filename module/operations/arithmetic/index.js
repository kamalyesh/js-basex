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
                sum = addition.uAdd(sum, numbers[1]);
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