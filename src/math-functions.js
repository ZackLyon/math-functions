/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

export function sum(a, b) {
    let aPlusB = a + b;
    return [aPlusB, `The sum of ${a} and ${b} is ${aPlusB}.`];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    let aTimesB = a * b;
    return [aTimesB, `The product of ${a} and ${b} is ${aTimesB}.`];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiplyThreeNumbers() that takes in three 
numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, 
the second element is the product of those three numbers,  
and the third and fourth elements are strings that EXACTLY follow this example and 
use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out 
how to do this. However, you may continue to use the + operator for string concatenation.
*/

export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    let aPlusBplusC = sum(sum(a, b)[0], c)[0];
    let aTimesBtimesC = multiply(multiply(a, b)[0], c)[0];
    return [aPlusBplusC, aTimesBtimesC, `${a} and ${b} and ${c} sum to ${aPlusBplusC}.`, `The product of ${a} and ${b} and ${c} is ${aTimesBtimesC}.`];

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArrayWithThreeNumbers() that takes in an array of numbers 
as its single argument and then returns an array where the first element is the sum 
of the numbers in the array, and the second element is a string that EXACTLY follows 
this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. You're going to 
have to be resourceful to figure out how to do this. However, you may continue 
to use the + operator for string concatenation.
*/

export function sumArrayWithThreeNumbers(sumArr) { 
    let arrSum = sum(sum(sumArr[0], sumArr[1])[0], sumArr[2])[0];
    return [arrSum, `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${arrSum} is their sum.`];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArrayWithThreeNumbers() that takes an array of numbers 
as its argument and returns an array whose first element is the product of those numbers, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. 
To do multiplication, use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
This function should handle an array containing three elements. However, 
you may continue to use the + operator for string concatenation.
*/

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    let arrMult = multiply(multiply(multArr[0], multArr[1])[0], multArr[2])[0];
    return [arrMult, `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${arrMult}.`];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.
*/

export function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    
    if(dynamicArray.length === 0) { return [undefined, `The numbers ${undefined} have a product of ${undefined}.`];} // edge case with empty array
    if(dynamicArray.length === 1) { return [dynamicArray[0], `The numbers ${dynamicArray[0]} have a product of ${dynamicArray[0]}.`];} // edge case with single item array
    
    let newString = `${dynamicArray[0]},${dynamicArray[1]},`; //Start the string of numbers with first two elements
    let product = multiply(dynamicArray.shift(), dynamicArray.shift())[0]; // multiply and remove the first two elements of array
    
    let arrLength = dynamicArray.length;
    
    for(let i = 0; i < arrLength; i++) {
        newString = newString + `${dynamicArray[i]},`; //append number at current index to the string
        product = multiply(product, dynamicArray[i])[0]; // multiply the product by the number at current index of dynamicArray, the function's numeric result is at index 0 of the array it returns
    }
    
    newString = newString.slice(0, -1); // remove the last comma by using negative index (new string is from index 0 to 1 less than length)
    return [product, `The numbers ${newString} have a product of ${product}.`];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
