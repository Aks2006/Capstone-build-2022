// What will we do:
/*
(1) Traversal of an array.
(2) Searching and Filter in an array.
(3) How to sort and compare an Array.
(4) Map, Reduce, filter.
*/
// Array Subsection 2: Searching an filter in an array.
// Syntax: Array.prototype.indexOf()
/*Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. tt search the element from the 0th index number.
 */
// var myFriends = ["Ram", "krishna", "Arjun", "Akash"];
// Array subsection 4: Perform CRUD (Create, Read, update, Delete)
// 
/* (i) push - The push() method adds one or more elements to the end of the array and return the new length of the array.
 */
// Example:
const animals = ["Dogs", "Goats", "Sheep"];
animals.push("Chicken");
console.log(animals);
// 
/*(ii) unshift- The unshift() methood adds one or more elements to the beggining of an Array and returns the new length of the Array. */
// Example:
/*const petAnimals = ["Dogs", "cats", "Sheep"];
petAnimals.unshift("Chicken", "cow", "Deer");
console.log(petAnimals);
*/
// Another example:
/* const myNumbers = [1, 2, 3, 5];
myNumbers.unshift(4, 6);
console.log(myNumbers);
*/
/* (iii) pop - The pop() method removes the last element from ab array and returns that element. This method changes the length of the array. */
// Example:
const plants = ["brocoli", "cauliflower", "tomato", "cabbage"];
console.log(plants);
plants.pop();
console.log(plants);

/* (iv) shift - The unshift() method removes the first element from an array and returns that removed element. This method changes the length of the array.*/
const plant = ["brocoli", "cauliflower", "tomato", "cabbage"];
console.log(plants);
plants.shift();
console.log(plants);