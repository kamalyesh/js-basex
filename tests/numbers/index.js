
module.exports  = {
    test01:()=>{
        return 'hello world';
    },
    test02:()=>{
        console.log('TEST', ' create zero number ');
        
        let number = require('../../module/type/index');
        number = number.getNumber(null, null)
        return {
            v: number._getValue(),
            lv: number._getInt(),
            f: number._getFlags(),
            fv: number._getFaceValueAt(-3),
        };
    },
    test03:()=>{
        console.log('TEST', ' create positive number ');
        
        let number = require('../../module/type/index');
        number = number.getNumber('123123123123123123.456789')
        return {
            v: number._getValue(),
            lv: number._getInt(),
            fv: number._getFaceValueAt(-3),
            f: number._getFlags()
        };
    },
    test04:()=>{
        console.log('TEST', ' create negative number ');
        
        let number = require('../../module/type/index');
        number = number.getNumber(-123)
        return number;
    },
    test05:()=>{
        console.log('TEST', ' replacing face value at a position in a number ');
        
        let number = require('../../module/type/index');
        number = number.getNumber(-123)
        number._setFaceValueAt(1, 5)
        return number._getValue();
    },
    test06:()=>{
        console.log('TEST', ' PI ');
        let number = require('../../module/type/index');
        number = number.getPI();
        return number;
    },
    test07:()=>{
        console.log('TEST', ' trimming excess zero from number ');
        let number = require('../../module/type/index');
        number = number.getNumber('000110.100');
        number._trimZero();
        return number;
    }
}