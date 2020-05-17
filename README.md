# js-basex
baseX library using javascript  

baseX library is used for mathematical operation on:
real numbers of any length,
and real number of any base from 2 to 63.  

if base is greater than 10, then it uses capital English alphabets  
0...9, A=10, B=11, ... Z=35  

if base is greater than 36, then it uses small English alphabets  
0...9, A=10, B=11, ... Z=35, a=36, b=37, ... z=61  

### some popular number systems are  

#### binary (base 2)
0 1

#### octal (base 8)
0 1 2 3 4 5 6 7

#### decimal (base 10)
0 1 2 3 4 5 6 7 8 9

#### hexadecimal (base 16)
0 1 2 3 4 5 6 7 8 9 A B C D E F

#### all numbers values used in this library:
``
    for now it supports upto base 16
``
| Number Represented As | Decimal Value Used | Value Is Last Number Of Base | Number Represented As | Decimal Value Used | Value Is Last Number Of Base | Number Represented As | Decimal Value Used | Value Is Last Number Of Base |
|:------ |:------------- | ---- |:------:|:-------------:|:----:| ------:| -------------:| ----:|
| 0 | 0 | 1 | L | 21 | 22 | g | 42 | 43 | 
| 1 | 1 | 2 | M | 22 | 23 | h | 43 | 44 |
| 2 | 2 | 3 | N | 23 | 24 | i | 44 | 45 | 
| 3 | 3 | 4 | O | 24 | 25 | j | 45 | 46 | 
| 4 | 4 | 5 | P | 25 | 26 | k | 46 | 47 | 
| 5 | 5 | 6 | Q | 26 | 27 | l | 47 | 48 | 
| 6 | 6 | 7 | R | 27 | 28 | m | 48 | 49 | 
| 7 | 7 | 8 | S | 28 | 29 | n | 49 | 50 | 
| 8 | 8 | 9 | T | 29 | 30 | o | 50 | 51 | 
| 9 | 9 | 10 | U | 30 | 31 | p | 51 | 52 | 
| A | 10 | 11 | V | 31 | 32 | q | 52 | 53 | 
| B | 11 | 12 | W | 32 | 33 | r | 53 | 54 | 
| C | 12 | 13 | X | 33 | 34 | s | 54 | 55 | 
| D | 13 | 14 | Y | 34 | 35 | t | 55 | 56 | 
| E | 14 | 15 | Z | 35 | 36 | u | 56 | 57 | 
| F | 15 | 16 | a | 36 | 37 | v | 57 | 58 | 
| G | 16 | 17 | b | 37 | 38 | w | 58 | 59 | 
| H | 17 | 18 | c | 38 | 39 | x | 59 | 60 | 
| I | 18 | 19 | d | 39 | 40 | y | 60 | 61 | 
| J | 19 | 20 | e | 40 | 41 | z | 61 | 62 | 
| K | 20 | 21 | f | 41 | 42 |   

## Operations  
1. addition:  
```javaScript
    BXCNumber addition(BXCNumber num1, BXCNumber num2)
```  
performs signed addition of signed or unsigned addition depending on num1 and num2 and returns resulting `BXCNumber`  

2. unsignedAddition:  
```javascript
    BXCNumber unsignedAddition(BXCNumber num1, BXCNumber num2)
```
performs unsigned addition on num1 and num2 and returns resulting `BXCNumber`

3. subtraction:
```javascript
    BXCNumber (BXCNumber num1, BXCNumber num2)
```
performs signed subtraction. returns BXCNumber resulting after subtracting num2 from num1

4. unsignedSubtraction:
```javascript
    BXCNumber unsignedSubtraction(BXCNumber num1, BXCNumber num2)
```
performs signed subtraction. returns BXCNumber resulting after subtracting num2 from num1

5. prepareMultiplicationTable:  
```javascript
    BXCNumber[] prepareMultiplicationTable(BXCNumber number)
```
returns multiplication table of umber passed upto 10 numbers for its base.  
for base 10, it will be 10 numbers in the returned array  
for base 16, it will be 16 numbers in the returned array  
and so on.  

6. multiplication:
```javascript
    BXCNumber multiplication(BXCNumber num1, BXCNumber num2) 
```
returns BXCNumber resulting after multiplication of num1 and num2. There is no separate operation for signed or unsigned multiplication as of yet.  

7. division:
```javascript
    BXCNumber division(BXCNumber num1, BXCNumber num2)
```
returns BXCNumber resulting after division of num1 by num2. There is no separate operation for signed or unsigned division as of yet.  

8. remainder:
```javascript
    BXCNumber remainder(BXCNumber num1, BXCNumber num2)
```
returns remainder BXCNumber resulting after division of num1 by num2. There is no separate operation for signed or unsigned remainder.  

