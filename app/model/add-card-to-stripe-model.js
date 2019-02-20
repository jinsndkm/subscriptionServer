'user strict';

var Request = require("request");
var qs = require("querystring");
var http = require("https");



var AddCardToStripe = function (addCardToStripe) {
    this.addCardToStripe = addCardToStripe;

}




AddCardToStripe.add_card_to_stripe = function allServices(cardDetails, result) {
    
    var json = JSON.parse(JSON.stringify(cardDetails));
    console.log("cardDetails ::>> "+JSON.stringify(cardDetails).CustomerID)
    var CustomerID = json.CustomerID;
    var token = json.token;

    console.log("customer :>> "+CustomerID+" >>> "+token)

    var options = {
        method: 'POST',
        url: 'https://api.stripe.com/v1/customers/' + CustomerID + '/sources',
        headers:
        {
            'content-type': 'application/x-www-form-urlencoded',
            authorization: globalString

        },
        form: { source: token }
    };

    Request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log("card added  Rsponse>>>>>" + body);
        result(null, body);
    });

}
module.exports = AddCardToStripe;