/*Keywords
let - can be changed , the variable can be changed later on
const -is constant
*/

let a = 10;
const b = 20;
let c = b + a;

console.log(c)

const numberOne = 1;

//String 
let studentOne = 'Branson';

//Objects
let allStudents = {
    studentA: "Hermione ",
    studentB: "Ghost",
    studentC: "Ron",
}

//Arays 
const arrayExample = ["Hermione", "Jame", "Potter", "Malfoy"];

//Boolean  Expressions return either a true or a false
//ES6 functions => is an arrow function

const passedStudent = () => {
    const passed = {
        studentOne: "James",
        studentTwo: "Granger",
    };

    const failedStudent = {
        studentZ: "Crabbe",
        studentX: "Goyle"
    }
    if (studentOne) {
        console.log(passed)
    } else {
        console.log(failedStudent)
    }
}

console.log(arrayExample)


/*
Data types - undefined, null, boolean , string, symbol , number, object 
*/

var a1;
var b1 = 2;
console.log(a1);
console.log(b1);

var a2 = 9;
var b2 = 10;
var c3 = "Welcome to hogwarts"

a2 = a + 1;
b2 = b2 + 5;
c3 = c3 + " string";

console.log(a2);
console.log(b2);
console.log(c3);


var sum = 10 + 10;
var subtract  = 45 -10;
var divide = 30 /3;
var multiply = 5 * 5;

console.log (sum);
console.log (subtract)
console.log (divide);
console.log(multiply)

//increment
var myvar = 87;
myvar = myvar + 1;
myvar++;
console.log(myvar);

var myInt = 89;
myInt = myInt -1;
myInt--;
console.log(myInt);

//Floats
var decimals = 5.7;

var product = 3.6 * 5.9;
console.log(product)

var division = 7.9 / 5.6;
console.log (division);

var remainder ;
remainder = 90 % 8;
console.log(remainder);

a1 = 3;
a2  = 17;
a3 = 12;

a1 = a + 12;
a2 =  9 + a2;
a3 = a3 + 7;

a1 += 12 + "a";
a2 += 9;
a3 += 7;

a1 -= 12;
a2  -= 9;
a3 -= 7 ;

console.log (a1, a2, a3);

var myStr2 = "Iam a \" double quoted\" string inside \"double quote" ;
console.log(myStr2);

var myStr3 = "FirstLine\n\t\SecondLine\nThirdLine";
console.log(myStr3);




