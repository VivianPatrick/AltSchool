console.log(Number.MAX_VALUE + 111)
let newMax = BigInt(Number.MAX_VALUE) + 111n
console.log(newMax)


console.log('AB' - 'CD')
console.log('AB' + 'CD')
console.log(12 +  '34')
console.log(12 / '34')

//statements
//If Vivian is a student, show her the result

//Syntax of conditional statement
//if (conditional) { // - condition is a boolean expression, the result of the expression is either true or false
// code to be executed if condition is true
//}

let result = 99;
let VivianStudentId = 2023354747;
let VivianType = 'student';

if (VivianType !== 'admin'){
    console.log('Your result is ' + result);
}

if (VivianType == 'admin' && VivianStudentId == 2023354747){ //true || true => true
    console.log('Your result is ' + result);
} else {
    console.log('You are not allowed to see this result');
}

if (VivianType = 'admin' ) console.log('Your result is ' + result);
else console.log('You are not allowed to see this result');

//write a code to display a 1-6 dice number

//console.log(Math.floor(Math.random() * 6) + 1)

let random = Math.floor(Math.random() * 6 ) + 1;
let display = console.log;

if (random === 1) {
    display(1)
}else if (random === 2){
    display(2)
}else if (random === 3){
    display (3)
}else if (random === 4){
    display (4)
}else if (random === 5){
    display (5)
}else{
    display (6)
}

//switch statement
//syntax
switch (random) {
    case 1: {
        display(1)
        break;
    }
case 2:
        display(2)
        break;
case 4:
        display(4)
        break;
case 4:
        display(4)
        break;
case 5:
    display(5)
    break;
default:
    display(6)
    break;
}

let age = 18;
if (age >= 18) {
    console.log('You are eligible to vote')
} else {
    console.log('You are not eloigible to vote')
}

let isAdult = age >= 18 ? true : false;

if (!isAdult) {
    console.log('You are eligible to vote')
}else {
    console.log('You are not eligible to vote')
}

//ternary operator
//syntax
//condition? true : false

age >= 18 ?  console.log('You are eligible to vote') : console.log('You are not eligible to vote');

function add(a, b) {
    if (typeof a !== 'number' && b!== 'number') {
        return 'please enter a valid number'
    }
    return a + b;
}

//LOOPS
//for loop
for (innitialization; CSSConditionRule; increment/ decrement) {
    //code to be executed
}

let person = { name: 'Vivian' , age: 99 }
//for-in loop
for (let key in person) {
    console.log(key) 
    console.log(person[key])
}

//for-of loop
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let number of numbers){
    console.log(number)
}

//while loop
//while (condition){
    //code to execute
//}

let i = 0;
while (i < 10) {
    console.log(i)
    console.log('repeated statement')
    i++;
}

//do while loop
do {
    console.log(i)
    console.log('repeated statement')
    i++;
    //code to be executed
} while (i < 10)