
$("#searchBTN").on("click", function(event) {
    event.preventDefault();
    var nameYelp = $("#userInput").val();
    console.log(nameYelp);
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
      
      $("#yelp-title").text(name);
      $("#yelp-address").text(address);
      $("#yelp-rating").text("Rating: "+ rating);

      });
  });
