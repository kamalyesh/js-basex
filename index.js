const tests = require('./tests');
const { eFlags } = require('./module/type/flags');
const { eBase, converter } = require('./module/type/base');
const { getNumber, getZeros, getPI, getNumberWithoutDotOrDash } = require('./module/type/');
const ops = require('./module/operations');

testNums = () => {
    // TODO: see if JOI can be used for validations here too
    if (tests.numbers()) {
        console.log('test of numbers is successful');
        return 'test of numbers is successful';
    } else {
        console.log('test of numbers has failed');
        return 'test of numbers has failed';
    };
}

testOps = () => {

    if (tests.operations()) {
        console.log('test of operations is successful');
        return 'test of operations is successful';
    } else {
        console.log('test of operations has failed');
        return 'test of operations has failed';
    }
}

todo = () => {
    console.log('                    js-basex');
    console.log('                 VERSION 1.0.1');
    console.log();
}


module.exports = {
    todo: todo(),
    testNums: testNums(),
    testOps: testOps(),
    tests,
    eFlags,
    eBase, converter,
    getNumber, getZeros, getPI, getNumberWithoutDotOrDash,
    ops
}