9. unsignedEquate:
```javascript
    Boolean unsignedEquate(BXCNumber num1, BXCNumber num2)
```
returns `true` if num1 and num2 are equal and if their signs are equal, else false.  

10. signedEquate:
```javascript
    Boolean signedEquate(BXCNumber num1, BXCNumber num2)
```
returns `true` if num1 and num2 are equal without checking for their signs, else false.  

11. equate:
```javascript
    Boolean equate(BXCNumber num1, BXCNumber num2, Boolean signed)
```
returns `true` if num1 and num2 are equal. whether sign is to be checkd or not is specified  in third parameter.  

12. unsignedMax:
```javascript
    BXCNumber unsignedMax(BXCNumber num1, BXCNumber num2)
```
returns greater of num1 and num2. does not consider signs of these numbers  

13. signedMax:
```javascript
    BXCNumber signedMax(BXCNumber num1, BXCNumber num2)
```
returns greater of num1 and num2. considers signs of these numbers  

14. max:
```javascript
    BXCNumber max(BXCNumber num1, BXCNumber num2, Boolean signed) 
```
returns greater of num1 and num2. whether signed or not is specified in third parameter  

15. unsignedMin:
```javascript 
    BXCNumber unsignedMin(BXCNumber num1, BXCNumber num2) 
```
returns smaller of num1 and num2. does not consider signs of these numbers  

16. signedMin:
```javascript 
    BXCNumber signedMin(BXCNumber num1, BXCNumber num2) 
```
returns smaller of num1 and num2. considers signs of these numbers  

17. min: 
```javascript
    BXCNumber min(BXCNumber num1, BXCNumber num2, Boolean signed)
```
returns smaller of num1 and num2. whether signed or not is specified in third parameter  

18. sum:
```javascript 
    BXCNumber sum(BXCNumber[] numbers)
```
returns summation of all numbers in the array . signed operation.

19. multiply:
```javascript
    BXCNumber multiply(BXCNumber[] numbers) 
```
returns multiplication of all numbers in the array . signed operation.

20. unsignedMaximum:
```javascript 
    number unsignedMaximum(BXCNumber[] numbers)
```
returns index of maximum of all numbers of the array without checking for sign  

21. signedMaximum:
```javascript
    number signedMaximum(BXCNumber[] numbers)
```
returns index of signed maximum of all numbers of the array  

22. maximum: 
```javascript
    number maximum(BXCnumber[] numbers, Boolean signed)
```
returns index of maximum of all numbers of the array, signed(`true`) or not(`false`) is specified in third parameter  

23. unsignedMinimum:
```javascript 
    number unsignedMinimum(BXCNumber[] numbers) 
```
returns index of minimum of all numbers of the array without checking for sign  

24. signedMinimum:
```javascript 
    number signedMinimum(BXCNumber[] numbers)
```
returns index of signed minimum of all numbers of the array  

25. minimum: 
```javascript
    number minimum(BXCNumber[] numbers, Boolean signed) 
```
returns index of minimum of all numbers of the array, signed(`true`) or not(`false`) is specified in third parameter  

26. unsignedAreEqual:
```javascript 
    Boolean unsignedAreEqual(BXCNumber[] numbers)
```
returns `true` if all numbers in array are equal in value, but not in sign; else returns false  

27. signedAreEqual:
```javascript 
    Boolean signedAreEqual(BXCNumber[] numbers)
```
returns `true` if all numbers in array are equal in value, with their sign; else returns false  

28. areEqual:
```javascript
    Boolean areEqual(BXCNumber[] numbers, Boolean signed) 
```
returns `true` if all numbers in array are equal in value; else returns false. Whether to check for sign or not is specified in second parameter  

29. shift: 
```javascript
    BXCNumber shift(BXCNumber number, Number shiftCount)
```
returns a number after shifting it to left or right place values, depending on `shiftCount`.  
positive shiftcount will return leftShift.  
negative shiftcount will return rightShift.  
`shift(10, 0)` wlll return `10`.  

30. leftShift: 
```javascript
    BXCnumber leftShift(BXCNumber number, Number shiftCount)
```
returns a number that is shifted to left, `shiftCount` times.
or simply multiplication of `number` with `10` of its base `shiftCount` times.
`shift(10, 2)`  will return BXCNumber with value `1000`.
`shift(10.1, 2)`  will return BXCNumber with value `1010`.  

31. rightShift:
```javascript 
BXCnumber rightShift(BXCnumber number, Number shiftCount) 
```
returns a number that is shifted to right, `shiftCount` times.
or simply division of `number` by `10` of its base `shiftCount` times.


## TODO:
check for base before performing operations. base 2 number cannot be added to base 3 number