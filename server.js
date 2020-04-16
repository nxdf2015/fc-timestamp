// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});




// your first API endpoint... 
app.get("/api/timestamp/:datestring", function (req, res) {
  
   
  let  utc
  let unix
  
    const dateString = req.params.datestring
    console.log(dateString,isNaN(dateString))
    let date 
     
   
     if (dateString == ""){
      date= new Date()
    }
    else if(!isNaN(dateString)){
      date = new Date(parseInt(dateString))
    }
    else {
     date = new Date(dateString)
     
    }
  
  if (date != "Invalid Date"){
      utc =date.toUTCString()
      unix=date.getTime()
      res.json({utc,unix})
    }
  else {
    res.json({error:"Invalid Date"})
  }
});


app.get("/api/timestamp/",function(req,res){
  const date = new Date()
  res.json({unix:date.getTime(), utc : date.toUTCString()})
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});