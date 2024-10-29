// index.js - purpose and description here
// Author: Liam Logsdon
// Date:10/28/24

// Constants
var userName = window.prompt("whats your name? let me change it")
// Functions
function sortUsername() {
console.log("username =", userName);
// splut string to array
var nameArray = userName.split('');
console.log("nameArray =", nameArray);
//sort array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);
//join array back to string
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);
return nameSorted;
}



document.writeln("hey look I changed your name: ", sortUsername(), "</br>");
