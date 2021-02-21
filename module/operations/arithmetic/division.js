const { eBase, converter } = require('../../type/base');
const { eFlags } = require('../../type/flags')
let Number = require('../../type');
const ops = require('../../operations');

var result = {
    division: Number.getPI(),
    remainder: Number.getPI(),
}


module.exports = {

    division: (num1, num2, precision = 6) => {
        // division of two numbers num1 and num2
        let base;
        if (num1._base.value == num2._base.value) base = num1._base;
        else throw new Error('invald operation! base mismatch!');
        let sign;
        if (num1._flags._sign == num2._flags._sign) sign = eFlags.RESET;
        else sign = eFlags.SET;

        num1 = Number.getNumber(
            num1._flags._sign == eFlags.SET ?
                num1._value.substr(1) :
                num1._value
            , num1._base);
        num2 = Number.getNumber(
            num2._flags._sign == eFlags.SET ?
                num2._value.substr(1) :
                num2._value
            , num2._base);
        let Baki = Number.getNumber("0", base);
        let count = 0;
        let getDivision = (Bhajy, Bhajak) => {
            let multiplier = 0;
            for (let i = Bhajak._base.value - 1; i > 0; --i) {
                let num_now = multiplicationTable[i];
                num_now = ops.subtraction(num_now, Bhajy);
                num_now._trimZero();

                if (num_now._value == "0") {
                    /*
                        if difference is zero,
                        we have our division
                    */
                    multiplier = i;
                    break;
                } else {
                    if (num_now._flags._sign == eFlags.RESET) {
                        /*
                            num_now - Bhajy is positive number
                        */

                        let num_next = multiplicationTable[i - 1];
                        num_next._trimZero();
                        Bhajy._trimZero();
                        num_next = ops.subtraction(num_next, Bhajy);
                        num_next._trimZero();

                        if (num_next._value == "0") {
                            /*
                                if difference is zero,
                                we have our division
                            */
                            multiplier = i - 1;
                            break;
                        }
                        if (num_next._flags._sign == eFlags.SET) {
                            /*
                                num_now - Bhajy is positive number
                                and num_next - Bhajy is negative number
                                therefore, we have our division as i
                            */
                            multiplier = i - 1;
                            break;
                        }
                    } else {
                        /*
                            return multiplier as i
                         */
                        multiplier = i;
                        break;
                    }
                }
            }
            return multiplier;
        }

        let shiftDecimals = 0;
        let shiftE1 = 0;
        let shiftE2 = 0;
        let n1 = num1;
        let n2 = num2;

        while (n1._rightLength > 1) {
            shiftE1++;
            n1 = ops.leftShift(n1);
        }
        while (n1._getFaceValueAt(-1).value != 0) {
            shiftE1--;
            n1 = ops.leftShift(n1);
        }
        while (n2._rightLength > 1) {
            shiftE2--;
            n2 = ops.leftShift(n2);
        }
        while (n2._getFaceValueAt(-1).value != 0) {
            shiftE2++;
            n2 = ops.leftShift(n2);
        }
        let shiftE = 0;
        shiftE = shiftE1 - shiftE2;
        if (shiftE >= 0 && shiftE < precision) {
            shiftE = precision;
        } else if (shiftE < 0 && precision + shiftE >= 0 && precision + shiftE < precision) {
            precision = precision + shiftE;
        }
        shiftDecimals = shiftE;
        let divider = n2._value.startsWith('-') ? n2._value.substr(1) : n2._value;
        divider = Number.getNumber(divider, base);
        let i = 0;
        let multiplicationTable = ops.prepareMultiplicationTable(divider);
        let bhagakar = '';

        while (count < precision + 1) {
            let division = getDivision(n1, n2);
            Baki = ops.subtraction(n1, multiplicationTable[division]);
            Baki._trimZero();
            try {
                bhagakar += division;
            } catch (ex) {
                console.log(ex);
            }
            if (Baki._value != "0" || Baki._flags._sign == eFlags.RESET) {
                //bhagakar+=division;
                Baki = ops.leftShift(Baki);
                Baki._trimZero();
                /*if(bhagakar.contains(".")){
                    bhagakar+="0";
                }else{
                    bhagakar+=".";
                }*/
            }
            n1 = Baki;
            count++;
        }

        bhagakar = Number.getNumber(sign == eFlags.SET ? '-' + bhagakar : bhagakar, base);
        bhagakar._trimZero();
        bhagakar = ops.rightShift(bhagakar, shiftDecimals);
        Baki = ops.rightShift(Baki, shiftDecimals);
        result.division = bhagakar;
        result.remainder = Baki;
        return result;
    },
    unsignedDivision: (num1, num2) => {
        let result = module.exports.division(num1, num2);
        let resultStr = result._getValue();
        resultStr = resultStr.startsWith("-") ? resultStr.substr(1) : resultStr;
        result = Number.getNumber(resultStr, result._base, eFlags.RESET)
        return result;
    }
}