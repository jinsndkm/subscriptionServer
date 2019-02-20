'use strict';


var WriteToCSV = require('../model/write-to-csv-model.js')



exports.write_to_csv = function (req, res) {

    var id = req.params.custId;

    console.log('subscription controller11111111 ::>> '+id);

    WriteToCSV.write_to_csv(id,function (err, services) {

        
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}


