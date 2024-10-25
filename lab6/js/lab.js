// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

myTransport = ["SL1 Saturn","Electric unicycle","bus","rides from friends" ]

myMainRide = {
  make: "Saturn",
  model: "SL1",
  color: "Blue",
  year: 1999,
  age: function(){
      return 2024- this.year;
      
  },
  }
// Functions
document.writeln("Kinds of transport I use: ", myTransport, "</br>")

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>" );