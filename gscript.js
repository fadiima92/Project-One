>>>>>>>>> Temporary merge branch 2
function searchPlaces() {

    // setting variables for link to google
    var googlePlaces = "food";
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

searchPlaces();

