//This is the function to generate random quotes from the favoriteQuotes.json object, "favoriteQuotes"

$("#getQuote").on("click", function {
                  $getJSON("https://github.com/joshdefriez/randomQuoteMachine/blob/master/favoriteQuotes.json", function(favoriteQuotes) {
  var randomAuthor = Math.floor(Math.random() * favoriteQuotes.length) + 0);
  var randomQuote = Math.floor(Math.random() * favoriteQuotes[randomAuthor].length) + 0).toString();
  var Author = favoriteQuotes[randomAuthor].key 
  
  documnet.write( );
});
                  });
