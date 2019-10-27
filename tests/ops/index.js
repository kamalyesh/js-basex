module.exports  = {
    test01:()=>{
        return 'hello world';
    },
    test02:()=>{
        console.log('TEST', ' simple unsigned addition (two numbers)');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n1 = number.getNumber('13.1234567890');
        let n2 = number.getNumber('92.2345678901');
        let sum = ops.sum([n1, n2]);
        return sum;
    },
    test03:()=>{
        console.log('TEST', ' simple unsigned addition (one number)');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n1 = number.getNumber('13.1234567890');
        let sum = ops.sum([n1]);
        return sum;
    },
    test04:()=>{
        console.log('TEST', ' simple unsigned addition (no numbers)');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let sum = ops.sum([]);
        return sum;
    },
}