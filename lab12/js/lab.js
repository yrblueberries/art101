// index.js - purpose and description here
// Author: Liam Logsdon
// Date: 11/14/24

// Constants

// Functions

function sortingHat(str){
len = str.length;
mod = len % 4;
if (mod == 0){
   return "Gryffindor"
}
else if (mod == 1){
  return "Ravenclaw"
}
else if (mod == 2){
  return "Slytherin"
}
else if (mod == 3){
  return "Hufflepuff"
}
}

$("#button").click(function(){
  var name = $("#input").val()
  var house = sortingHat(name);
  $("#output").html("<h1>" + house + "</h1>")
})

