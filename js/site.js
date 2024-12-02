// index.js - purpose and description here
// Author: Liam Logsdon
// Date: 

// Constants
//Nasa api website: https://api.nasa.gov/planetary/apod?api_key=oeTRQxXTb08BVK8M38Yu7WD9RtEtdT236INbW8FP
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
let endpoint = "https://api.nasa.gov/planetary/apod";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  method: "GET", // HTTP method
  dataType: "json", // Payload type
  data:{ 
    api_key: "oeTRQxXTb08BVK8M38Yu7WD9RtEtdT236INbW8FP", // API token
     // Additional data
  },
  success: function(data) { // Success handler
    console.log(data);
      $("#output").append("<image src=" + data.url + ">"); 
      $("#output").append("<p>" + data.explanation);  
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 
  } 
};

//$("#output").append("<h1>Hey");

// Send the AJAX request
$.ajax(ajaxConfig);


//random pic of day
// // Define the API endpoint
// let endpoint = "https://api.nasa.gov/planetary/apod";

// // Configure the AJAX request
// let ajaxConfig = {
// url: endpoint, // API URL
// method: "GET", // HTTP method
// dataType: "json", // Payload type
// data:{ 
// api_key: "oeTRQxXTb08BVK8M38Yu7WD9RtEtdT236INbW8FP", // API token
// count:1,
// // Additional data
// },
// success: function(data) { // Success handler
// console.log(data);
// record = data[0];
// $("#output").append("<image src=" + record.url + ">"); 
// $("#output").append("<p>" + record.explanation);  
// }, 
// error: function(xhr, status, error) { // Error handler
// console.error(error); 
// } 
// };

// //$("#output").append("<h1>Hey");

// // Send the AJAX request
// $.ajax(ajaxConfig);



