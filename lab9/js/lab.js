// index.js - purpose and description here
// Author: Liam Logsdon
// Date:11/4/24

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
$("#challenge").append("<button id='button-challenge'>secrets</button>").click(function() {
  // I can use "this" to refer to the button that got clicked
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
  $(this).parent().toggleClass("minor-sectionc");
});

$(".minor-section").append("<button id='warp'>boring button</button>").click(function() {
  // I can use "this" to refer to the button that got clicked
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).toggleClass("basic");
  $(this).toggleClass("minor-section");
});
