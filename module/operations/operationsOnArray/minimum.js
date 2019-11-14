let number = require('../../type/');
const {eBase} = require('../../type/base');

module.exports = {
    unsignedMin:(numbers)=>{
        // returns minimum number's index from the array
        // does not considers sign of numbers
        let minIndex = 0;
        let tempMin = 0;
        let minValue;
        if(numbers.length>1){
            tempMin = minIndex;
            minValue = numbers[minIndex];

            for (let index = 1; index < numbers.length; index++) {
                const number = numbers[index];

                // check 1 
                // compare left lengths
                if(minValue._leftLength > number._leftLength){
                    minIndex = index;
                    continue;
                }
                // check 2
                // left lengths are equal
                else if(minValue._leftLength == number._leftLength){
                    // check 2.3
                    // compare digits from left most to right most place
                    let minFound = false;
                    let length = minValue._leftLength;
                    for (let index2 = length-1; index2 >=0; index2--) {
                        const e1 = minValue._getFaceValueAt(index2)?minValue._getFaceValueAt(index2):eBase.ZERO;
                        const e2 = number._getFaceValueAt(index2)?number._getFaceValueAt(index2):eBase.ZERO;
                        if(e1.value<e2.value){
                            minFound = true;
                            break;
                        }else if(e1.value > e2.value){
                            minFound = true;
                            minIndex = index;
                            break;
                        }
                    }
                    if(minFound==true){
                        continue;
                    }
                    if(minIndex==tempMin){
                        // check 2.3.1
                        // now we have to check right parts
                        
                        // check 2.3.1.1
                        // compare right parts from left most to right most place
                        let length = minValue._rightLength>number._rightLength?number._rightLength:minValue._rightLength;
                        for (let index2 = 0; index2 <length; index2++) {
                            const e1 = minValue._getFaceValueAt(-index2-1)?minValue._getFaceValueAt(-index2-1):eBase.ZERO;
                            const e2 = number._getFaceValueAt(-index2-1)?number._getFaceValueAt(-index2-1):eBase.ZERO;
                            if(e1.value>e2.value){
                                minIndex = index;
                                break;
                            }else if (e1.value<e2.value){
                                break;
                            }
                        }
                    }
                }
                // check 3
                else {
                    // else nothing,
                    // we already have out minIndex. 
                }
            }
        }
        return minIndex;
    },
    signedMin:(numbers)=>{
        // returns minimum number's index from the array
        // considers signs in comparison
        let minIndex = 0;
        let tempMin = 0;
        let minValue;
        const OP_LESS_THAN = 1;
        const OP_GREATER_THAN = 1;
        let operation;
        if(numbers.length>1){
            tempMin = minIndex;
            minValue = numbers[minIndex];

            for (let index = 1; index < numbers.length; index++) {
                const number = numbers[index];

                // check 0
                // compare signs
                if(minValue._flags._sign == number._flags._sign){
                    // if similar sign && sign is RESET (+ve), smaller value is minimum
                    operation = OP_LESS_THAN
                    // if similar sign && sign is SET (-ve), greater value is minimum
                    operation = OP_GREATER_THAN
                }
                if(operation==OP_LESS_THAN){

                    // check 1 
                    // compare left lengths
                    if(minValue._leftLength > number._leftLength){
                        minIndex = index;
                        continue;
                    }
                    // check 2
                    // left lengths are equal
                    else if(minValue._leftLength == number._leftLength){
                        // check 2.3
                        // compare digits from left most to right most place
                        let minFound = false;
                        let length = minValue._leftLength;
                        for (let index2 = length-1; index2 >=0; index2--) {
                            const e1 = minValue._getFaceValueAt(index2)?minValue._getFaceValueAt(index2):eBase.ZERO;
                            const e2 = number._getFaceValueAt(index2)?number._getFaceValueAt(index2):eBase.ZERO;                            
                            if(e1.value<e2.value){
                                minFound = true;
                                break;
                            }else if(e1.value > e2.value){
                                minFound = true;
                                minIndex = index;
                                break;
                            }
                        }
                        if(minFound==true){
                            continue;
                        }
                        if(minIndex==tempMin){
                            // check 2.3.1
                            // now we have to check right parts
                            
                            // check 2.3.1.1
                            // compare right parts from left most to right most place
                            let length = minValue._rightLength>number._rightLength?number._rightLength:minValue._rightLength;
                            for (let index2 = 0; index2 <length; index2++) {
                                const e1 = minValue._getFaceValueAt(-index2-1)?minValue._getFaceValueAt(-index2-1):eBase.ZERO;
                                const e2 = number._getFaceValueAt(-index2-1)?number._getFaceValueAt(-index2-1):eBase.ZERO;
                                if(e1.value>e2.value){
                                    minIndex = index;
                                    break;
                                }else if (e1.value<e2.value){
                                    break;
                                }
                            }
                        }
                    }
                    // check 3
                    else {
                        // else nothing,
                        // we already have out minIndex. 
                    }
                }else if (operation == OP_GREATER_THAN){

                    // check 1 
                    // compare left lengths
                    if(minValue._leftLength < number._leftLength){
                        minIndex = index;
                        continue;
                    }
                    // check 2
                    // left lengths are equal
                    else if(minValue._leftLength == number._leftLength){
                        // check 2.3
                        // compare digits from left most to right most place
                        let minFound = false;
                        let length = minValue._leftLength;
                        for (let index2 = length-1; index2 >=0; index2--) {
                            const e1 = minValue._getFaceValueAt(index2)?minValue._getFaceValueAt(index2):eBase.ZERO;
                            const e2 = number._getFaceValueAt(index2)?number._getFaceValueAt(index2):eBase.ZERO;
                            
                            if(e1.value>e2.value){
                                minFound = true;
                                break;
                            }else if(e1.value < e2.value){
                                minFound = true;
                                minIndex = index;
                                break;
                            }
                        }
                        if(minFound==true){
                            continue;
                        }
                        if(minIndex==tempMin){
                            // check 2.3.1
                            // now we have to check right parts
                            
                            // check 2.3.1.1
                            // compare right parts from left most to right most place
                            let length = minValue._rightLength>number._rightLength?number._rightLength:minValue._rightLength;
                            for (let index2 = 0; index2 <length; index2++) {
                                const e1 = minValue._getFaceValueAt(-index2-1)?minValue._getFaceValueAt(-index2-1):eBase.ZERO;
                                const e2 = number._getFaceValueAt(-index2-1)?number._getFaceValueAt(-index2-1):eBase.ZERO;
                                if(e1.value<e2.value){
                                    minIndex = index;
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
                        // we already have out minIndex. 
                    }
                }
            }
        }
        return minIndex;
    }
}