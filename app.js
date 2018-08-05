var express = require('express');
var app = express();
var path = require('path');
const rp = require('request-promise')
var fs = require('fs');
var convert = require('xml-js');


/*
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
*/



app.get('/', (req, res) =>  {
   // res.sendFile(path.join(__dirname + '/index.html'))
    var zillID = 'X1-ZWz1gkfwodm2vf_1sm5d'
    //state code NOT full state name
    var state = 'co' 
    var city = 'denver'
    var childtype = 'neighborhood';
    var options = {
        uri: 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=' + zillID + '&state=' + state + '&city=' + city + '&childtype=' + childtype,
        json: false
      }
    rp(options)
      .then((data) => {
        var jason = convert.xml2json(data, {compact: true, spaces: 4});
        //res.render('index', data)
        var reg = jason._declaration
        fs.writeFile("C:\Users\Max\Desktop\Projects\REInvesting", reg, function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        });
       
        //console.log(data.request.state);
        res.sendFile(path.join(__dirname + '/index.html'));
      })
      .catch((err) => {
        console.log(err)
        res.render('error')
      })
  })

    app.get('/test', (req, res) =>  {
    res.sendFile(path.join(__dirname + '/angularTest.html')) 
    })
    
    app.get('/budget', (req, res) =>  {
      res.sendFile(path.join(__dirname + '/budget.html')) 
      })
  

  app.post('/post/data', (request, response) => {
    const postBody = request.body;
    console.log(postBody);
    console.log(request)
  });

app.listen(3000, () => console.log('App is listening on port 3000!'))




//SAVE FILE EX
/*
 fs.writeFile("/", data, function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        }); 
*/