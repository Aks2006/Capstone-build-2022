// Arrays in JavaScript practice:

/* (1) Add Dec at the end of an Array?
(2) What is the return value of splice method?
(3) Update march to March(update)?
(4) Delete June from an array? */
//-
// #1
/*
const months = ['Jan', 'march', 'April', 'June', 'July'];
months.push("Dec");
console.log(months);
// #3
months[1] = "March";
console.log(months);
// #4
months.splice(3, 1);
console.log(months);
*/
// Solving all these questions by splice() method- 
//(1)
/*const months = ['Jan', 'march', 'April', 'June', 'July'];
const newMonths = months.splice(5, 0, "Dec");
console.log(months);
months.includes
*/
// just for fun:
/* function iLoveYou() {
    for (var i = 0; i <= 100; i++)
        console.log("I LOVE YOU ABHISHEK");
}
iLoveYou(); 
*/