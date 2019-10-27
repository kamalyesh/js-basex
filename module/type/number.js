const { eFlags } = require('./flags');
const { eBase, converter } = require('./base');

module.exports = class BXCNumber {

    constructor(value, base) {
        // set value
        if (value) this._value = value;
        else this._value = 0;
        // set base
        if (base) this._base = base;
        else this._base = eBase.A;
        this._process();
    }

    _process() {
        // convert number, if it is, to string
        this._value = this._value + '';
        // get left part and right part of number, splitted by .
        let splits = this._value.split('.');
        splits[0] ? this._leftValue = splits[0]+'' : this._leftValue = '0';
        splits[1] ? this._rightValue = splits[1]+'' : this._rightValue = '0';
        // set sign flags
        let flags = {};
        if (this._value.startsWith('-')) {
            flags._sign = eFlags.SET;
            this._leftValue = this._leftValue.substr(1);
        }else flags._sign = eFlags.RESET;
        // set zero flag
        if (this._value == 0 || (this._leftValue==0 && this._rightValue==0)) flags._zero = eFlags.SET;
        else flags._zero = eFlags.RESET;
        // set float flag
        splits[1]?flags._float = eFlags.SET: flags._float=eFlags.RESET;
        // set flags
        this._flags = flags;

        // set lengths
        this._length = flags._sign==eFlags.SET?this._value.length-1:this._value.length;
        this._length = flags._flags==eFlags.SET?this._length-1:this._length;
        this._leftLength = this._leftValue.length;
        this._rightLength = flags._float==eFlags.SET?this._rightValue.length:0;

        this._leftPart = [];
        {
            let arr = [];
            if(this._leftValue){    
                for (let index = 0; index < this._leftValue.length; index++) {
                    const c = this._leftValue[index];
                    if(c!='-')  arr.push(converter.getBaseFromTextChar(c));
                }
            }
            this._leftPart = arr;
        }
        this._rightPart = [];
        {
            let arr = [];
            if(this._rightValue){
                for (let index = 0; index < this._rightValue.length; index++) {
                    const c = this._rightValue[index];
                    arr.push(converter.getBaseFromTextChar(c));
                }
            }
            this._rightPart = arr;
        }

    }

    _getValue() {
        return this._value;
    }

    _getInt() {
        return this._leftValue;
    }

    _getFlags() {
        return this._flags;
    }

    _getFaceValueAt(position) {
        if(position>=0){
            // look in left part
            return this._leftPart[this._leftLength-position-1];
        }else{
            // look in right part
            position = -position-1;
            return this._rightPart[position];
        }
    }

    _setFaceValueAt(position, value){
        if(typeof value == typeof '' && value.length == 1){
            value = converter.getBaseFromTextChar(value);
        }else if (typeof value == typeof 0){
            value = converter.getBaseFromValue(value);
        }
        if(position>=0){
            // look in left part
            if(position<this._leftLength){
                this._leftPart[this._leftLength-position-1] = value;
            }
        }else{
            // look in right part
            position = -position-1;
            if(this._flags._float==eFlags.SET && position<this._rightLength){
                this._rightPart[position] = value;
            }
        }
        this._refresh();
    }

    _refresh(){
        // convert array leftpart to string leftvalue
        let b = '';
        for (let index = 0; index < this._leftPart.length; index++) {
            const num = this._leftPart[index];
            b = b + num.text;
        }
        this._leftValue = b;

        // convert array rightpart to string rightvalue
        b = '';
        for (let index = 0; index < this._rightPart.length; index++) {
            const num = this._rightPart[index];
            b = num.text + b;
        }
        this._rightValue = b;

        // reset value
        this._value = '';
        if(this._flags._sign==eFlags.SET){
            this._value = '-'
        }
        this._value = this._value + this._leftValue;
        if(this._flags._float==eFlags.SET){
            this._value = this._value+ '.';
            this._value = this._value + this._rightValue;
        }
    }

    _trimZero(){
        let length = this._leftLength - 1;
        let index = 0;

        // check if there is leftpart
        if(length>=0){
            // yes, there is a leftpart
            // trim leftPart
            while(this._getFaceValueAt(length - index).value == 0){
                index++;
            }
            this._leftPart = this._leftPart.splice(index, this._leftLength-index);
        }

        length = this._rightLength;
        index = 0;
        // check if there is a rightpart
        if(this._flags._float == eFlags.SET && length>0){
            // yes, there is a rightpart
            // trim rightpart
            while(this._getFaceValueAt(index) == 0){
                index++;
            }
            this._rightPart = this._rightPart.splice(index, index+1);
        }

        this._refresh();
    }
}