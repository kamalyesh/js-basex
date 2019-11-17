
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
        if (signed) {
            return comparison.signedEquate(numbers);
        } else {
            return comparison.unsignedEquate(numbers);
        }
    },
    unsignedMaximum: (numbers) => {
        const comparison = require('./maximum');
        return comparison.unsignedMaximum(numbers);
    },
    signedMaximum: (numbers) => {
        const comparison = require('./maximum');
        return comparison.signedMaximum(numbers);
    },
    maximum: (numbers, signed) => {
        const comparison = require('./maximum');
        if (signed) {
            return comparison.signedMaximum(numbers);
        } else {
            return comparison.unsignedMaximum(numbers);
        }
    },
    unsignedMinimmum: (numbers) => {
        const comparison = require('./minimum');
        return comparison.unsignedMinimum(numbers);
    },
    signedMinimum: (numbers) => {
        const comparison = require('./minimum');
        return comparison.signedMinimum(numbers);
    },
    minimum: (numbers, signed) => {
        const comparison = require('./minimum');
        if (signed) {
            return comparison.signedMinimum(numbers);
        } else {
            return comparison.unsignedMinimum(numbers);
        }
    }


}