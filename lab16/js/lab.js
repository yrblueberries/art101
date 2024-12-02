// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// Define the API endpoint
let endpoint = "https://xkcd.com/info.0.json";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  method: "GET", // HTTP method
  dataType: "json", // Payload type
  success: function(data) { // Success handler
    console.log(data);
    // Since data is a single object, not an array, access its properties directly
    let comic = data; 
    // Append image and alt text
    $("#output").append("<img src='" + comic.img + "' alt='" + comic.alt + "'>");
    $("#output").append("<p>" + comic.alt + "</p>");  
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 
  } 
};

// Send the AJAX request
$.ajax(ajaxConfig);