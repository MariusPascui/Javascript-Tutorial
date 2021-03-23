/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/




//=======TEST DATA 1=======//

/* const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92;

const bmiMark = weightMark / (heightMark * heightMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);
console.log(markHigherBMI); */

//=======TEST DATA 2=======//

const heightMark = 1.88;
const weightMark = 95;
const heightJohn = 1.76;
const weightJohn = 85;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);
console.log(markHigherBMI);
