//This is the function to generate random quotes from the favoriteQuotes.json object, "favoriteQuotes"

$("#getQuote").on("click", function {
                  $getJSON("favoriteQuotes.json", function(json) {
});
                  });
