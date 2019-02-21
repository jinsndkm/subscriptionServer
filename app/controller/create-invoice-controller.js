'use strict';


var InvoiceDetails = require('../model/create-invoice-model')



exports.create_invoice = function (req, res) {


    InvoiceDetails.getInvoiceDetails(req.body,function (err, services) {

        
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}


