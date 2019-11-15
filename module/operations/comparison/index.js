
module.exports = {
    unsignedEquate: (num1, num2) => {
        const compare = require('./equate');
        return compare.unsignedEquate(num1, num2);
    },
    signedEquate: (num1, num2) => {
        const compare = require('./equate');
        return compare.signedEquate(num1, num2);
    },
    areEqual: (num1, num2, signed) => {
        const compare = require('./equate');
        if (signed) return compare.signedEquate(num1, num2);
        else return compare.unsignedEquate(num1, num2);
    },

    unsignedMax: (num1, num2) => {
        const compare = require('./maximum');
        return compare.unsignedMax(num1, num2);
    },
    signedMax: (num1, num2) => {
        const compare = require('./maximum');
        return compare.signedMax(num1, num2);
    },
    max: (num1, num2, signed) => {
        const compare = require('./maximum');
        if (signed) return compare.signedMax(num1, num2);
        else return compare.unsignedMax(num1, num2);
    },

    unsignedMin: (num1, num2) => {
        const compare = require('./minimum');
        return compare.unsignedMin(num1, num2);
    },
    signedMin: (num1, num2) => {
        const compare = require('./minimum');
        return compare.signedMin(num1, num2);
    },
    min: (num1, num2, signed) => {
        const compare = require('./minimum');
        if (signed) return compare.signedMin(num1, num2);
        else return compare.unsignedMin(num1, num2);
    },
}