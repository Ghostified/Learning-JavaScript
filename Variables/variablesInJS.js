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
    studentA : "Hermione ",
    studentB : "Ghost",
    studentC : "Ron",
}

//Arays 
const arrayExample = ["Hermione", "Jame", "Potter","Malfoy"];

//Boolean  Expressions return either a true or a false
//ES6 functions => is an arrow function

const passedStudent =  () => {
    const passed = {
        studentOne : "James",
        studentTwo : "Granger",
    };

    const failedStudent = {
        studentZ : "Crabbe",
        studentX : "Goyle"
    }
    if (studentOne) {
        console.log(passed)
    } else {
        console.log(failedStudent)
    }
}


//operators 
