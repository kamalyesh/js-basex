let tests = require('./index')

function runAllTests() {
    console.log("Testing numbers...")
    let numbersTest = tests.numbers()
    console.log("Numbers test success")
    if (numbersTest) {
        console.log("Numbers OK")
    } else {
        console.log("Something went wrong in: Numbers")
        console.log("check above logs")
        return;
    }

    console.log("Testing operations...")
    let operationsTest = tests.operations()
    console.log("Operations test success")
    if (operationsTest) {
        console.log("Operations OK")
    } else {
        console.log("Something went wrong in: Operations")
        console.log("check above logs")
        return;
    }


    if(numbersTest && operationsTest) {
        console.log("All OK")
    }
}


runAllTests()