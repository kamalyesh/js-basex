
module.exports = {
    test01: () => {
        return {status:true, result:'hello world'};
    },
    test02: () => {
        console.log('TEST', ' create zero number ');

        let number = require('../../module/type/index');
        number = number.getNumber(null, null)
        return {
            status: true, result: {
                v: number._getValue(),
                lv: number._getInt(),
                f: number._getFlags(),
                fv: number._getFaceValueAt(0),
            }
        };
    },
    test03: () => {
        console.log('TEST', ' create positive number ');

        let number = require('../../module/type/index');
        number = number.getNumber('123123123123123123.456789')
        return {
            status: true, result: {
                v: number._getValue(),
                lv: number._getInt(),
                fv: number._getFaceValueAt(-3),
                f: number._getFlags()
            }
        };
    },
    test04: () => {
        console.log('TEST', ' create negative number ');

        let number = require('../../module/type/index');
        number = number.getNumber(-123)
        return {status:true, number};
    },
    test05: () => {
        console.log('TEST', ' replacing face value at a position in a number ');

        let number = require('../../module/type/index');
        number = number.getNumber(-123)
        number._setFaceValueAt(1, 5)
        return {status:true,result: number._getValue()};
    },
    test06: () => {
        console.log('TEST', ' PI ');
        let number = require('../../module/type/index');
        number = number.getPI();
        return {status:true, number};
    },
    test07: () => {
        console.log('TEST', ' trimming excess zero from number ');
        let number = require('../../module/type/index');
        number = number.getNumber('000110.100');
        number._trimZero();
        return {status:true,number};
    },
    test08: () => {
        console.log('TEST', ' printing formatted number, grouped by \',\' ');
        let number = require('../../module/type/index');
        number = number.getNumber('1203456000110.100');
        return {status:true,result: number._getFormattedValue(3)};
    }
}