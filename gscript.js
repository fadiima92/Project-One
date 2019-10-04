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
        var name = response.candidates[0].name;
        console.log(response);
        // console.log("selectror: " + response.candidates.formatted_address)
        console.log(response.candidates[0].formatted_address)
        $('#google-title').text(name)

        
    });
    console.log(queryURL)
}
$('#searchBTN').click(searchPlaces);



// function displayResults() {

// }

// candidates[""0""].formatted_address