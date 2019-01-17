'user strict';
var sql = require('../db/db.js');
var Request = require("request");
var http = require("http");

//Task object constructor
var AutoRenewalDetail = function (autoRenewalDetail) {
    this.customerId = autoRenewalDetail.customerId;
    this.planFrequency = autoRenewalDetail.planFrequency;
    this.planCode = autoRenewalDetail.planCode;
    this.planName = autoRenewalDetail.planName;
    this.planDescription = autoRenewalDetail.planDescription;
    this.planReference = autoRenewalDetail.planReference;
}


AutoRenewalDetail.getSubscriptionDetails = function allServices(subscriptionId, result) {

    console.log("Getting details " + subscriptionId);

    Request.get({
        "headers": {
            "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/subscriptions/" + subscriptionId
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        body.remainingInterval=0;
        console.dir(JSON.parse(body));
        var json = JSON.parse(body);
        var customerId = json["customerId"];
        var planFrequency = json.planFrequency;
        var planCode = json.planCode;
        var planName = json.planName;
        var planDescription = json.planDescription;
        var planReference = json.planReference;
        var status = json.status;
        var reference = json.reference;
        var subscriptionOverride = json.subscriptionOverride;
        var hasPostedInvoice = json.hasPostedInvoice;
        var createdTimestamp = json.createdTimestamp;
        var activatedTimestamp = json.activatedTimestamp;
        var provisionedTimestamp = json.provisionedTimestamp;
        var nextPeriodStartDate = json.nextPeriodStartDate;
        var lastPeriodStartDate = json.lastPeriodStartDate;
        var subscriptionProducts = json.subscriptionProducts;
        var remainingInterval = 0;
        var remainingIntervalPushOut = json.remainingIntervalPushOut;
        var openSubscriptionPeriodEndDate = json.openSubscriptionPeriodEndDate;
        var chargeDiscount = json.chargeDiscount;
        var setupFeeDiscount = json.setupFeeDiscount;
        var chargeDiscounts = json.chargeDiscounts;
        var setupFeeDiscounts = json.setupFeeDiscounts;
        var customFields = json.customFields;
        var planAutoApplyChanges = json.planAutoApplyChanges;
        var autoApplyCatalogChanges = json.autoApplyCatalogChanges;
        var monthlyRecurringRevenue = json.monthlyRecurringRevenue;
        var netMonthlyRecurringRevenue = json.netMonthlyRecurringRevenue;
        var amount = json.amount;
        var contractStartTimestamp = json.contractStartTimestamp;
        var contractEndTimestamp = json.contractEndTimestamp;
        var expiredTimestamp = json.expiredTimestamp;
        var coupons = json.coupons;
        var invoiceDay = json.invoiceDay;
        var canMigrate = json.canMigrate;
        var migrationDate = json.migrationDate;
        var scheduledMigrationDate = json.scheduledMigrationDate;
        var subscriptionHasRecurringEndOfPeriodCharge = json.subscriptionHasRecurringEndOfPeriodCharge;
        var nextRechargeDate = json.nextRechargeDate;
        var invoiceInAdvance = json.invoiceInAdvance;
        var billingPeriodDefinitionId = json.billingPeriodDefinitionId;
        var id = json.id;
        var uri = json.uri;

         if (response.statusCode == 200) {
             console.log(">>>"+response.statusCode);
            Request.put({
                "headers": {
                    "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
                    "Content-Type": "application/json"
                },
                "url": "https://secure.fusebill.com/v1/subscriptions/"+planFrequency.planRevisionId,
                "body": JSON.stringify({
                    "customerId": customerId,
                    "planFrequency": {
                        "planRevisionId": 1241795,
                        "numberOfIntervals": 1, 
                        "interval": "Monthly",
                        "numberOfSubscriptions": 1,
                        "status": "Active",
                        "setupFees": [],
                        "charges": [],
                        "isProrated": false,
                        "prorationGranularity": null,
                        "planFrequencyUniqueId": 12791,
                        "remainingInterval": null,
                        "invoiceInAdvance": 0,
                        "salesforceId": null,
                        "id": 76497,
                        "uri": null
                    },
                    "planCode": "testplan4",
                    "planName": "test plan 4",
                    "planDescription": null,
                    "planReference": null,
                    "status": "Active",
                    "reference": null,
                    "subscriptionOverride": null,
                    "hasPostedInvoice": true,
                    "createdTimestamp": "2019-01-17T11:31:56",
                    "activatedTimestamp": "2019-01-17T11:31:56",
                    "provisionedTimestamp": null,
                    "nextPeriodStartDate": "2019-01-21T05:00:00",
                    "lastPeriodStartDate": "2018-12-21T05:41:28",
                    "scheduledActivationTimestamp": null,
                    "subscriptionProducts": [
                        {
                            "subscriptionId": 1241795,
                            "planProduct": {
                                "status": "Active",
                                "productId": 63845,
                                "planId": 28444,
                                "productCode": "testproduct4",
                                "productName": "Test product 4",
                                "productStatus": "Active",
                                "productDescription": null,
                                "productType": "RecurringService",
                                "productGLCode": "",
                                "quantity": 1,
                                "maxQuantity": null,
                                "isRecurring": true,
                                "isFixed": false,
                                "isOptional": false,
                                "isIncludedByDefault": true,
                                "isTrackingItems": false,
                                "chargeAtSubscriptionActivation": true,
                                "orderToCashCycles": [
                                    {
                                        "planFrequencyId": 76497,
                                        "planProductId": 203549,
                                        "numberOfIntervals": 1,
                                        "interval": "Monthly",
                                        "chargeModels": [
                                            {
                                                "chargeModelType": "Signup",
                                                "chargeTimingType": "StartOfPeriod",
                                                "prorationGranularity": null,
                                                "prorateOnPositiveQuantity": false,
                                                "prorateOnNegativeQuantity": false,
                                                "reverseChargeOnNegativeQuantity": false,
                                                "id": 14186328,
                                                "uri": null
                                            },
                                            {
                                                "chargeModelType": "Lifetime",
                                                "chargeTimingType": "Immediate",
                                                "prorationGranularity": null,
                                                "prorateOnPositiveQuantity": false,
                                                "prorateOnNegativeQuantity": false,
                                                "reverseChargeOnNegativeQuantity": false,
                                                "id": 14186328,
                                                "uri": null
                                            }
                                        ],
                                        "remainingInterval": null,
                                        "groupQuantityChangeCharges": false,
                                        "planProductPriceUplifts": null,
                                        "customServiceDateNumberOfIntervals": 0,
                                        "customServiceDateInterval": "Periods",
                                        "customServiceDateProjection": "Future",
                                        "earningInterval": "Monthly",
                                        "earningNumberOfIntervals": 1,
                                        "earningTimingInterval": "Daily",
                                        "earningTimingType": "StartOfInterval",
                                        "pricingModel": {
                                            "pricingModelType": "Standard",
                                            "quantityRanges": [
                                                {
                                                    "min": 0,
                                                    "max": null,
                                                    "prices": [
                                                        {
                                                            "amount": 10,
                                                            "currency": "USD",
                                                            "id": 14186328,
                                                            "uri": null
                                                        }
                                                    ],
                                                    "id": 0,
                                                    "uri": null
                                                }
                                            ],
                                            "id": 14186328,
                                            "uri": null
                                        },
                                        "id": 14186328,
                                        "uri": null
                                    }
                                ],
                                "resetType": "Never",
                                "planProductUniqueId": 76174,
                                "sortOrder": 0,
                                "id": 203549,
                                "uri": ""
                            },
                            "quantity": 1,
                            "isIncluded": true,
                            "startDate": null,
                            "subscriptionProductOverride": null,
                            "subscriptionProductPriceOverride": null,
                            "chargeAtSubscriptionActivation": true,
                            "isCharged": true,
                            "subscriptionProductDiscount": null,
                            "subscriptionProductDiscounts": [],
                            "customFields": null,
                            "monthlyRecurringRevenue": 10,
                            "netMonthlyRecurringRevenue": 10,
                            "amount": 10,
                            "status": "Active",
                            "lastPurchaseDate": "2019-01-17T11:31:59",
                            "earningSettings": {
                                "earningTimingInterval": "Daily",
                                "earningTimingType": "StartOfInterval"
                            },
                            "remainingInterval": null,
                            "groupQuantityChangeCharges": false,
                            "priceUpliftsEnabled": false,
                            "priceUplifts": [],
                            "historicalPriceUplifts": [],
                            "customServiceDateNumberOfIntervals": 0,
                            "customServiceDateInterval": "Periods",
                            "customServiceDateProjection": "Future",
                            "id": 14186328,
                            "uri": "https://secure.fusebill.com/v1/SubscriptionProducts/14186328"
                        }
                    ],
                    "remainingInterval": 0,
                    "remainingIntervalPushOut": null,
                    "openSubscriptionPeriodEndDate": "2019-01-21T05:00:00",
                    "chargeDiscount": null,
                    "setupFeeDiscount": null,
                    "chargeDiscounts": null,
                    "setupFeeDiscounts": null,
                    "customFields": null,
                    "planAutoApplyChanges": false,
                    "autoApplyCatalogChanges": false,
                    "monthlyRecurringRevenue": 10,
                    "netMonthlyRecurringRevenue": 10,
                    "amount": 10,
                    "contractStartTimestamp": null,
                    "contractEndTimestamp": null,
                    "expiredTimestamp": null,
                    "coupons": [],
                    "invoiceDay": 21,
                    "invoiceMonth": null,
                    "canMigrate": null,
                    "migrationDate": null,
                    "scheduledMigrationDate": null,
                    "subscriptionHasRecurringEndOfPeriodCharge": false,
                    "nextRechargeDate": "2019-01-21T05:00:00",
                    "invoiceInAdvance": 0,
                    "billingPeriodDefinitionId": 1079727,
                    "id": 1241795,
                    
                    "uri": "https://secure.fusebill.com/v1/subscriptions/1241795"
                })
                //"body": JSON.stringify({"customerId": customerId,"planFrequency":planFrequency,"planCode":planCode,"planName":planName,"planDescription":planDescription,"planReference":planReference,"status":status,"reference":reference,"subscriptionOverride":subscriptionOverride,"remainingInterval":remainingInterval,"remainingIntervalPushOut":remainingIntervalPushOut,"openSubscriptionPeriodEndDate":openSubscriptionPeriodEndDate,"chargeDiscount":chargeDiscount,"setupFeeDiscount":setupFeeDiscount,"customFields":customFields,"planAutoApplyChanges":planAutoApplyChanges,"autoApplyCatalogChanges":autoApplyCatalogChanges,"monthlyRecurringRevenue":monthlyRecurringRevenue,"netMonthlyRecurringRevenue":netMonthlyRecurringRevenue,"amount":amount,"contractStartTimestamp":contractStartTimestamp,"contractEndTimestamp":contractEndTimestamp,"expiredTimestamp":expiredTimestamp,"coupons":coupons,"invoiceDay":invoiceDay,"canMigrate":canMigrate,"migrationDate":migrationDate,"scheduledMigrationDate":scheduledMigrationDate,"subscriptionHasRecurringEndOfPeriodCharge":subscriptionHasRecurringEndOfPeriodCharge,"nextRechargeDate":nextRechargeDate,"invoiceInAdvance":invoiceInAdvance,"billingPeriodDefinitionId":billingPeriodDefinitionId,"id":id,"uri":uri})
            }, (error, response, body) => {
                if (error) {
                    return console.dir(error);
                }
              // return console.dir(JSON.parse(response));
               console.log("respo :>>>"+body);
        
               result(null, body);
                
            });
        
        
            console.log("Final");
        //     var headers = {
        //         'Authorization': 'Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN',
        //         'Content-Type': 'application/json'
        //     }
        //     var options = {
        //         url: 'https://secure.fusebill.com/v1/subscriptions/'+planFrequency.planRevisionId,
        //         method: 'PUT',
        //         headers: headers,
        //         body: JSON.stringify({"customerId": customerId,"planFrequency":planFrequency,"planCode":planCode,"planName":planName,"planDescription":planDescription,"planReference":planReference,"status":status,"reference":reference,"subscriptionOverride":subscriptionOverride,"remainingInterval":remainingInterval,"remainingIntervalPushOut":remainingIntervalPushOut,"openSubscriptionPeriodEndDate":openSubscriptionPeriodEndDate,"chargeDiscount":chargeDiscount,"setupFeeDiscount":setupFeeDiscount,"customFields":customFields,"planAutoApplyChanges":planAutoApplyChanges,"autoApplyCatalogChanges":autoApplyCatalogChanges,"monthlyRecurringRevenue":monthlyRecurringRevenue,"netMonthlyRecurringRevenue":netMonthlyRecurringRevenue,"amount":amount,"contractStartTimestamp":contractStartTimestamp,"contractEndTimestamp":contractEndTimestamp,"expiredTimestamp":expiredTimestamp,"coupons":coupons,"invoiceDay":invoiceDay,"canMigrate":canMigrate,"migrationDate":migrationDate,"scheduledMigrationDate":scheduledMigrationDate,"subscriptionHasRecurringEndOfPeriodCharge":subscriptionHasRecurringEndOfPeriodCharge,"nextRechargeDate":nextRechargeDate,"invoiceInAdvance":invoiceInAdvance,"billingPeriodDefinitionId":billingPeriodDefinitionId,"id":id,"uri":uri})
        //     }

        //     Request(options, function (error, response, body) {
        //         console.log(response.statusCode)
        //         if (!error && response.statusCode == 200) {
        //             // Print out the response body
        //             console.log("ggg "+body)
        //         }
        //     })

         }

        result(null, body);

    });

}



module.exports = AutoRenewalDetail;