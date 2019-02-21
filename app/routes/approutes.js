'use strict';

module.exports = function (app) {
    var service = require('../controller/ServiceController');
    var todoList = require('../controller/appController');
    var mySubscrriptios = require('../controller/MySubscriptionController');

    var serviceList = require('../controller/addServiceController');
    var productList = require('../controller/plan_products_list_controller');
    var plandetails = require('../controller/plan-details-controller');
    var productdetails = require('../controller/product-details-controller')
    var subscription = require('../controller/create-subscription-controller')
    var activateSub = require('../controller/activate-subscription-controller')

    var viewSubscriptionDetails = require('../controller/ViewSubscriptionDetailsController');
    var autoRenewal = require('../controller/AutoRenewalController');

    var listSubscriptions = require('../controller/list-upgrade-subscription-controller');
    var migratesubscription = require('../controller/migrate-subscription-controller');

    var listSubscriptions = require('../controller/list-upgrade-subscription-controller');
    var migratesubscription = require('../controller/migrate-subscription-controller');
    var checkCardDetails = require('../controller/check-card-details-controller');
    var singleSignOnKeyDetails = require('../controller/single-sign-on-key-controller');
    var makeCardDefault = require('../controller/make-card-default-controller')

    var addcardToStripe = require('../controller/add-card-to-stripe-controller');

    var writeToCsv = require('../controller/write-to-csv-controller')
    var deletecard = require('../controller/delete-card-controller')

    var getAPlanDetail = require('../controller/get-a-product-controller')

    var invoiceDetails = require('../controller/create-invoice-controller')


    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/fusebill')
        .get(service.get_all_services);

    app.route('/subscription/cancel/:subscriptionId')
        .get(service.cancel_subscription);

    app.route('/mysubscriprions')
        .get(mySubscrriptios.get_my_subscriptions);


    app.route('/servicelist')
        .get(serviceList.get_all_services);

    app.route('/planproducts/:subId')
        .get(productList.get_product_list);

    app.route('/plandetails/:subId')
        .get(plandetails.get_plan_details);

    app.route('/productdetails/:subId')
        .get(productdetails.get_product_details);


    app.route('/subscription/create')
        .post(subscription.create_subscription);

    app.route('/subscription/activate')
        .post(activateSub.activate_subscription);

    app.route('/mysubscription/viewSubscription/:subId')
        .get(viewSubscriptionDetails.get_subscription_details);
    app.route('/mysubscription/autorenewal')
        .post(autoRenewal.my_subscriptions_autorenewal);

    app.route('/mysubscription/autorenewal/disable')
        .post(autoRenewal.my_subscriptions_autorenewal_disable);

    app.route('/subscription/listupgradesubscriptions/:subId')
        .get(listSubscriptions.list_upgrade_subscriptions);
    app.route('/subscription/migratesubscription')
        .post(migratesubscription.migrate_subscriptions);

    app.route('/checkcarddetails/:custId')
        .get(checkCardDetails.check_card_details);

    app.route('/getsignlesignonkey/:custId')
        .get(singleSignOnKeyDetails.get_single_sign_on_key)

    // todoList Routes
    app.route('/paymentwebhook')
        .post(todoList.webhook);
    // .set('Authorization', 'Basic 02959D70F933C882DDF85A92DF64C04D');

    app.route('/addservice/carddetails/makedefault')
        .post(makeCardDefault.make_card_default);

    app.route('/addnewcardtostripe')
        .post(addcardToStripe.add_card_to_stripe);

    app.route('/writetocsv/:custId')
        .get(writeToCsv.write_to_csv)

    app.route('/deletecard/:cardID')
        .delete(deletecard.delete_card)

    app.route('/getplandetails/:planFreID')
        .get(getAPlanDetail.get_a_plan_detail)

    app.route('/createInvoice')
        .post(invoiceDetails.create_invoice);


}