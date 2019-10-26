
module.exports  = {
    test01:()=>{
        return 'hello world';
    },
    text02:()=>{
        let number = require('../../module/type/index');
        return number.getNumber('123', 'A', 'RESET');
    }
}