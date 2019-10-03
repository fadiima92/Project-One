$("#searchBTN").on("click", function(event) {
    event.preventDefault();
    var nameYelp = ("#userInput").text();
    var queryURL = "https://api.yelp.com/v3/businesses/" + nameYelp + "/reviews?Bearer p2BCOzqktHtTdM68Yjo08bWKwPDdJacKL3kNyryQ43Eer5ICLMW8hXuqDt3uazvyJoyLDT_X-qzNvYV1w2CDeMRJQiE4d-o_fWTDfhtBgbnnAXExlmVfFYt7mfGUXXYx";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
      console.log(response);

      });
  });
