module.exports = {
    unsignedEquate: (num1, num2) => {
        // returns true if two numbers are equal
        // does not considers sign of numbers

        let base;
        if (num1._base.value == num2._base.value) base = num1._base;
        else throw new Error('invald operation! base mismatch!');

        if (typeof num1 != 'string') {
            num1._trimZero();
            num1 = num1._value;
        }
        if (typeof num2 != 'string') {
            num2._trimZero();
            num2 = num2._value;
        }

        // check for signs of both
        if ((num1.startsWith('-') && !num2.startsWith('-')) || (!num1.startsWith('-') && num2.startsWith('-'))) {
            if (num1.startsWith('-')) num1 = num1.substr(1);
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

        let base;
        if (num1._base.value == num2._base.value) base = num1._base;
        else throw new Error('invald operation! base mismatch!');

        if (typeof num1 != 'string') {
            num1._trimZero();
            num1 = num1._value;
        }
        if (typeof num2 != 'string') {
            num2._trimZero();
            num2 = num2._value;
        }

        // test equivalence
        if (num1 !== num2) {
            return false;
        }
        return true;
    }
}