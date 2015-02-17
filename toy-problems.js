/* Make sure you do these last */

/*
Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
plusOneSum([1, 2, 3, 4]); // 14
*/
var addOneToEachThenSum = function(array){
  var addedOne = array.map(function(el){
    return el + 1;
  });
  return addedOne.reduce(function(previous, current){
    return previous + current
  });
};

/*

Write a function that accepts a multi dimensional array and returns a flattened version.
flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
var flatten = function(arr) {
  var flattened = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      flattened = flattened.concat( flatten( arr[i] ) );
    } else {
      flattened.push( arr[i] );
    }
  }
  return flattened;
};


/*
Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]
*/
var zipperize = function (array) {
  //make 3 sub-arrays, from the example, the array 
  //will always only contain a, b, and c
  var subArrayLength = array.length / 3;
  var zipperized = [];
  for (var i = 0; i < subArrayLength; i++) {
    zipperized.push(array[i]);
    zipperized.push(array[i + subArrayLength]);
    zipperized.push(array[i + subArrayLength + subArrayLength]);
  }
  return zipperized;
};


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/





/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
