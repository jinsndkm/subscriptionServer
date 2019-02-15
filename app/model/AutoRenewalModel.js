'user strict';
// var sql = require('../db/db.js');
var Request = require("request");
var http = require("http");

//Task object constructor
var AutoRenewalDetail = function (autoRenewalDetail) {
    this.subscriptionId=autoRenewalDetail.subscriptionId;
}


AutoRenewalDetail.getSubscriptionDetails = function allServices(autoRenewalBody,status, result) {
    console.log("SSS<><>"+JSON.stringify(autoRenewalBody))
    var request = require("request");

    var options = { method: 'POST',
      url: 'https://api.stripe.com/v1/subscriptions/sub_EWlja3fxv1Kwuh',
      headers: 
       { 'postman-token': 'cd1ba710-b5fa-1227-51ef-62010143824a',
         'cache-control': 'no-cache',
         authorization: globalString,
         'content-type': 'application/x-www-form-urlencoded' },
      form: { billing: 'charge_automatically'} };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
    
}

AutoRenewalDetail.disableAutoRenewal = function allServices(autoRenewalBody,result) {
 console.log("on disable<><>"+JSON.stringify(autoRenewalBody.subscriptionId))
    var request = require("request");
    console.log(">>>>"+'https://api.stripe.com/v1/subscriptions/'+autoRenewalBody.subscriptionId);
    var options = { method: 'POST',
      url: 'https://api.stripe.com/v1/subscriptions/'+autoRenewalBody.subscriptionId,
      headers: 
       { 'postman-token': 'cd1ba710-b5fa-1227-51ef-62010143824a',
         'cache-control': 'no-cache',
         authorization: globalString,
         'content-type': 'application/x-www-form-urlencoded' },
      form: {billing: 'send_invoice',days_until_due:30} };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
    
}


