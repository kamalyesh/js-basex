
module.exports = {
    numbers: () => {
        let test = require('./numbers');
        console.log('testing numbers');
        let tests = [
            test.test01()
            ,
            test.test02()
            ,
            test.test03()
            ,
            test.test04()
            ,
            test.test05()
            ,
            test.test06()
            ,
            test.test07()
            ,
            test.test08()
        ];
        tests.map((test, index)=>{
            console.log(`test ${index}: `, JSON.stringify(test, null, 2));
        });
        return (
            tests[0].status
            &&
            tests[1].status
            &&
            tests[2].status
            &&
            tests[3].status
            &&
            tests[4].status
            &&
            tests[5].status
            &&
            tests[6].status
            &&
            tests[7].status
        )
    },
    operations: () => {
        let test = require('./ops');
        console.log('testing operations');
        let tests = [
            test.test01()
            ,
            test.test02()
            ,
            test.test03()
            ,
            test.test04()
            ,
            test.test05()
            ,
            test.test06()
            ,
            test.test07()
            ,
            test.test08()
            ,
            test.test09()
            ,
            test.test10()
            ,
            test.test11()
            ,
            test.test12()
            ,
            test.test13()
            ,
            test.test14()
            ,
            test.test15()
        ];
        tests.map((test, index)=>{
            console.log(`test ${index}: `, JSON.stringify(test, null, 2));
        });
        return (
            tests[0].status
            &&
            tests[1].status
            &&
            tests[2].status
            &&
            tests[3].status
            &&
            tests[4].status
            &&
            tests[5].status
            &&
            tests[6].status
            &&
            tests[7].status
            &&
            tests[8].status
            &&
            tests[9].status
            &&
            tests[10].status
            &&
            tests[11].status
            &&
            tests[12].status
            &&
            tests[13].status
            &&
            tests[14].status
        )
    },
}