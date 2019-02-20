'use strict';

var addCardToStripe = require('../model/add-card-to-stripe-model');

exports.add_card_to_stripe = function (req, res) {
  
    var cardDetails = new addCardToStripe(req.body);
    console.log('add card to stripe ::>>'+JSON.stringify(cardDetails))
    addCardToStripe.add_card_to_stripe(req.body, function (err, cardDetails) {
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(cardDetails);
    });
}
