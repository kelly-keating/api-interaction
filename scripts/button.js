//https://eda-te-reo.herokuapp.com/api/whakatauki


var quote = document.getElementById("quote");
var translation = document.getElementById("translation");
var quoteBtn = document.getElementById("refresh");
var tweetBtn = document.getElementById("tweet");

document.addEventListener('DOMContentLoaded', generateNewQuote);
quoteBtn.addEventListener('click', generateNewQuote);
tweetBtn.addEventListener('click', tweetIt);

function generateNewQuote(){
  var xhr = new XMLHttpRequest();
  var json;
  xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/whakatauki", false);

  xhr.onload = function () {
    json = JSON.parse(xhr.responseText);
  }

  xhr.send();

  quote.innerHTML = json.source;
  translation.innerHTML = json.translation;
}



function tweetIt () {
  var phrase = document.getElementById('quote').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase);
  window.open(tweetUrl);
}
//https://dev.twitter.com/web/tweet-button
//http://ask.metafilter.com/275194/Creating-a-Twitter-button-that-tweets-dynamic-text
