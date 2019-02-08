'use strict';

var singleSignOnKey= require('../model/single-sign-on-key-model');

exports.get_single_sign_on_key = function (req, res) {

    var custId = req.params.custId;

    console.log("Customer id ::>> "+custId);

    singleSignOnKey.getSingleSignOnKey(custId,function (err, services) {

        
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}