//=======VALUES & VARIABLES=======/

/* let country = 'Romania';
let continent = 'Europe';
let population = '20 million';

console.log(country, continent, population);

//=======DATA TYPES=======/

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); */

//=======LET, CONST & VAR=======/

const country = 'Romania';
const continent = 'Europe';
const language = 'Romanian';
const isIsland = false; 

//=======BASIC OPERATORS=======//

let romaniaPop = 20000000;
let halfOfPopulation = romaniaPop / 2;
let finlandPop = 6000000;
let avgPop = 33000000;

console.log(halfOfPopulation);
//romaniaPop++;

console.log(romaniaPop);
console.log(romaniaPop > finlandPop);
console.log(romaniaPop < avgPop); 

//=======STRINGS AND TEMPLATE LITERALS=======//

let description = `${country} is a country in ${continent}, and its ${romaniaPop} people speak ${language}`;
console.log(description);

if(romaniaPop > avgPop) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${avgPop - romaniaPop} below average.`);
}