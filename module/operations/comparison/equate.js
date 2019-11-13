let number = require('../../type/');
const {eBase} = require('../../type/base');

module.exports = {
    unsignedEquate:(numbers)=>{
        // returns true if numbers are equal
        // does not considers sign of numbers
        if(numbers.length>1){
            for (let index = 0; index < numbers.length-1; index++) {
                // get values
                let number = numbers[index]._value +'';
                let nextNumber = numbers[index+1]._value +'';

                // check for signs of both
                if((number.startsWith('-') && !nextNumber.startsWith('-')) || (!number.startsWith('-') && nextNumber.startsWith('-'))){
                    if(number.startsWith('-'))number = number.substr(1);
                    if(nextNumber.startsWith('-'))nextNumber = nextNumber.substr(1);
                }

                // test equivalence
                if(number !== nextNumber){
                    return false;
                }
            }
        }
        return true;
    },
    signedEquate:(numbers)=>{
        // returns true if numbers are equal
        // considers signs in comparison
        if(numbers.length>1){
            for (let index = 0; index < numbers.length-1; index++) {
                // get values
                let number = numbers[index]._value +'';
                let nextNumber = numbers[index+1]._value +'';

                // test equivalence
                if(number !== nextNumber){
                    return false;
                }
            }
        }
        return true;
    }
}