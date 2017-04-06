//https://eda-te-reo.herokuapp.com/api/whakatauki


var quote = document.getElementById("quote");
var translation = document.getElementById("translation");
var btn = document.getElementById("refresh");

console.log(btn);

//document.addEventListener('DOMContentLoaded', generateNewQuote);
btn.addEventListener('click', generateNewQuote());

function generateNewQuote(){
  var xhr = new XMLHttpRequest();
  var json;
  xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/whakatauki", false);

  xhr.onload = function () {
    json = JSON.parse(xhr.responseText);
  }

  xhr.send();
  console.log(json);
  quote.innerHTML = json.source;
  translation.innerHTML = json.translation;
}
