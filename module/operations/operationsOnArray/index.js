
module.exports = {
    sum: (numbers) => {
        const summation = require('./summation');
        return summation.sum(numbers);
    },
    multiply: (numbers) => {
        const multication = require('./multiply');
        return multication.multiply(numbers);
    },
    unsignedEquate: (numbers) => {
        const comparison = require('./equate');
        return comparison.unsignedEquate(numbers);
    },
    signedEquate: (numbers) => {
        const comparison = require('./equate');
        return comparison.signedEquate(numbers);
    },
    equate: (numbers, signed) => {
        const comparison = require('./equate');
        if(signed){
            return comparison.signedEquate(numbers);
        }else{
            return comparison.unsignedEquate(numbers);
        }
    },
    unsignedMax: (numbers) => {
        const comparison = require('./maximum');
        return comparison.unsignedEquate(numbers);
    }
}