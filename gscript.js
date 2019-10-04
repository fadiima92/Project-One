<<<<<<< HEAD
$.ajax({
    url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
=======
function searchPlaces() {

    // setting variables for link to google
    var googlePlaces = "pizza"
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + googlePlaces + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBGe3kt3IzV8XbIQWDNC3AnkDTA1yWcdlQ";

    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        
    });

}

searchPlaces();
>>>>>>> 3e0b3edacc46612fd8eb4fc1e8f95c130a01ba1f
