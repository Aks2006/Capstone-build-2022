//  arrays and objects in JavaScript

// #1 Arrays: Basic understanding
// Sometimes we need to do a collection of variables instead of variables. So that we make "Arrays" for them.
console.log("We are in Tutorial 04, let us start");

const Marks = [32, 20, 48, 25, 41];
const fruits = ['orange', 'Grapes', 'Apple'];
const mixed = ['Abhi', 23, 28];
// We can make arrays with the help of Array constructors,
const arr = new Array(22, 32, 38, 'Orange');
console.log(arr);
console.log(Marks);
console.log(mixed);
console.log(fruits[2]);
console.log(arr.length)
    // How to check an element which is in an array or not
console.log(Array.isArray(fruits));
//How to replace an element in an Arrays:
arr[0] = 'Abhishek';
console.log(arr);
// let's talk about "indexOf" method in order to chek the order of an element in a present array,
let value = Marks.indexOf(25);
console.log(value);
//How to mutate/modify an array?
//push, pop,splice and unshift operations inJAvaScript,

Marks.push(40);
console.log(Marks);
// push is being used here to push / include a number/element in the last of Marks,

Marks.unshift(43);
console.log(Marks);
// 'unshift' is being used in order to add/ include a number/ element in the front of Marks,

Marks.shift()
console.log(Marks);
//'shift'operation is being performed in order to remove an element in the starting of Marks,

Marks.pop()
console.log(Marks);
//'pop'operation is being performed in order to remove an element in the last of Marks,it works!

Marks.splice(1, 2);
console.log(Marks);
// "splice"is used to remove an element from anywhare in the array.In this method, you have to define that -

//1)from which index you  want to removethe elements in the array and

//2)How many elements you want to remove from  the selected index? 
// In this example, we are going to remove two elements from the index(1) { Index is always counted from zero } in the array named 'Marks'