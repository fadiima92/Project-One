var rating;
$("#searchBTN").on("click", function(event) {
    event.preventDefault();
    var nameYelp = $("#userInput").val();
    var location = "latitude=33.6450053&longitude=-117.83510860000001";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?" + location + "&term=" + nameYelp;
    $.ajax({
      url: queryURL,
      headers: {
        Authorization:'Bearer p2BCOzqktHtTdM68Yjo08bWKwPDdJacKL3kNyryQ43Eer5ICLMW8hXuqDt3uazvyJoyLDT_X-qzNvYV1w2CDeMRJQiE4d-o_fWTDfhtBgbnnAXExlmVfFYt7mfGUXXYx'
    },
      method: "GET"
    })
      .then(function(response) {
      console.log(response);
      var results = response.businesses;
      var rating = results[0].rating;
      var name = results[0].name;
      var address = results[0].location.address1 + ", " + results[0].location.city + ", " +  results[0].location.state + " " + results[0].location.zip_code + ", " + results[0].location.country;
      businesID = results[0].id;
      $("#yelp-title").text(name);
      $("#yelp-address").text(address);
      $("#yelp-rating").text("Rating: "+ rating);
      var avarageRating = (ratingG + rating) / 2;
      $("#compaired-rating").text("Avarage rating: " + avarageRating);
      var reviewURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/" + businesID + "/reviews?";
      console.log(businesID);
      $.ajax({
        url: reviewURL,
        headers: {
          Authorization:'Bearer p2BCOzqktHtTdM68Yjo08bWKwPDdJacKL3kNyryQ43Eer5ICLMW8hXuqDt3uazvyJoyLDT_X-qzNvYV1w2CDeMRJQiE4d-o_fWTDfhtBgbnnAXExlmVfFYt7mfGUXXYx'
      },
        method: "GET"
      })
        .then(function(response) {
        console.log(response);
        var reviewsText = response.total;
        $("#yelp-reviews").text("Total reviews: " + reviewsText);
      });
  });
});



// 1. Can't create a graph only 3 reviews avaliable with google.
// 2. Need some instrument to be sure that we compare the same placese.
// Option 1 - list with restaraunts, check button to choose the right one.
// Option 2 - Compare some similar data with Google request. Address - make a string for yelp the same format as google. For loop for comparing the address
// Option 3 - Change array Index in results.
