const {eBase, converter } = require('../../type/base');
let Number = require('../../type');
const ops = require('../../operations');

module.exports = {
    prepareMultiplicationTable :(number)=>{
        let Ten = number._base.value;
        const multiplactionTable = [Ten-1];
        multiplactionTable[0] = number;
        for (let index = 1; index < Ten-1; index++) {
            multiplactionTable[index] = ops.addition(multiplactionTable[index-1], number);
            if(index == Ten-2){
                return multiplactionTable;
            }
        }
    }
}