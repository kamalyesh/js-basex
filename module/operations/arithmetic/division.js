const {eBase, converter } = require('../../type/base');
let Number = require('../../type');
const ops = require('../../operations');

var result= {
    division:Number.getPI(),
    remainder:Number.getPI()
}

module.exports = {

    division:(num1, num2)=>{
        return result.division;
    },

    remainder:(num1, num2)=>{
        return result.remainder;
    }
}