const ops = require('../../operations');

module.exports = {
    multiply: (numbers) => {
        // multiplcation of numbers in array numbers[]
        let sum;
        if (numbers.length > 1) {
            sum = numbers[0];
            for (let index = 1; index < numbers.length; index++) {
                const number = numbers[index];
                sum = ops.multiplication(sum, number);
            }
        } else if (numbers.length == 1) {
            sum = numbers[0]
        } else {
            let Number = require('../../type');
            sum = Number.getZeros(null, 0, 0);
        }
        return sum;
    },
}