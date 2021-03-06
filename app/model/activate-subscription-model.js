'user strict';

var Request = require("request");

const fs = require('fs');
const path = require('path');
const os = require('os');
var csvWriter = require('csv-write-stream')
const dateFormat = require('dateformat');

// global.globalString="Basic MDo5NTZnYTltU0RqMmVBeU51dzluc1dtZzdUZ2t4enJ4ek04ck1FTERIcVRQNDBTY2wyU2F5THhCNGR5eDlPdDdk";

//global.globalString="Bearer sk_live_WcIoDcfVidYWkaNoELBX2NIX";
global.globalString="Bearer sk_test_7r4dL5ykom8nvTTA93cVLcve";
// global.globalString="Basic MDo5NTZnYTltU0RqMmVBeU51dzluc1dtZzdUZ2t4enJ4ek04ck1FTERIcVRQNDBTY2wyU2F5THhCNGR5eDlPdDdk";

//global.globalString="Basic MDpRU2tCZlRkVGVVVGVYWTRyNllmZEhITlRKMEhmWHphdXZ5cEFmNFpYOEMwTnEwUm5sZHRlRXpWS2ttU3Z2dVdH";
// global.globalString="Basic MDoxMUduWmQxR1pUZkFLV1Z3elEyQW11Tk1wR3p4b0Q1dFgxUHJmbkN6SXA4ZENlTkJ3ZnRKRTRmOWJmTHRSVUlu";


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
       
        result(null, body);

    });



}





module.exports = activatesubscription;