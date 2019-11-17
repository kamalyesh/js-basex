const ops = require('../../operations');

module.exports = {
    sum: (numbers) => {
        let sum;
        if (numbers.length > 1) {
            sum = numbers[0];
            for (let index = 1; index < numbers.length; index++) {
                const number = numbers[index];
                // check for signs here
                if (sum._flags._sign == number._flags._sign) {
                    // both signs same, perform addition
                    sum = ops.addition(sum, number);
                } else if (sum._flags._sign != number._flags._sign) {
                    // both signs different, perform subtraction,
                    sum = ops.subtraction(sum, number);
                }
            }
        } else if (numbers.length == 1) {
            sum = numbers[0]
        } else {
            let Number = require('../../type');
            sum = Number.getZeros(null, 0, 0);
        }
        return sum;
    }
}