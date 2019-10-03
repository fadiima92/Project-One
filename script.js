$("#search-btn").on("click", function() {
    var nameYelp = $(this).attr("user-input");

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
      .then(function(response) {

      // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var catImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        // Prepending the catImage to the images div
        $("#images").prepend(catImage);
      });
  });