AutoRenewalDetail.updateSubscriptionDetails = function allServices(body, statusCode, action,result ) {

    var json = JSON.parse(body);
    var customerId = json["customerId"];
    var planFrequency = json.planFrequency;

    if (action == "false") {
        console.log("Inside false");
        Request.put({

            "headers": {
                "Authorization": globalString,
                "Content-Type": "application/json"
            },
            "url": "https://secure.fusebill.com/v1/subscriptions/" + planFrequency.planRevisionId,
            //"body": body
            "body": JSON.stringify({
                "customerId": customerId,
                "planFrequency": {
                    "planRevisionId": json.planFrequency.planRevisionId,
                    "numberOfIntervals": json.planFrequency.numberOfIntervals,
                    "interval": "json.planFrequency.interval",
                    "numberOfSubscriptions": json.planFrequency.numberOfSubscriptions,
                    "status": "json.planFrequency.status",
                    "setupFees": json.planFrequency.setupFees,
                    "charges": json.planFrequency.charges,
                    "isProrated": json.planFrequency.isProrated,
                    "prorationGranularity": json.planFrequency.prorationGranularity,
                    "planFrequencyUniqueId": json.planFrequency.planFrequencyUniqueId,
                    "remainingInterval": json.remainingInterval,
                    "invoiceInAdvance": json.planFrequency.invoiceInAdvance,
                    "salesforceId": json.planFrequency.salesforceId,
                    "id": json.planFrequency.id,
                    "uri": json.planFrequency.uri
                },
                "planCode": "json.planCode",
                "planName": "json.planName",
                "planDescription": json.planDescription,
                "planReference": json.planReference,
                "status": json.status,
                "reference": json.reference,
                "subscriptionOverride": json.subscriptionOverride,
                "hasPostedInvoice": json.hasPostedInvoice,
                "createdTimestamp": "json.createdTimestamp",
                "activatedTimestamp": "json.activatedTimestamp",
                "provisionedTimestamp": json.provisionedTimestamp,
                "nextPeriodStartDate": "json.nextPeriodStartDate",
                "lastPeriodStartDate": "json.lastPeriodStartDate",
                "scheduledActivationTimestamp": json.scheduledActivationTimestamp,
                "subscriptionProducts": json.subscriptionProducts,
                "remainingInterval": 0,
                "remainingIntervalPushOut": json.remainingIntervalPushOut,
                "openSubscriptionPeriodEndDate": json.openSubscriptionPeriodEndDate,
                "chargeDiscount": json.chargeDiscount,
                "setupFeeDiscount": json.setupFeeDiscount,
                "chargeDiscounts": json.chargeDiscounts,
                "setupFeeDiscounts": json.setupFeeDiscounts,
                "customFields": json.customFields,
                "planAutoApplyChanges": json.planAutoApplyChanges,
                "autoApplyCatalogChanges": json.autoApplyCatalogChanges,
                "monthlyRecurringRevenue": json.monthlyRecurringRevenue,
                "netMonthlyRecurringRevenue": json.netMonthlyRecurringRevenue,
                "amount": json.amount,
                "contractStartTimestamp": json.contractStartTimestamp,
                "contractEndTimestamp": json.contractEndTimestamp,
                "expiredTimestamp": json.expiredTimestamp,
                "coupons": json.coupons,
                "invoiceDay": json.invoiceDay,
                "invoiceMonth": json.invoiceMonth,
                "canMigrate": json.canMigrate,
                "migrationDate": json.migrationDate,
                "scheduledMigrationDate": json.scheduledMigrationDate,
                "subscriptionHasRecurringEndOfPeriodCharge": json.subscriptionHasRecurringEndOfPeriodCharge,
                "nextRechargeDate": "json.nextRechargeDate",
                "invoiceInAdvance": json.invoiceInAdvance,
                "billingPeriodDefinitionId": json.billingPeriodDefinitionId,
                "id": json.id,
                "uri": "json.uri"
            })
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            } else {
                console.log("bbb :: >> " + JSON.stringify(body));
                console.dir(response.statusCode)
                return console.dir(response.statusCode);

            }



        });
    } else if (action == "true") {
        Request.put({

            "headers": {
                "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
                "Content-Type": "application/json"
            },
            "url": "https://secure.fusebill.com/v1/subscriptions/" + planFrequency.planRevisionId,
            //"body": body
            "body": JSON.stringify({
                "customerId": customerId,
                "planFrequency": {
                    "planRevisionId": json.planFrequency.planRevisionId,
                    "numberOfIntervals": json.planFrequency.numberOfIntervals,
                    "interval": "json.planFrequency.interval",
                    "numberOfSubscriptions": json.planFrequency.numberOfSubscriptions,
                    "status": "json.planFrequency.status",
                    "setupFees": json.planFrequency.setupFees,
                    "charges": json.planFrequency.charges,
                    "isProrated": json.planFrequency.isProrated,
                    "prorationGranularity": json.planFrequency.prorationGranularity,
                    "planFrequencyUniqueId": json.planFrequency.planFrequencyUniqueId,
                    "remainingInterval": json.remainingInterval,
                    "invoiceInAdvance": json.planFrequency.invoiceInAdvance,
                    "salesforceId": json.planFrequency.salesforceId,
                    "id": json.planFrequency.id,
                    "uri": json.planFrequency.uri
                },
                "planCode": "json.planCode",
                "planName": "json.planName",
                "planDescription": json.planDescription,
                "planReference": json.planReference,
                "status": json.status,
                "reference": json.reference,
                "subscriptionOverride": json.subscriptionOverride,
                "hasPostedInvoice": json.hasPostedInvoice,
                "createdTimestamp": "json.createdTimestamp",
                "activatedTimestamp": "json.activatedTimestamp",
                "provisionedTimestamp": json.provisionedTimestamp,
                "nextPeriodStartDate": "json.nextPeriodStartDate",
                "lastPeriodStartDate": "json.lastPeriodStartDate",
                "scheduledActivationTimestamp": json.scheduledActivationTimestamp,
                "subscriptionProducts": json.subscriptionProducts,
                "remainingInterval": null,
                "remainingIntervalPushOut": json.remainingIntervalPushOut,
                "openSubscriptionPeriodEndDate": json.openSubscriptionPeriodEndDate,
                "chargeDiscount": json.chargeDiscount,
                "setupFeeDiscount": json.setupFeeDiscount,
                "chargeDiscounts": json.chargeDiscounts,
                "setupFeeDiscounts": json.setupFeeDiscounts,
                "customFields": json.customFields,
                "planAutoApplyChanges": json.planAutoApplyChanges,
                "autoApplyCatalogChanges": json.autoApplyCatalogChanges,
                "monthlyRecurringRevenue": json.monthlyRecurringRevenue,
                "netMonthlyRecurringRevenue": json.netMonthlyRecurringRevenue,
                "amount": json.amount,
                "contractStartTimestamp": json.contractStartTimestamp,
                "contractEndTimestamp": json.contractEndTimestamp,
                "expiredTimestamp": json.expiredTimestamp,
                "coupons": json.coupons,
                "invoiceDay": json.invoiceDay,
                "invoiceMonth": json.invoiceMonth,
                "canMigrate": json.canMigrate,
                "migrationDate": json.migrationDate,
                "scheduledMigrationDate": json.scheduledMigrationDate,
                "subscriptionHasRecurringEndOfPeriodCharge": json.subscriptionHasRecurringEndOfPeriodCharge,
                "nextRechargeDate": "json.nextRechargeDate",
                "invoiceInAdvance": json.invoiceInAdvance,
                "billingPeriodDefinitionId": json.billingPeriodDefinitionId,
                "id": json.id,
                "uri": "json.uri"
            })
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            } else {
                console.log("enable :: >> " + JSON.stringify(body));
                console.dir(response.statusCode)
                return console.dir(response.statusCode);

            }



        });
    }


}

module.exports = AutoRenewalDetail;