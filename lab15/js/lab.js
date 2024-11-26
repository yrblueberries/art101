
// index.js - purpose and description here
// Author: Liam Logsdon
// Date: 11/25/24
const apiUrl = 'https://api.api-ninjas.com/v1/facts';
        const apiKey = 'jaZbe6iqgpP7hmJ3Ric3sw==iiKIBrLM73j4QUwQ';

        // Function to fetch a fact from the API
        function fetchFact() {
            $.ajax({
                method: 'GET',
                url: apiUrl,
                headers: { 'X-Api-Key': apiKey },
                contentType: 'application/json',
                success: function(result) {
                    console.log(result); // Log the result to the console (optional)
                    displayFact(result);
                },
                error: function(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                    document.getElementById("fact-text").textContent = "Sorry, something went wrong. Please try again.";
                }
            });
        }
        function displayFact(result) {
          if (result && result.length > 0) {
              const factText = result[0].fact; // Assuming the response contains an array of facts
              document.getElementById("fact-text").textContent = factText;
          } else {
              document.getElementById("fact-text").textContent = "No fact available.";
          }
      }

      // Set up the button to trigger the fetchFact function on click
      document.getElementById('fetch-fact-btn').addEventListener('click', fetchFact);
 