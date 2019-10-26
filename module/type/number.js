const { eFlags } = require('./flags');
const { eBase } = require('./base');

module.exports = class BXCNumber {

    // _value;
    // _base;

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
        splits[0] ? this._leftValue = splits[0] : this._leftValue = 0;
        splits[1] ? this._rightValue = splits[1] : this._rightValue = 0;
        // set lengths
        this._length = this._value._length;
        this._leftLength = this._leftValue.length;
        this._rightLength = this._rightValue.length;
        // set sign flags
        let flags = {};
        if (this._value.startsWith('-')) flags._sign = eFlags.SET;
        else flags._sign = eFlags.RESET;
        // set zero flag
        if (this._value == 0 || (this._leftValue==0 && this._rightValue==0)) flags._zero = eFlags.SET;
        else flags._zero = eFlags.RESET;
        this._flags = flags;
    }

    _getValue() {
        return this._value;
    }

    _getFlags() {
        return this._flags;
    }
}