// The if statement executes a statement if a specified condition is truthy. 
// if the condition is Falsy, another statement can be executed.
/*console.log("let's learn if else statement");
var tomr = 'rain';
if (tomr == 'rain') {
    console.log("Take a raincoat");
} else {
    console.log("no need to take a raincoat");
}
*/
// Practice
// W.A.P. to know that works out whether if a given year is a leap year or not?
/* var year = 1990;
if (year % 4 === 0) {
    console.log("The year" + year + "is a Leap year");

} else if (year % 400 === 0) {
    console.log("The year" + year + "is not a Leap year");
} else {
    console.log("The year" + year + "is not a Leap year");
}*/
// var age = 17;
// if (age < 18) {
// console.log(`${age} is under age, you cannot vote`);
// } else {
// console.log("you are elligible to vote");}
// We can do this with the help of ternary operators.
// Syntax: variablename = (condition)? value1:value2
// we can call this a shorter version of if else statement.
var ageIs = 16;
console.log((ageIs >= 18) ? "you are elligible to vote" : "under age, you cannot vote");
// We can see another example,
var yearIs = 2000;
console.log((yearIs % 4 == 0) ? `${yearIs} is a leap year` : `${yearIs} is not a leap year`);