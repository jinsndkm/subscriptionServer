'user strict';

var Request = require("request");
const fs = require('fs');
const path = require('path');
const os = require('os');
var csvWriter = require('csv-write-stream')
const dateFormat = require('dateformat');



var WriteToCSV = function(WriteToCSV){
    this.WriteToCSV=WriteToCSV;
}




WriteToCSV.write_to_csv = function allServices(custId,result) {
    Request.get({
        "headers": {

            "Authorization":globalString,

            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/charges?customer="+custId+"&&limit=1"
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
      
     
      //var json=JSON.parse(body);

      
      console.log("Write to csv response>>>>>>>>>>>>>>>>>>>>"+body);
      let json = JSON.parse(body);
      var data=json.data;

      let paymentID = data[0].id; 
      let amount = 0; 
      let created = data[0].created; 
     
      
      var writer = csvWriter({sendHeaders: false})
      writer.pipe(fs.createWriteStream(__dirname+ '/subscription-details.csv', {flags: 'a'}))
      writer.write({a:custId, b:paymentID,c:amount,d:dateFormat(created*1000, "dd-mm-yyyy" ),e:dateFormat(created*1000, "dd-mm-yyyy" )})
      writer.end()
       result(null, body);
        
    });


  
}





module.exports = WriteToCSV;