// Loops are used to do a specific task repeatedly in any programming language as well as in JavaScript.

//wwhile loop Statement
// The while statement creates a loop that executesa specified statement as long as the test condition evaluates to true.
//var num = 10;
//while (num <= 10) {
//  console.log(num);
//}
// When this peice of code runs, it will go in the infinite loop and will continuously print '10' on the screen until stop because we did not defined that how many times we want to print it on the screen.
// So we are going to learn how to write proper while and do while loops.
/*var num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}
*/
//This loop will run until the value of num is less than and equal to 10 and for initial value '0', it will print numbers from 0 to 10 on the screen. 
// num++ will increment the initial value until the condition is true. If vvalue of num will be greater than 10, the loop will not work. So it is useful in case when we want to print something on the screen multiple times, we dont have to write console logs for everytime.
/* var num = 20;
while (num <= 10) {
    console.log(num);
    num++;
}
*/
// The curly braces used in the loop is called block scope. In this loop, we are not going to get any output.

// Let's learn do while loop:
/* var num = 20;
do {
    debugger;
    console.log(num);
    num++;
}
while (num <= 10);
*/
// Difeerences between while and do while loop:
//While loop is entry controlled loop whereas do while is exit controlled loop. In the while loop, we do not need to add a semicolon at the end of a while condition but we need to add a semicolon at the end of the while condition in the do while loop.
/* for (num = 0; num <= 10; num++) {
    debugger;
    console.log(num);
}
*/
// W.A.P to print table for given number (8,9,12,15) using for loop in JavaScript.
var num = 1;
var tableOf = 8;
for (num = 1; num <= 10; num++) {
    // console.log(tableOf + "*" + num + "=" + tableOf * num);
    console.log(`${tableOf} * ${num} = ${tableOf * num}`);
}

// for in loop and for of loops were introduced in ECMAScript 2015/ ES6.
/* var myFriends = ["Ramesh", "Suresh", "Rakesh", "Rajesh", "Kamlesh", "Mithilesh"];
for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
*/
// now solve this example with the help of for in and for of loops.
/* var myFriends = ["Ramesh", "Suresh", "Rakesh", "Rajesh", "Kamlesh", "Mithilesh"];
for (let elements in myFriends) {
    console.log(elements);
}
*/
//Whenever we use for in loop, it simply gives us the index number of all the elements which are present in our array.
// We can see the output for above code.

// Let us have a look of for of loop:
/* var myFriends = ["Ramesh", "Suresh", "Rakesh", "Rajesh", "Kamlesh", "Mithilesh"];
for (let elements of myFriends) {
    console.log(elements);
}
*/
//As we can see the output for above code, whenever we use for in loop, it simply shows each element from our array which are present.
// This is the difference between 'for in' and 'for of' loops.

//Let's see one more (important ) type of loop which is used in arrays. this is forEach loop.
var myFriends = ["Ramesh", "Suresh", "Rakesh", "Rajesh", "Kamlesh", "Mithilesh"];

/* myFriends.forEach(function(element, index, array) {
        console.log(element + ":" + index);
    })
    */
// Now we are going to use fat arrow functions:
myFriends.forEach((element, index, array) => {
    console.log(element + ":" + index);
})