let number = require('../../type/');
const {eBase} = require('../../type/base');

module.exports = {
    unsignedMax:(numbers)=>{
        // returns maximum number's index from the array
        // does not considers sign of numbers
        let maxIndex = 0;
        let tempMax = 0;
        let maxValue;
        if(numbers.length>1){
            tempMax = maxIndex;
            maxValue = numbers[maxIndex];

            for (let index = 1; index < numbers.length; index++) {
                const number = numbers[index];

                // check 1 
                // compare left lengths
                if(maxValue._leftLength < number._leftLength){
                    maxIndex = index;
                    continue;
                }
                // check 2
                // left lengths are equal
                else if(maxValue._leftLength == number._leftLength){
                    // check 2.3
                    // compare digits from left most to right most place
                    let maxFound = false;
                    let length = maxValue._leftLength;
                    for (let index2 = length-1; index2 >=0; index2--) {
                        const e1 = maxValue._getFaceValueAt(index2)?maxValue._getFaceValueAt(index2):eBase.ZERO;
                        const e2 = number._getFaceValueAt(index2)?number._getFaceValueAt(index2):eBase.ZERO;
                        if(e1.value>e2.value){
                            maxFound = true;
                            break;
                        }else if(e1.value < e2.value){
                            maxFound = true;
                            maxIndex = index;
                            break;
                        }
                    }
                    if(maxFound==true){
                        continue;
                    }
                    if(maxIndex==tempMax){
                        // check 2.3.1
                        // now we have to check right parts
                        
                        // check 2.3.1.1
                        // compare right parts from left most to right most place
                        let length = maxValue._rightLength>number._rightLength?number._rightLength:maxValue._rightLength;
                        for (let index2 = 0; index2 <length; index2++) {
                            const e1 = maxValue._getFaceValueAt(-index2-1)?maxValue._getFaceValueAt(-index2-1):eBase.ZERO;
                            const e2 = number._getFaceValueAt(-index2-1)?number._getFaceValueAt(-index2-1):eBase.ZERO;
                            if(e1.value<e2.value){
                                maxIndex = index;
                                break;
                            }else if (e1.value>e2.value){
                                break;
                            }
                        }
                    }
                }
                // check 3
                else {
                    // else nothing,
                    // we already have out maxIndex. 
                }
            }
        }
        return maxIndex;
    },
    signedMax:(numbers)=>{
        // returns maximum number's index from the array
        // considers signs in comparison
        let maxIndex = 0;
        let tempMax = 0;
        let maxValue;
        const OP_LESS_THAN = 1;
        const OP_GREATER_THAN = 1;
        let operation;
        if(numbers.length>1){
            tempMax = maxIndex;
            maxValue = numbers[maxIndex];

            for (let index = 1; index < numbers.length; index++) {
                const number = numbers[index];

                // check 0
                // compare signs
                if(maxValue._flags._sign == number._flags._sign){
                    // if similar sign && sign is RESET (+ve), smaller value is maximum
                    operation = OP_LESS_THAN
                    // if similar sign && sign is SET (-ve), greater value is maximum
                    operation = OP_GREATER_THAN
                }
                if(operation==OP_LESS_THAN){

                    // check 1 
                    // compare left lengths
                    if(maxValue._leftLength > number._leftLength){
                        maxIndex = index;
                        continue;
                    }
                    // check 2
                    // left lengths are equal
                    else if(maxValue._leftLength == number._leftLength){
                        // check 2.3
                        // compare digits from left most to right most place
                        let maxFound = false;
                        let length = maxValue._leftLength;
                        for (let index2 = length-1; index2 >=0; index2--) {
                            const e1 = maxValue._getFaceValueAt(index2)?maxValue._getFaceValueAt(index2):eBase.ZERO;
                            const e2 = number._getFaceValueAt(index2)?number._getFaceValueAt(index2):eBase.ZERO;                            
                            if(e1.value<e2.value){
                                maxFound = true;
                                break;
                            }else if(e1.value > e2.value){
                                maxFound = true;
                                maxIndex = index;
                                break;
                            }
                        }
                        if(maxFound==true){
                            continue;
                        }
                        if(maxIndex==tempMax){
                            // check 2.3.1
                            // now we have to check right parts
                            
                            // check 2.3.1.1
                            // compare right parts from left most to right most place
                            let length = maxValue._rightLength>number._rightLength?number._rightLength:maxValue._rightLength;
                            for (let index2 = 0; index2 <length; index2++) {
                                const e1 = maxValue._getFaceValueAt(-index2-1)?maxValue._getFaceValueAt(-index2-1):eBase.ZERO;
                                const e2 = number._getFaceValueAt(-index2-1)?number._getFaceValueAt(-index2-1):eBase.ZERO;
                                if(e1.value<e2.value){
                                    maxIndex = index;
                                    break;
                                }else if (e1.value>e2.value){
                                    break;
                                }
                            }
                        }
                    }
                    // check 3
                    else {
                        // else nothing,
                        // we already have out maxIndex. 
                    }
                }else if (operation == OP_GREATER_THAN){

                    // check 1 
                    // compare left lengths
                    if(maxValue._leftLength > number._leftLength){
                        maxIndex = index;
                        continue;
                    }
                    // check 2
                    // left lengths are equal
                    else if(maxValue._leftLength == number._leftLength){
                        // check 2.3
                        // compare digits from left most to right most place
                        let maxFound = false;
                        let length = maxValue._leftLength;
                        for (let index2 = length-1; index2 >=0; index2--) {
                            const e1 = maxValue._getFaceValueAt(index2)?maxValue._getFaceValueAt(index2):eBase.ZERO;
                            const e2 = number._getFaceValueAt(index2)?number._getFaceValueAt(index2):eBase.ZERO;
                            
                            if(e1.value<e2.value){
                                maxFound = true;
                                break;
                            }else if(e1.value > e2.value){
                                maxFound = true;
                                maxIndex = index;
                                break;
                            }
                        }
                        if(maxFound==true){
                            continue;
                        }
                        if(maxIndex==tempMax){
                            // check 2.3.1
                            // now we have to check right parts
                            
                            // check 2.3.1.1
                            // compare right parts from left most to right most place
                            let length = maxValue._rightLength>number._rightLength?number._rightLength:maxValue._rightLength;
                            for (let index2 = 0; index2 <length; index2++) {
                                const e1 = maxValue._getFaceValueAt(-index2-1)?maxValue._getFaceValueAt(-index2-1):eBase.ZERO;
                                const e2 = number._getFaceValueAt(-index2-1)?number._getFaceValueAt(-index2-1):eBase.ZERO;
                                if(e1.value>e2.value){
                                    maxIndex = index;
                                    break;
                                }else if (e1.value>e2.value){
                                    break;
                                }
                            }
                        }
                    }
                    // check 3
                    else {
                        // else nothing,
                        // we already have out maxIndex. 
                    }
                }
            }
        }
        return maxIndex;
    }
}