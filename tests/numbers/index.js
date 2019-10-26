
module.exports  = {
    test01:()=>{
        return 'hello world';
    },
    text02:()=>{
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
    text03:()=>{
        console.log('TEST', ' create positive number ');
        
        let number = require('../../module/type/index');
        number = number.getNumber('123123123123123123.456789', null)
        return {
            v: number._getValue(),
            lv: number._getInt(),
            fv: number._getFaceValueAt(-3),
            f: number._getFlags()
        };
    },
    text04:()=>{
        console.log('TEST', ' create negative number ');
        
        let number = require('../../module/type/index');
        number = number.getNumber(-123, null)
        return number;
    }
}