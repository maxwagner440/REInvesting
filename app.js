var express = require('express');
var app = express();
var path = require('path');
const request = require('request-promise')


/*
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
*/

app.get('/', (req, res) =>  
    res.sendFile(path.join(__dirname + '/index.html'))
)



//FOR API REQUEST FORMATTING//


/*
const options = {
    method: 'GET',
    uri: 'https://risingstack.com/login',
    header: {
      foo: 'bar'
    },
    json: true 
      // JSON stringifies the body automatically
  }
  ​
  request(options)
    .then(function (response) {
      // Handle the response
    })
    .catch(function (err) {
      // Deal with the error
    })
*/


app.listen(3000, () => console.log('App is listening on port 3000!'))