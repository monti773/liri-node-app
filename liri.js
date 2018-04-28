require("dotenv").config();
var Twitter = require("twitter");
var keys = require("./keys");
var request = require("request");
var fs = require("fs");


// Function for running a Twitter Search
var getMyTweets = function() {
        console.log("hello world")

  var client = new Twitter(keys.twitter);

  var params = {
    screen_name: "renewable_works"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      tweets.forEach(function(tweet){
        console.log(tweet.created_at)
        console.log(tweet.text)
      })
      // for (var i = 0; i < tweets.length; i++) {
      //   console.log("hello world")
      //   console.log(tweets[i].created_at);
      //   console.log("");
      //   console.log(tweets[i].text);
      // }
    }
  });
};

getMyTweets()
