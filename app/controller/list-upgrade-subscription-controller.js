'use strict';

var ListUpgradeSubscriptions = require('../model/list-upgrade-subscription-model');
exports.list_upgrade_subscriptions = function (req, res) {
    ListUpgradeSubscriptions.list_upgrade_subscriptions(req.params.subId,function (err, services) {

        console.log('subscription controller')
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}

