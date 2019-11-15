module.exports = {
    unsignedEquate: (num1, num2) => {
        // returns true if two numbers are equal
        // does not considers sign of numbers

        if (typeof num1 != 'string') { num1 = num1._value };
        if (typeof num2 != 'string') { num2 = num2._value };

        // check for signs of both
        if ((num1.startsWith('-') && !num2.startsWith('-')) || (!num1.startsWith('-') && num2.startsWith('-'))) {
            if (num.startsWith('-')) num = num.substr(1);
            if (num2.startsWith('-')) num2 = num2.substr(1);
        }

        // test equivalence
        if (num1 !== num2) {
            return false;
        }
        return true;
    },
    signedEquate: (num1, num2) => {
        // returns true if numbers are equal
        // considers signs in comparison

        if (typeof num1 != 'string') { num1 = num1._value };
        if (typeof num2 != 'string') { num2 = num2._value };

        // test equivalence
        if (num1 !== num2) {
            return false;
        }
        return true;
    }
}