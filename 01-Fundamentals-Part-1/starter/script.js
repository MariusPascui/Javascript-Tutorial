//=======VALUES & VARIABLES=======/
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);


//=======DATA TYPES=======//

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Something");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1992;
console.log(typeof year);

console.log(typeof null); 

//=======LET, CONST & VAR=======//

let age = 30;
age = 31; 

const birthYear = 1992;

var job = 'programmer';
job = 'teacher'; 

//=======BASIC OPERATORS=======//

// Math operators
const now = 2037;
const ageMarius = now - 1992;
const ageSarah = now - 2018;
console.log(ageMarius, ageSarah);

console.log(ageMarius * 2, ageMarius / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Marius';
const lastName = 'Pascui';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x + 1 = 101
x--; // x - 1 = 100
console.log(x);

//Comparison operators (<, >, <=, >=)
console.log(ageMarius > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; 

//=======OPERATOR PRECEDENCE=======//

const now = 2037;
const ageMarius = now - 1992;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avgAge = (ageMarius + ageSarah) / 2;
console.log(ageMarius, ageSarah, avgAge); 

//=======STRINGS AND TEMPLATE LITERALS=======//

const firstName = 'Marius';
const job = 'tester';
const birthYear = 1992;
const year = 2077;

const marius = 'I\'m ' + firstName + ', a ' + (year - birthYear) + 'yo ' + job + '!';
console.log(marius);

//Template literals

const mariusNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
console.log(mariusNew);

console.log(`Just a regular string...`);

console.log(`String with
multiple
lines`);*/

//=======IF/ELSE STATEMENTS=======//

const age = 15;

if(age >= 18) {
    console.log('Sarah can start her driving license 🚗');
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is ${yearLeft} years too young 😭`);
}

const birthYear = 1992;
let century;

if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);