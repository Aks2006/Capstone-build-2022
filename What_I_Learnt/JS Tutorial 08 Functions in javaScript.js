// What are functions in JavaScript?

/* Function is a block of code designed to perform a particular task.
 */
// #1 - Before we use a function, we need to define it.
// #2 - A function definition (also called as function declearation or function statement) consists of function keyword followed by: 
// (i) The name of the function.
// (ii) List of parameters to the function, enclosed in paranthesis and seperated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets {...}.
// Example:
/*function sum() {
    var a = 15,
        b = 10;
    var total = a + b;
}
*/
// Calling the functions:
// How to call a function?
// sum();

// it will not show any output. If we want to see an output of this function, we need to console this fuction.
/*function sum() {
    var a = 15,
        b = 10;
    var total = a + b;
    console.log(total);
}
*/
// this is called function definition or function declearation.
/* Defining a function does not execute it, a JavaScript function executes when "something" invokes it (call it).*/

// What is the difference btw function Parameter vs function Arguments?
//function parameters are the names listed in the function's definition.
// Whereas
// function arguments are the real values passed to the function.
// How to re use a function?
// In the above function, we have to hardcode and also have to call it in order to use it whenever we need. We have to change the values assigned to the variables in order to display sum of any two numbers of our choice.
// We can use function parameters here. It will reduce our code and we can use this function multiple timess where and when we need it.
// Here is it:
function sum(a, b) {
    var total = a + b;
    console.log(total);
}
sum(22, 55);
sum();
// Interview questions:
// #1 Why functions?
/* (i) You can reuse code: Define the code once and use it many times. You can use the same code many times with different arguments to produce results.
(ii) A function is a group of re-usable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again. */
// This leads us to an interesting methodology: DRY=> Do not Repeat Yourself.

// Function Expressions:
// It simply means create a function and put it into the variable.
// For this, we simply put the function into a variable, so no need to use paranthesis() everywhere to call the function.
var funExp = sum(5, 15);
// 'Return' Keyword:
/* When JavaScript reaches a return statement the function will stop executing.
Functions often compute a return value. The return value is "returned" back to the "caller". */

function sum(a, b) {
    return total = a + b;
}
var funcExp = sum(15, 20);
console.log("The sum of two numbers is " + funcExp);

//Now we are moving towards our last topic in JavaScript functions which is:
// Annonymous functions-
/* (i) A function without name is called as Anonymous function.
(ii) A function expression is simmilar to and has the same syntax as a function declearation one can define "named" function expression (where the name of the expression might be used in the call stack for example) or "annonymous" function expression. */
var funcExp = function(a, b) {
        return total = a + b;
    }
    // Above piece of code is called as annonymous function and the code written below is called as annonymous fu

var sum = funcExp(25, 30);
console.log("The sum of two numbers is " + sum);