let test = require('./tests');


testNums = () => {
    // TODO: see if JOI can be used for validations here too
    if (test.numbers()) {
        console.log('test of numbers is successful');
        return 'test of numbers is successful';
    } else {
        console.log('test of numbers has failed');
        return 'test of numbers has failed';
    };
}

testOps = () => {

    if (test.operations()) {
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

todo();
testNums();
testOps();