<<<<<<< HEAD
=======
<<<<<<<<< Temporary merge branch 1
<<<<<<< HEAD
=========
//////HEAD
>>>>>>>>> Temporary merge branch 2
$.ajax({
    url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
<<<<<<<<< Temporary merge branch 1
=======
=========

>>>>>>>>> Temporary merge branch 2
>>>>>>> 2576c2ac0baaaa658b091a87a7c003e5da05332f
function searchPlaces() {

    // setting variables for link to google
    var googlePlaces = $('#userInput').val();
    var location = "locationbias=point:33.6450053,-117.83510860000001";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" 
    + googlePlaces + 
    "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&"
    + location + 
    "&key=AIzaSyBGe3kt3IzV8XbIQWDNC3AnkDTA1yWcdlQ";

    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);


        
    });
    console.log(queryURL)
}
$('#searchBTN').click(searchPlaces);


// function displayResults() {

// }

