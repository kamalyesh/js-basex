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
    test05:()=>{
        console.log('TEST', ' minimum of two numbers ');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');
        
        let n1 = number.getNumber('3.2345678901');
        let n2 = number.getNumber('-13.1234567890');

        let arr = [n1, n2];
        console.log('minimum of (',n2._getValue(),',',n1._getValue(),'):', arr[ops.min(arr)]._getValue());
        
        return arr[ops.min(arr)];
    },
    test06:()=>{
        console.log('TEST', ' simple unsigned subtraction (two numbers)');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n1 = number.getNumber('10.1234567890');
        let n2 = number.getNumber('20.2345678901');
        let sum = ops.subtraction(n2, n1);
        return sum;
    },
    test07:()=>{
        console.log('TEST', ' zero - number');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');

        let n1 = number.getZeros(null, 1, 1);
        console.log('zero: ', n1);
        let n2 = number.getNumber('92.2345678901');
        let sum = ops.subtraction(n1, n2);
        return sum;
    },
    test08:()=>{
        console.log('TEST', 'result zero ');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');

        let n1 = number.getNumber('10.1');
        let n2 = number.getNumber('10.1');
        let sum = ops.subtraction(n1, n2);
        return sum;
    },
    test09:()=>{
        console.log('TEST', ' maximum of two numbers ');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');
        
        let n1 = number.getNumber('-3.2345678901');
        let n2 = number.getNumber('13.1234567890');

        let arr = [n1, n2];
        console.log('maximum of (',n2._getValue(),',',n1._getValue(),'):', arr[ops.max(arr)]._getValue());
        
        return arr[ops.max(arr, true)];
    },
    test10:()=>{
        console.log('TEST', ' equivalence of two numbers ');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');
        
        let n1 = number.getNumber('3.2345678901');
        let n2 = number.getNumber('13.1234567890');
        // let n2 = number.getNumber('3.2345678901');

        let arr = [n1, n2];
        console.log('Are ',n2._getValue(),' & ',n1._getValue(),' equal?');
        let result = ops.areEqual(arr);
        console.log(result?'Yes':'No');
        
        return ops.areEqual(arr, true);
    },
    test11:()=>{
        console.log('TEST', ' simple signed subtraction (two numbers)');
        let number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n2 = number.getNumber('-10.1234567890');
        let n1 = number.getNumber('-20.2345678901');
        let sum = ops.subtraction(n1, n2);
        return sum;
    },
}