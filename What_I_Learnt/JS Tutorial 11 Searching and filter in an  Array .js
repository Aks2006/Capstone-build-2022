// Contents of the lesson:
/*
1) Traversel in an array
2) Searching and filter in Array
3) How to sort and compare an Array
4) How to Insert (Create),Replace,Update & 
5) Map(), Reduce(), Filter().
*/

// #2 Searching and filter in Array
// (i) indexOf() Method
/* Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number. */

var myFriends = ["Ravi", "Raju", "Shyam", "Singh", "Abhishek"];
console.log(myFriends.indexOf("Singh"));
// Trying a different Approach:
console.log(myFriends.indexOf("singh"));
// Because of case sensitive nature of Javascript, it will return -1.
// (ii) lastIndexOf() Method
console.log(myFriends.lastIndexOf("Abhishek"));
// The main difference between