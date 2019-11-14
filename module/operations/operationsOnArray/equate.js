const ops = require('../../operations');

module.exports = {
    unsignedEquate: (numbers) => {
        // returns true if numbers are equal
        // does not considers sign of numbers
        if (numbers.length > 1) {
            for (let index = 0; index < numbers.length - 1; index++) {
                // get values
                let number = numbers[index]._value + '';
                let nextNumber = numbers[index + 1]._value + '';

                if (!ops.unsignedEquate(number, nextNumber)) {
                    return false;
                }

                if (index == numbers.length - 1) {
                    return true;
                }
            }
        } else {
            return true;
        }
    },
    signedEquate: (numbers) => {
        // returns true if numbers are equal
        // considers signs in comparison
        if (numbers.length > 1) {
            for (let index = 0; index < numbers.length - 1; index++) {
                // get values
                let number = numbers[index]._value + '';
                let nextNumber = numbers[index + 1]._value + '';

                if (!ops.signedEquate(number, nextNumber)) {
                    return false;
                }

                if (index == numbers.length - 1) {
                    return true;
                }
            }
        } else {
            return true;
        }
    }
}