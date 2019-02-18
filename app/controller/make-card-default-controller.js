'use strict';


var makecarddefault = require('../model/make-card-default-model.js')



exports.make_card_default = function (req, res) {
    console.log("inside makecarddefaultSub ");
    var makecarddefaultSub=new makecarddefault(req.body);
    makecarddefault.make_card_default(req.body,function (err, makecarddefaultSub) {
    console.log('make_card_default controller')
    if (err)
        res.send(err);

       
    res.send(makecarddefaultSub);
});
}


