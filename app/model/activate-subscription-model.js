'user strict';

var Request = require("request");

const fs = require('fs');
const path = require('path');
const os = require('os');
var csvWriter = require('csv-write-stream')
const dateFormat = require('dateformat');
global.globalString="Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN";
const createCsvWriter = require('csv-writer').createObjectCsvWriter;



var activatesubscription = function (subscription) {
    this.subscription = subscription;
}




activatesubscription.activate_subscriptions = function allServices(createSub, result) {

    Request.post({
        "headers": {

            "Authorization": globalString,

            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/subscriptionActivation/" + createSub.subscriptionId
    }, (error, response, body) => {
        if (error) {
            console.log("ERRRor" + error)
            return console.dir(error);
        }

        // return console.dir(JSON.parse(response));
        if (response.statusCode == 200) {
            console.log(body)

            var json = JSON.parse(body);

            var customerId = json.customerId;
            var subscriptionId = json.id;
            var amount = json.amount;
            var createdTimestamp = json.createdTimestamp;
            var activatedTimestamp = json.activatedTimestamp;


            console.log(dateFormat(createdTimestamp, "dd-mm-yyyy" ));

            var writer = csvWriter({sendHeaders: false})
            writer.pipe(fs.createWriteStream(__dirname+ '/subscription-details.csv', {flags: 'a'}))
            writer.write({a:customerId, b:subscriptionId,c:amount,d:dateFormat(createdTimestamp, "dd-mm-yyyy" ),e:dateFormat(activatedTimestamp, "dd-mm-yyyy" )})
            writer.end()


  


            // output file in the same folder
            // const filename = path.join(__dirname, 'subscription-details.csv');
            // const output = []; // holds all rows of data



            // // example JSON data
            // const data = [
            //     {
            //         customerId: customerId,
            //         subscriptionId: subscriptionId,
            //         amount: amount,
            //         createdTimestamp: createdTimestamp,
            //         activatedTimestamp: activatedTimestamp
            //     },

            // ];

            // data.forEach((d) => {
            //     const row = []; // a new array for each row of data
            //     row.push(d.customerId);
            //     row.push(d.subscriptionId);
            //     row.push(d.amount);
            //     row.push(d.createdTimestamp);
            //     row.push(d.activatedTimestamp);

            //     output.push(row.join()); // by default, join() uses a ','
            // });

            // fs.appendFileSync(filename, output.join(os.EOL) + '\n');

        }
        result(null, body);

    });



}





module.exports = activatesubscription;