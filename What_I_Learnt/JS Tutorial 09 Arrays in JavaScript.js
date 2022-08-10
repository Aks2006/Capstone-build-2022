// Arrays in javaScript
// When we use var, we can store only one value at a time.
var friend1 = 'Ram';
var friend2 = 'Krishna';
var friend3 = 'Arjun';


// When we feel like storing multiple values in one variable then instead of var, we will use an Array.
// In JavaScript, we have an array class and arrays are the prototype of this class.

// Example
/* var myFriends = ["Ram", "krishna", "Arjun"];
console.log(myFriends);
// to see a particular element of an array, go thruogh this code line:
console.log(myFriends[2]); */
// To chek the lenghth of the array(To find out how many elements are present in the array) on the console, check this out:
// console.log(myFriends.length);
// It is a property of array in javascript.

// We use for loop to navigate.

/*var myFriends = ["Ram", "krishna", "Arjun", "Akash"];
for (i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
} */
// After ECMAScript 2015, We have for... in and for...of loop too.
/*var myFriends = ["Ram", "krishna", "Arjun", "Akash"];
for (let elements in myFriends) {
    console.log(elements);
}
*/
// Example of for...in loop.
// This peice of code returns the index number of an array on the console.
/*var myFriends = ["Ram", "krishna", "Arjun", "Akash"];
for (let elements of myFriends) {
    console.log(elements);
} */
// Example of for...of loop.
// This peice of code returns the elements of an array on the console which are present in the array.

/*var myFriends = ["Ram", "krishna", "Arjun", "Akash"];
myFriends.forEach(function(element, index) {
        console.log(element + " index: " + index);
    })
    */
// forEach loop:
// It is a callback function for each elenent in the array. It can display element, index of each element in the array and also the array we are working with. Just type the name of the array.
// Syntax : Array.forEac(function(element, index, array){})

// We can also do this by Fat- arrow function. We don't need to write function keyword here, we are using here an arrow(=>) instead of.

var myFriends = ["Ram", "krishna", "Arjun", "Akash"];
myFriends.forEach((element, index) => {
    console.log(element + " index: " + index);
});