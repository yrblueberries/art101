// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function isEven(x) {
  return (x % 2 == 0);
}

console.log("is 1 even?",isEven(1));
console.log("is 2 even?",isEven(2));

array = [120,43,21,46,20,1635,]
console.log("my Array", array);

var result = array.map(isEven);
console.log("[percentage of evenness", result);

var result2 = array.map(function(x){
return x ** 0.5;
 
})
console.log("square root of an array", result2);


document.writeln("[",array,"]", "</br>");
document.writeln("[",result,"]", "</br>");
document.writeln("[",result2,"]", "</br>");
