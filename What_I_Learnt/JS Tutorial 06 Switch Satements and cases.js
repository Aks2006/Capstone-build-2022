// This is an important and advance part of if else statement in JavaScript which is called "nested if- else".
// Here we are going to make an area calculator for all shapes like Square, rectangle, triangle and circle.
// Q: W.A.P tocalculate the area of circle,square,rectangle and triangle.
var area = "square";
var PI = 3.142,
    l = 6,
    b = 4,
    s = 4,
    r = 3;
/*if (area == "circle") {
    console.log("the area of circle is : " + PI * r ** 2);
} else if (area == "square") {
    console.log("the area of square is :" + s ** 2);
} else if (area == "rectangle") {
    console.log("the area of rectangle is :" + (l * b));
} else if (area == "triangle") {
    console.log("the area of triangle is :" + (l * b) / 2);
    else{
       console.log("Please enter valid Data"); 
    }
}
*/
/* switch statements evaluates an expression, matching the expression's value to a case clause and executes statements associated with the case.
//Now we are going to learn switch cases and statements. */

switch (area) {
    case 'circle':
        console.log("the area of circle is : " + PI * r ** 2);
        break;
    case 'square':
        console.log("the area of square is :" + s ** 2);
        break;
    case 'rectangle':
        console.log("the area of rectangle is :" + (l * b));
        break;
    case 'triangle':
        console.log("the area of triangle is :" + (l * b) / 2);
        break;
    default:
        console.log("please enter valid data");
}
// break statement
/*It terminates the current Loop, switch or label statement and transfers program control to the statement following the terminated statement. */
// oopar diye gaye example (code) mein break statement ka use kiya gaya hai taaki hume keval circle, suqare, rectangle ya triangle inme se kisi ek ka hi area display ho.