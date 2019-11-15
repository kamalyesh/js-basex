
module.exports = {
    numbers: () => {
        let test = require('./numbers');
        console.log('testing numbers');
        return (
            test.test01().status
            &&
            test.test02().status
            &&
            test.test03().status
            &&
            test.test04().status
            &&
            test.test05().status
            &&
            test.test06().status
            &&
            test.test07().status
            &&
            test.test08().status
        )
    },
    operations: () => {
        let test = require('./ops');
        console.log('testing operations');
        return (
            test.test01()
            &&
            test.test02()
            &&
            test.test03()
            &&
            test.test04()
            &&
            test.test05()
            &&
            test.test06()
            &&
            test.test07()
            &&
            test.test08()
            &&
            test.test09()
            &&
            test.test10()
            &&
            test.test11()
            &&
            test.test12()
            &&
            test.test13()
        )
    }
}