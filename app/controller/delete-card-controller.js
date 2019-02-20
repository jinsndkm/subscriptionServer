'use strict';


var deleteCard = require('../model/delete-card-model.js')



exports.delete_card = function (req, res) {

    var id = req.params.cardID;

    console.log('subscription controller11111111 ::>> '+id);

    deleteCard.delete_card(id,function (err, services) {

        
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}


