module.exports  = {
    test01:()=>{
        return {status:'success',result:'hello world'};
    },
    test02:()=>{
        console.log('TEST', ' simple unsigned addition (two numbers)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n1 = Number.getNumber('13.1234567890');
        let n2 = Number.getNumber('92.2345678901');
        let sum = ops.sum([n1, n2]);
        return {status:'success',sum};
    },
    test03:()=>{
        console.log('TEST', ' simple unsigned addition (one number)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n1 = Number.getNumber('13.1234567890');
        let sum = ops.sum([n1]);
        return {status:'success',sum};
    },
    test04:()=>{
        console.log('TEST', ' simple unsigned addition (no numbers)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let sum = ops.sum([]);
        return {status:'success', sum};
    },
    test05:()=>{
        console.log('TEST', ' minimum of two numbers ');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        
        let n1 = Number.getNumber('3.2345678901');
        let n2 = Number.getNumber('-13.1234567890');

        let arr = [n1, n2];
        console.log('minimum of (',n2._getValue(),',',n1._getValue(),'):', arr[ops.min(arr)]._getValue());
        
        return {status:'success',result: arr[ops.min(arr)]};
    },
    test06:()=>{
        console.log('TEST', ' simple unsigned subtraction (two numbers)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n1 = Number.getNumber('10.1234567890');
        let n2 = Number.getNumber('20.2345678901');
        let sum = ops.subtraction(n2, n1);
        return {status:'success', sum};
    },
    test07:()=>{
        console.log('TEST', ' zero - number');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');

        let n1 = Number.getZeros(null, 1, 1);
        console.log('zero: ', n1);
        let n2 = Number.getNumber('92.2345678901');
        let sum = ops.subtraction(n1, n2);
        return {status:'success',sum};
    },
    test08:()=>{
        console.log('TEST', 'result zero ');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');

        let n1 = Number.getNumber('10.1');
        let n2 = Number.getNumber('10.1');
        let sum = ops.subtraction(n1, n2);
        return {status:'success', sum};
    },
    test09:()=>{
        console.log('TEST', ' maximum of two numbers ');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        
        let n1 = Number.getNumber('-3.2345678901');
        let n2 = Number.getNumber('13.1234567890');

        let arr = [n1, n2];
        console.log('maximum of (',n2._getValue(),',',n1._getValue(),'):', arr[ops.max(arr)]._getValue());
        
        return {status:'success',result:arr[ops.max(arr, true)]};
    },
    test10:()=>{
        console.log('TEST', ' equivalence of two numbers ');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        
        let n1 = Number.getNumber('3.2345678901');
        let n2 = Number.getNumber('13.1234567890');
        // let n2 = Number.getNumber('3.2345678901');

        let arr = [n1, n2];
        console.log('Are ',n2._getValue(),' & ',n1._getValue(),' equal?');
        let result = ops.areEqual(arr);
        console.log(result?'Yes':'No');
        
        return {status:'success',result:ops.areEqual(arr, true)};
    },
    test11:()=>{
        console.log('TEST', ' simple signed subtraction (two numbers)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n2 = Number.getNumber('-10.1234567890');
        let n1 = Number.getNumber('-20.2345678901');
        let sum = ops.subtraction(n1, n2);
        return {status:'success',sum};
    },
    test12:()=>{
        console.log('TEST', ' multiplication table of 1 to 10, in base 10');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations/arithmetic/multiplication');
        const {eBase} = require('../../module/type/base');
        let Ten = eBase.FIVE;
        for(let num = 1; num<Ten.value; ++num){
            let table = Number.getNumber(num+'', Ten);
            table = ops.prepareMultiplicationTable(table);
            for (let index2 = 0; index2 < table.length; index2++) {
                const element = table[index2];
                console.log(element._value);
            }
            console.log('..');
        }
        return {status:'success'};
    },
}