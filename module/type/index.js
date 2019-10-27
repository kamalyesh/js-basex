let BXCNumber = require('./number');
const {eBase} = require('./base');
module.exports = {
    getNumber:(value, base, sign)=>{
        let o = new BXCNumber(value, base);
        return o;
    },
    getPI:(base)=>{
        if(base == null || base == 10 || base == 'A' || base == eBase.A){
            const o = new BXCNumber("3.141592", base);
            return o;
        }else{
            throw Error('Not supported yet');
        }
    },
    getZeros:(base,left,right)=>{
        let v = '';
        if(left){
            while(left>0){
                v+=eBase.ZERO.text;
                left--;
            }
        }else{
            v = '0'
        }
        if(right){
            if(right>0){
                v+='.';
            }
            while(right>0){
                v+=eBase.ZERO.text;
                right--;
            }
        }else{
            v+='0';
        }
        return new BXCNumber(v, base);
    }
}