// Expressions and Operators
/*
Assignment Operators
Arithmetic operators
Comparision operators 
Logical Operators
String Operators
Conditional (Ternary) operators
*/

//1) Assignment operator
/*
(i) An Assignment operator assigns a value to its left operand based on the value of its right operand.
(iiThe simple assignment operator is Equal to (=) */

var x = 5;
var y = 5;

// There are three possible ways to display both of the values at the same time:

console.log("is both the x and y are eqal or not" + x == y);
// Here we wrote this piece of code in order to concat and display together on the console, but, it did'nt worked.

console.log(`is both the x and y are eqal : ${x == y}`);

console.log(x == y);


// 2) Arithmetic operator:

/*
(i) An arithmetic operator takes numerical values - 
(Either literals or variables)
as their operands and returns a single numerical value.
*/

console.log(3 + 3);
console.log(10 - 5);
console.log(20 / 5);
console.log(5 * 6);

// The modulus operator (%) returns the division remainder.

console.log(`remainder operator ${81 % 8}`);

// 3) increment and Decrement operator

/*
(i) Operator : x++ or  ++x and  x-- or --x
(ii) If used postfix, with operatror after operand (for example, x++).
(iii) The increment operator increments and returns the value before incrementing.
*/
/* var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum); */

// Postfix increment operator means the expression is evaluated.
// First using the original value of the variable and then the variable is increases or decresasd.

var num = 15;
var newNum = num--;
console.log(num);
console.log(newNum);

//