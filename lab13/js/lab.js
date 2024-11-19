// index.js - purpose and description here
// Author: Liam Logsdon
// Date:11/18/24

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
/*ChatGPT used to make it consistant */
$(document).ready(function() {
  // Event listener for the button click
  $("#submit").click(function() {
    let oneLongString = ''; // String to hold all the output

    // Loop through numbers 1 to 200
    for (let i = 1; i <= 300; i++) {
      if (i % 105 === 0) {
        oneLongString += `<div class="fizzbuzz-item">FizzBuzzCrash</div>`; // FizzBuzz for multiples of 105
      }else if (i % 21 === 0) {
        oneLongString += `<div class="fizzbuzz-item">FizzCrash</div>`; // Fizz for multiples of 21
      }else if (i % 35 === 0) {
        oneLongString += `<div class="fizzbuzz-item">BuzzCrash</div>`; // Fizz for multiples of 35
      }else if (i % 15 === 0) {
        oneLongString += `<div class="fizzbuzz-item">FizzBuzz</div>`; // Fizz for multiples of 15
      }else if (i % 3 === 0) {
        oneLongString += `<div class="fizzbuzz-item">Fizz</div>`; // Fizz for multiples of 3
      } else if (i % 5 === 0) {
        oneLongString += `<div class="fizzbuzz-item">Buzz</div>`; // Buzz for multiples of 5
      } else if (i % 7 === 0) {
        oneLongString += `<div class="fizzbuzz-item">Crash</div>`; // Crash for multiples of 7
      } else {
        oneLongString += `<div class="fizzbuzz-item">${i}</div>`; // Regular number if not a multiple of the above
      }
    }

    // Append the long string with FizzBuzz results to the #output div
    $("#output").html(oneLongString);
    $(this).toggleClass("fizzbuzz-item");
  });
});