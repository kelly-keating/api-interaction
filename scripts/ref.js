/**
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);

xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);





var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);





var json = JSON.parse(demo);
console.log(json);





$('#action-button').click(function() {
   $.ajax({
      url: 'http://api.joind.in/v2.1/talks/10889',
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      dataType: 'jsonp',
      success: function(data) {
         var $title = $('<h1>').text(data.talks[0].talk_title);
         var $description = $('<p>').text(data.talks[0].talk_description);
         $('#info')
            .append($title)
            .append($description);
      },
      type: 'GET'
   });
});
**/
