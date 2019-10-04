
$("#searchBTN").on("click", function(event) {
    event.preventDefault();
    var nameYelp = $("#userInput").val();
    console.log(nameYelp);
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=37.786882&longitude=-122.399972&term=" + nameYelp;
    $.ajax({
      url: queryURL,
      headers: {
        Authorization:'Bearer p2BCOzqktHtTdM68Yjo08bWKwPDdJacKL3kNyryQ43Eer5ICLMW8hXuqDt3uazvyJoyLDT_X-qzNvYV1w2CDeMRJQiE4d-o_fWTDfhtBgbnnAXExlmVfFYt7mfGUXXYx'
    },
      method: "GET"
    })
      .then(function(response) {
      console.log(response);

      });
  });
