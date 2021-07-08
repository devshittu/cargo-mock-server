const express = require('express');
const app = express();
// app.listen(3000, function() {
//     console.log('listening on 3000')
// })

app.post('/me', (req, res) => {
    const response = {
        "accountNumbers": {
            "abcCla": "agent_BD22C5B64BA197AB290B5835ACFAED66",
            "americanAirline": "23471876013",
            "coa": "11222333456742",
            "ecs": "23450346592",
            "etihad": "23450346592",
            "lufthansa": "332242903"
        },
        "availableAirlines": [
            "AIRLINE_PROVIDER_NCA",
            "AIRLINE_PROVIDER_ECS",
            "AIRLINE_PROVIDER_LUFTHANSA",
            "AIRLINE_PROVIDER_VOLGA_DNEPR",
            "AIRLINE_PROVIDER_ETIHAD",
            "AIRLINE_PROVIDER_COA",
            "AIRLINE_PROVIDER_AA"
        ],
        "cassNumber": "23450346592",
        "classifier": "4874a69f5e4e369ba37654fcf2c4a35b927d994d",
        "commonOrigins": [
            "FRA",
            "BER",
            "HAJ"
        ],
        "companyName": "cargo.one",
        "country": "Germany",
        "countryCode": "DE",
        "createdAt": 0,
        "currency": "EUR",
        "email": "abdulhakeem.mustapha@cargo.one",
        "experiments": {
            "LHV2_passive_cool_access": "on",
            "alternative_origins_access": "on",
            "ana_access": "on",
            "bookings_cancellation": "on",
            "bookings_update": "on",
            "consol_access": "on",
            "el_al_access": "on",
            "el_al_api_access": "on",
            "etihad_access": "on",
            "etihad_batteries_access": "on",
            "etihad_dry_ice_access": "on",
            "etihad_ert_temperature_range": "on",
            "etihad_passive_cool_access": "on",
            "finnair_access": "on",
            "finnair_batteries_access": "on",
            "lufthansa_dry_ice_access": "on",
            "lufthansa_ert_temperature_range": "on",
            "new_etihad_fetch_offers": "on",
            "new_volga_fetch_offers_access": "on",
            "offers_with_remarks_access": "on",
            "passive_cool_access": "on",
            "rate_type_label": "on",
            "saved_quotes": "on",
            "share_quotes_access": "on",
            "tracking_hub_history": "on",
            "tracking_updates_email": "on",
            "volga_dnepr_access": "on",
            "volga_passive_cool_access": "on",
            "volga_update_access": "on"
        },
        "firstName": "Abdulhakeem",
        "hasAccountNumbers": true,
        "id": "1120d007-e7fd-4298-a337-230445463dd9",
        "intercom_hash": "a7fc5cc030d9d1cc105fa91ec4e00acfe1f3969a604104b15e7eaf969c203fc0",
        "lastName": "Mustapha",
        "name": "Abdulhakeem Mustapha",
        "passwordEnabled": true,
        "phoneNumber": {
            "countryCode": "+49",
            "phoneNumber": "2347067577058"
        },
        "proposedAccountNumbers": [],
        "proposedCassNumber": {},
        "station": "FRA",
        "stationAdmin": false
    }

    res.json(response).send()
})
app.get('/shipments', (req, res) => {
    const response = [
        {
            "createdAt": "2021-07-08T16:41:38+00:00",
            "destination": "DFW",
            "destinationCountry": "US",
            "dropoffTime": "2021-07-16T00:00:00+02:00",
            "goodsType": "general",
            "id": "9710f166-524f-446f-b2fd-5871f9034346",
            "isConsolidated": false,
            "items": [
                {
                    "height": 11,
                    "isTotalWeight": true,
                    "length": 25,
                    "quantity": 15,
                    "stackable": true,
                    "turnable": false,
                    "weight": 10.0,
                    "width": 20
                },
                {
                    "height": 20,
                    "isTotalWeight": false,
                    "length": 100,
                    "quantity": 2,
                    "stackable": false,
                    "turnable": true,
                    "weight": 12.0,
                    "width": 30
                }
            ],
            "origin": "FRA",
            "originCountry": "DE",
            "pickupTime": "2021-07-24T23:59:59-05:00",
            "productService": "PRODUCT_SERVICE_GENERAL",
            "product_service_properties": {
                "product_service_properties": {
                    "general_properties": {
                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                    }
                }
            },
            "screening": "screened",
            "shipperStatus": "known",
            "versionId": 1
        },
        {
            "createdAt": "2021-07-08T09:28:28+00:00",
            "destination": "DFW",
            "destinationCountry": "US",
            "dropoffTime": "2021-07-16T00:00:00+02:00",
            "goodsType": "general",
            "id": "923a050d-28e4-49a5-8060-a3df314b466b",
            "isConsolidated": false,
            "items": [
                {
                    "height": 20,
                    "isTotalWeight": false,
                    "length": 100,
                    "quantity": 2,
                    "stackable": false,
                    "turnable": true,
                    "weight": 12.0,
                    "width": 30
                },
                {
                    "height": 11,
                    "isTotalWeight": true,
                    "length": 25,
                    "quantity": 15,
                    "stackable": true,
                    "turnable": false,
                    "weight": 10.0,
                    "width": 20
                }
            ],
            "origin": "FRA",
            "originCountry": "DE",
            "pickupTime": "2021-07-24T23:59:59-05:00",
            "productService": "PRODUCT_SERVICE_GENERAL",
            "product_service_properties": {
                "product_service_properties": {
                    "general_properties": {
                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                    }
                }
            },
            "screening": "screened",
            "shipperStatus": "known",
            "versionId": 1
        },
        {
            "createdAt": "2021-07-08T08:47:00+00:00",
            "destination": "DFW",
            "destinationCountry": "US",
            "dropoffTime": "2021-07-16T00:00:00+02:00",
            "goodsType": "general",
            "id": "41c1ae0f-88f7-4f66-950f-80377b93282f",
            "isConsolidated": false,
            "items": [
                {
                    "height": 11,
                    "isTotalWeight": true,
                    "length": 25,
                    "quantity": 15,
                    "stackable": true,
                    "turnable": false,
                    "weight": 10.0,
                    "width": 20
                },
                {
                    "height": 20,
                    "isTotalWeight": false,
                    "length": 100,
                    "quantity": 2,
                    "stackable": false,
                    "turnable": true,
                    "weight": 12.0,
                    "width": 30
                }
            ],
            "origin": "FRA",
            "originCountry": "DE",
            "pickupTime": "2021-07-24T23:59:59-05:00",
            "productService": "PRODUCT_SERVICE_GENERAL",
            "product_service_properties": {
                "product_service_properties": {
                    "general_properties": {
                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                    }
                }
            },
            "screening": "screened",
            "shipperStatus": "known",
            "versionId": 1
        },
        {
            "createdAt": "2021-07-07T23:20:12+00:00",
            "destination": "DFW",
            "destinationCountry": "US",
            "dropoffTime": "2021-07-16T00:00:00+02:00",
            "goodsType": "general",
            "id": "51b41cf9-fe7c-48c5-bd82-4b1b22c30aed",
            "isConsolidated": false,
            "items": [
                {
                    "height": 20,
                    "isTotalWeight": false,
                    "length": 100,
                    "quantity": 2,
                    "stackable": false,
                    "turnable": true,
                    "weight": 12.0,
                    "width": 30
                },
                {
                    "height": 11,
                    "isTotalWeight": true,
                    "length": 25,
                    "quantity": 15,
                    "stackable": true,
                    "turnable": false,
                    "weight": 10.0,
                    "width": 20
                }
            ],
            "origin": "FRA",
            "originCountry": "DE",
            "pickupTime": "2021-07-24T23:59:59-05:00",
            "productService": "PRODUCT_SERVICE_GENERAL",
            "product_service_properties": {
                "product_service_properties": {
                    "general_properties": {
                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                    }
                }
            },
            "screening": "screened",
            "shipperStatus": "known",
            "versionId": 1
        },
        {
            "createdAt": "2021-07-07T23:15:08+00:00",
            "destination": "DFW",
            "destinationCountry": "US",
            "dropoffTime": "2021-07-16T00:00:00+02:00",
            "goodsType": "general",
            "id": "ae33a4e4-9f97-4adb-b983-ce3d3100b8bd",
            "isConsolidated": false,
            "items": [
                {
                    "height": 11,
                    "isTotalWeight": true,
                    "length": 25,
                    "quantity": 15,
                    "stackable": true,
                    "turnable": false,
                    "weight": 10.0,
                    "width": 20
                },
                {
                    "height": 20,
                    "isTotalWeight": false,
                    "length": 100,
                    "quantity": 2,
                    "stackable": false,
                    "turnable": true,
                    "weight": 12.0,
                    "width": 30
                }
            ],
            "origin": "FRA",
            "originCountry": "DE",
            "pickupTime": "2021-07-24T23:59:59-05:00",
            "productService": "PRODUCT_SERVICE_GENERAL",
            "product_service_properties": {
                "product_service_properties": {
                    "general_properties": {
                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                    }
                }
            },
            "screening": "screened",
            "shipperStatus": "known",
            "versionId": 1
        }
    ]

    res.json(response).send()
})
app.get('/shipments/:id', (req, res) => {
    const response = {
        "createdAt": "2021-07-08T20:33:52+00:00",
        "destination": "DFW",
        "destinationCountry": "US",
        "dropoffTime": "2021-07-16T00:00:00+02:00",
        "goodsType": "general",
        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
        "isConsolidated": false,
        "items": [
            {
                "height": 20,
                "isTotalWeight": false,
                "length": 100,
                "quantity": 2,
                "stackable": false,
                "turnable": true,
                "weight": 12.0,
                "width": 30
            },
            {
                "height": 11,
                "isTotalWeight": true,
                "length": 25,
                "quantity": 15,
                "stackable": true,
                "turnable": false,
                "weight": 10.0,
                "width": 20
            }
        ],
        "origin": "FRA",
        "originCountry": "DE",
        "pickupTime": "2021-07-24T23:59:59-05:00",
        "productService": "PRODUCT_SERVICE_GENERAL",
        "product_service_properties": {
            "product_service_properties": {
                "general_properties": {
                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                }
            }
        },
        "screening": "screened",
        "shipperStatus": "known",
        "versionId": 1
    }

    res.json(response).send()
})
app.get('/autosuggest-airports', () => {
    const response = {
        "results": [
            {
                "code": "FRA",
                "name": "Frankfurt International Airport",
                "support": 7
            },
            {
                "code": "HHN",
                "name": "Frankfurt-Hahn",
                "support": 1
            }
        ]
    }

    res.json(response).send()
})
app.get('/product-config', (req, res) => {
    const response = {
        "notificationBannerFlag": false,
        "notificationBannerMsg": "hello world"
    }

    res.json(response).send()
})
app.get('/user/get-station-users', (req, res) => {
    const response = []

    res.json(response).send()
})

// Not found 404 scenario
app.get('/searches/065a8640-effa-4b2e-a971-5d7b71265f77', (req, res) => {
    const response = {
        "errors": [
            {
                "code": "NOT_FOUND",
                "message": "No search found"
            }
        ]
    }

    res.json(response, 404).send()
})
app.get('/search-results', (req, res) => {
    const response = {
        "hasAlternativeOriginOffers": false,
        "isDone": false,
        "offers": [
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "001",
                "best": true,
                "chargeableWeight": 34.0,
                "createdAt": "1625776458255678",
                "dropoffLocation": {
                    "city": "Frankfurt",
                    "company_name": "",
                    "country": "Germany",
                    "po_info": "60549",
                    "street": "Cargo City Sud"
                },
                "earliestAvailabilityTime": "2021-07-16T18:05:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T10:30:00+02:00",
                        "departureTime": "2021-07-16T06:30:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "7879",
                        "arrivalTime": "2021-07-16T14:05:00-05:00",
                        "departureTime": "2021-07-16T10:30:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "AA0071",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T18:05:00-05:00",
                        "departureTime": "2021-07-16T14:05:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "bb999b11-fba5-4dc0-96c3-326c640f7a2b",
                "latestAcceptanceTime": "2021-07-16T06:30:00+02:00",
                "legalEntity": "American Airlines, Inc.",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "4.90",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "166.60",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "airfreight_fee",
                        "kiloPrice": {
                            "amount": "0.35",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "12.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "city": "DFW Airport",
                    "company_name": "",
                    "country": "USA",
                    "po_info": "75261",
                    "street": "1816 Airport North Service Road"
                },
                "priceType": "PRICE_TYPE_SRS",
                "product": {
                    "carrier": "American Airlines",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                    "product": "ExpediteFS"
                },
                "provider": "AIRLINE_PROVIDER_AA",
                "rank": {
                    "best": 1,
                    "cheapest": 2,
                    "earliest": 2
                },
                "ranks": [
                    {
                        "rank": 1,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 2,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 2,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "178.60",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "5.25",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "777",
                "chargeableWeight": 34.0,
                "cheapest": true,
                "createdAt": "1625776445228404",
                "dropoffLocation": {
                    "adr_building": "Temporary building",
                    "adr_po_code_city": "Temporary City",
                    "adr_street_number": "Temporary st. number",
                    "code": "",
                    "country": "",
                    "general_email": "",
                    "general_phone": "",
                    "handling_email": "",
                    "handling_phone": ""
                },
                "earliestAvailabilityTime": "2021-07-18T02:00:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T00:00:00+02:00",
                        "departureTime": "2021-07-17T20:00:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "CO 777",
                        "arrivalTime": "2021-07-17T22:00:00-05:00",
                        "departureTime": "2021-07-18T00:00:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "CO1234",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T02:00:00-05:00",
                        "departureTime": "2021-07-17T22:00:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "59f4ae6f-2308-41b3-aa98-c3be1f098686",
                "latestAcceptanceTime": "2021-07-17T20:00:00+02:00",
                "legalEntity": "cargo.one Airways Testing Airline",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "1.20",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "123.45",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "adr_building": "Temporary building",
                    "adr_po_code_city": "Temporary City",
                    "adr_street_number": "Temporary st. number",
                    "code": "",
                    "country": "",
                    "general_email": "",
                    "general_phone": "",
                    "handling_email": "",
                    "handling_phone": ""
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "cargo.one Airways",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/Product+Logo+-+cargo.one.png",
                    "product": "C1 General"
                },
                "provider": "AIRLINE_PROVIDER_COA",
                "rank": {
                    "best": 2,
                    "cheapest": 1,
                    "earliest": 11
                },
                "ranks": [
                    {
                        "rank": 2,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 1,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 11,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "123.45",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "1.20",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "001",
                "chargeableWeight": 34.0,
                "createdAt": "1625776458255678",
                "dropoffLocation": {
                    "city": "Frankfurt",
                    "company_name": "",
                    "country": "Germany",
                    "po_info": "60549",
                    "street": "Cargo City Sud"
                },
                "earliestAvailabilityTime": "2021-07-17T18:05:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T10:30:00+02:00",
                        "departureTime": "2021-07-17T06:30:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "7879",
                        "arrivalTime": "2021-07-17T14:05:00-05:00",
                        "departureTime": "2021-07-17T10:30:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "AA0071",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T18:05:00-05:00",
                        "departureTime": "2021-07-17T14:05:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "8cdc8471-b210-4c07-889b-7c7463abc2ff",
                "latestAcceptanceTime": "2021-07-17T06:30:00+02:00",
                "legalEntity": "American Airlines, Inc.",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "4.90",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "166.60",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "airfreight_fee",
                        "kiloPrice": {
                            "amount": "0.35",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "12.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "city": "DFW Airport",
                    "company_name": "",
                    "country": "USA",
                    "po_info": "75261",
                    "street": "1816 Airport North Service Road"
                },
                "priceType": "PRICE_TYPE_SRS",
                "product": {
                    "carrier": "American Airlines",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                    "product": "ExpediteFS"
                },
                "provider": "AIRLINE_PROVIDER_AA",
                "rank": {
                    "best": 3,
                    "cheapest": 3,
                    "earliest": 9
                },
                "ranks": [
                    {
                        "rank": 3,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 3,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 9,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "178.60",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "5.25",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "001",
                "chargeableWeight": 34.0,
                "createdAt": "1625776458255678",
                "dropoffLocation": {
                    "city": "Frankfurt",
                    "company_name": "",
                    "country": "Germany",
                    "po_info": "60549",
                    "street": "Cargo City Sud"
                },
                "earliestAvailabilityTime": "2021-07-18T18:05:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T10:30:00+02:00",
                        "departureTime": "2021-07-18T06:30:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "7879",
                        "arrivalTime": "2021-07-18T14:05:00-05:00",
                        "departureTime": "2021-07-18T10:30:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "AA0071",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T18:05:00-05:00",
                        "departureTime": "2021-07-18T14:05:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "a13a7556-350c-40d5-9508-6fcba9f48710",
                "latestAcceptanceTime": "2021-07-18T06:30:00+02:00",
                "legalEntity": "American Airlines, Inc.",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "4.90",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "166.60",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "airfreight_fee",
                        "kiloPrice": {
                            "amount": "0.35",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "12.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "city": "DFW Airport",
                    "company_name": "",
                    "country": "USA",
                    "po_info": "75261",
                    "street": "1816 Airport North Service Road"
                },
                "priceType": "PRICE_TYPE_SRS",
                "product": {
                    "carrier": "American Airlines",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                    "product": "ExpediteFS"
                },
                "provider": "AIRLINE_PROVIDER_AA",
                "rank": {
                    "best": 4,
                    "cheapest": 4,
                    "earliest": 16
                },
                "ranks": [
                    {
                        "rank": 4,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 4,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 16,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "178.60",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "5.25",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "001",
                "chargeableWeight": 34.0,
                "createdAt": "1625776458255678",
                "dropoffLocation": {
                    "city": "Frankfurt",
                    "company_name": "",
                    "country": "Germany",
                    "po_info": "60549",
                    "street": "Cargo City Sud"
                },
                "earliestAvailabilityTime": "2021-07-17T16:35:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T21:15:00+02:00",
                        "departureTime": "2021-07-16T17:15:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "319S",
                        "arrivalTime": "2021-07-16T22:30:00+02:00",
                        "departureTime": "2021-07-16T21:15:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "LH1002",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T09:35:00+02:00",
                        "departureTime": "2021-07-16T22:30:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "HANDLING",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "7879",
                        "arrivalTime": "2021-07-17T12:35:00-05:00",
                        "departureTime": "2021-07-17T09:35:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "AA0221",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T16:35:00-05:00",
                        "departureTime": "2021-07-17T12:35:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "e55067e0-b676-4610-953b-280dd2481caa",
                "latestAcceptanceTime": "2021-07-16T17:15:00+02:00",
                "legalEntity": "American Airlines, Inc.",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "4.94",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "168.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "airfreight_fee",
                        "kiloPrice": {
                            "amount": "0.35",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "12.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "city": "DFW Airport",
                    "company_name": "",
                    "country": "USA",
                    "po_info": "75261",
                    "street": "1816 Airport North Service Road"
                },
                "priceType": "PRICE_TYPE_SRS",
                "product": {
                    "carrier": "American Airlines",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                    "product": "ExpediteFS"
                },
                "provider": "AIRLINE_PROVIDER_AA",
                "rank": {
                    "best": 5,
                    "cheapest": 7,
                    "earliest": 6
                },
                "ranks": [
                    {
                        "rank": 5,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 7,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 6,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "180.00",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "5.29",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "001",
                "chargeableWeight": 34.0,
                "createdAt": "1625776458255678",
                "dropoffLocation": {
                    "city": "Frankfurt",
                    "company_name": "",
                    "country": "Germany",
                    "po_info": "60549",
                    "street": "Cargo City Sud"
                },
                "earliestAvailabilityTime": "2021-07-17T16:35:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T14:45:00+02:00",
                        "departureTime": "2021-07-16T10:45:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "RFS",
                        "arrivalTime": "2021-07-16T23:45:00+02:00",
                        "departureTime": "2021-07-16T14:45:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "LH7700S",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T09:35:00+02:00",
                        "departureTime": "2021-07-16T23:45:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "HANDLING",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "7879",
                        "arrivalTime": "2021-07-17T12:35:00-05:00",
                        "departureTime": "2021-07-17T09:35:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "AA0221",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T16:35:00-05:00",
                        "departureTime": "2021-07-17T12:35:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "cc7c8d01-157f-474c-8830-afb79bba80f4",
                "latestAcceptanceTime": "2021-07-16T10:45:00+02:00",
                "legalEntity": "American Airlines, Inc.",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "4.94",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "168.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "airfreight_fee",
                        "kiloPrice": {
                            "amount": "0.35",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "12.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "city": "DFW Airport",
                    "company_name": "",
                    "country": "USA",
                    "po_info": "75261",
                    "street": "1816 Airport North Service Road"
                },
                "priceType": "PRICE_TYPE_SRS",
                "product": {
                    "carrier": "American Airlines",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                    "product": "ExpediteFS"
                },
                "provider": "AIRLINE_PROVIDER_AA",
                "rank": {
                    "best": 6,
                    "cheapest": 8,
                    "earliest": 7
                },
                "ranks": [
                    {
                        "rank": 6,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 8,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 7,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "180.00",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "5.29",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "777",
                "chargeableWeight": 34.0,
                "createdAt": "1625776445228404",
                "dropoffLocation": {
                    "adr_building": "Temporary building",
                    "adr_po_code_city": "Temporary City",
                    "adr_street_number": "Temporary st. number",
                    "code": "",
                    "country": "",
                    "general_email": "",
                    "general_phone": "",
                    "handling_email": "",
                    "handling_phone": ""
                },
                "earliestAvailabilityTime": "2021-07-19T02:00:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-19T00:00:00+02:00",
                        "departureTime": "2021-07-18T20:00:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "CO 777",
                        "arrivalTime": "2021-07-18T22:00:00-05:00",
                        "departureTime": "2021-07-19T00:00:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "CO1234",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-19T02:00:00-05:00",
                        "departureTime": "2021-07-18T22:00:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "f7ecd496-70fc-4dc6-a721-454027f7a4ca",
                "latestAcceptanceTime": "2021-07-18T20:00:00+02:00",
                "legalEntity": "cargo.one Airways Testing Airline",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "2.40",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "234.56",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.03",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "adr_building": "Temporary building",
                    "adr_po_code_city": "Temporary City",
                    "adr_street_number": "Temporary st. number",
                    "code": "",
                    "country": "",
                    "general_email": "",
                    "general_phone": "",
                    "handling_email": "",
                    "handling_phone": ""
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "cargo.one Airways",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/Product+Logo+-+cargo.one.png",
                    "product": "C1 General"
                },
                "provider": "AIRLINE_PROVIDER_COA",
                "rank": {
                    "best": 7,
                    "cheapest": 12,
                    "earliest": 18
                },
                "ranks": [
                    {
                        "rank": 7,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 12,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 18,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "235.56",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "2.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "001",
                "chargeableWeight": 34.0,
                "createdAt": "1625776458255678",
                "dropoffLocation": {
                    "city": "Frankfurt",
                    "company_name": "",
                    "country": "Germany",
                    "po_info": "60549",
                    "street": "Cargo City Sud"
                },
                "earliestAvailabilityTime": "2021-07-18T16:35:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T21:15:00+02:00",
                        "departureTime": "2021-07-17T17:15:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "319S",
                        "arrivalTime": "2021-07-17T22:30:00+02:00",
                        "departureTime": "2021-07-17T21:15:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "LH1002",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T09:35:00+02:00",
                        "departureTime": "2021-07-17T22:30:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "HANDLING",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "7879",
                        "arrivalTime": "2021-07-18T12:35:00-05:00",
                        "departureTime": "2021-07-18T09:35:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "AA0221",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T16:35:00-05:00",
                        "departureTime": "2021-07-18T12:35:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "bcaae29c-b900-4652-90c4-c929c147ba71",
                "latestAcceptanceTime": "2021-07-17T17:15:00+02:00",
                "legalEntity": "American Airlines, Inc.",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "4.94",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "168.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "airfreight_fee",
                        "kiloPrice": {
                            "amount": "0.35",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "12.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "city": "DFW Airport",
                    "company_name": "",
                    "country": "USA",
                    "po_info": "75261",
                    "street": "1816 Airport North Service Road"
                },
                "priceType": "PRICE_TYPE_SRS",
                "product": {
                    "carrier": "American Airlines",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                    "product": "ExpediteFS"
                },
                "provider": "AIRLINE_PROVIDER_AA",
                "rank": {
                    "best": 8,
                    "cheapest": 9,
                    "earliest": 14
                },
                "ranks": [
                    {
                        "rank": 8,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 9,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 14,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "180.00",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "5.29",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "001",
                "chargeableWeight": 34.0,
                "createdAt": "1625776458255678",
                "dropoffLocation": {
                    "city": "Frankfurt",
                    "company_name": "",
                    "country": "Germany",
                    "po_info": "60549",
                    "street": "Cargo City Sud"
                },
                "earliestAvailabilityTime": "2021-07-18T16:35:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T20:30:00+02:00",
                        "departureTime": "2021-07-17T16:30:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "RFS",
                        "arrivalTime": "2021-07-18T04:30:00+02:00",
                        "departureTime": "2021-07-17T20:30:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "LH7702S",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T09:35:00+02:00",
                        "departureTime": "2021-07-18T04:30:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "HANDLING",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "7879",
                        "arrivalTime": "2021-07-18T12:35:00-05:00",
                        "departureTime": "2021-07-18T09:35:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "AA0221",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T16:35:00-05:00",
                        "departureTime": "2021-07-18T12:35:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "1b019a48-eb5e-4b4d-85be-8efda5bee559",
                "latestAcceptanceTime": "2021-07-17T16:30:00+02:00",
                "legalEntity": "American Airlines, Inc.",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "4.94",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "168.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "airfreight_fee",
                        "kiloPrice": {
                            "amount": "0.35",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "12.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "city": "DFW Airport",
                    "company_name": "",
                    "country": "USA",
                    "po_info": "75261",
                    "street": "1816 Airport North Service Road"
                },
                "priceType": "PRICE_TYPE_SRS",
                "product": {
                    "carrier": "American Airlines",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                    "product": "ExpediteFS"
                },
                "provider": "AIRLINE_PROVIDER_AA",
                "rank": {
                    "best": 9,
                    "cheapest": 10,
                    "earliest": 15
                },
                "ranks": [
                    {
                        "rank": 9,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 10,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 15,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "180.00",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "5.29",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "001",
                "chargeableWeight": 34.0,
                "createdAt": "1625776458255678",
                "dropoffLocation": {
                    "city": "Frankfurt",
                    "company_name": "",
                    "country": "Germany",
                    "po_info": "60549",
                    "street": "Cargo City Sud"
                },
                "earliestAvailabilityTime": "2021-07-18T16:35:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T18:00:00+02:00",
                        "departureTime": "2021-07-17T14:00:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "RFS",
                        "arrivalTime": "2021-07-18T03:00:00+02:00",
                        "departureTime": "2021-07-17T18:00:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "AA7073",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T09:35:00+02:00",
                        "departureTime": "2021-07-18T03:00:00+02:00",
                        "destination": "AMS",
                        "flightNumber": "HANDLING",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "7879",
                        "arrivalTime": "2021-07-18T12:35:00-05:00",
                        "departureTime": "2021-07-18T09:35:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "AA0221",
                        "origin": "AMS"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T16:35:00-05:00",
                        "departureTime": "2021-07-18T12:35:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "57818108-1f07-4a9d-9da4-0c3e97ef87d7",
                "latestAcceptanceTime": "2021-07-17T14:00:00+02:00",
                "legalEntity": "American Airlines, Inc.",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "4.90",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "166.60",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "airfreight_fee",
                        "kiloPrice": {
                            "amount": "0.35",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "12.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "city": "DFW Airport",
                    "company_name": "",
                    "country": "USA",
                    "po_info": "75261",
                    "street": "1816 Airport North Service Road"
                },
                "priceType": "PRICE_TYPE_SRS",
                "product": {
                    "carrier": "American Airlines",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                    "product": "ExpediteFS"
                },
                "provider": "AIRLINE_PROVIDER_AA",
                "rank": {
                    "best": 10,
                    "cheapest": 5,
                    "earliest": 13
                },
                "ranks": [
                    {
                        "rank": 10,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 5,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 13,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "178.60",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "5.25",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "001",
                "chargeableWeight": 34.0,
                "createdAt": "1625776458255678",
                "dropoffLocation": {
                    "city": "Frankfurt",
                    "company_name": "",
                    "country": "Germany",
                    "po_info": "60549",
                    "street": "Cargo City Sud"
                },
                "earliestAvailabilityTime": "2021-07-18T18:50:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T17:00:00+02:00",
                        "departureTime": "2021-07-17T13:00:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "RFS",
                        "arrivalTime": "2021-07-18T05:00:00+02:00",
                        "departureTime": "2021-07-17T17:00:00+02:00",
                        "destination": "CDG",
                        "flightNumber": "AA7058",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T11:25:00+02:00",
                        "departureTime": "2021-07-18T05:00:00+02:00",
                        "destination": "CDG",
                        "flightNumber": "HANDLING",
                        "origin": "CDG"
                    },
                    {
                        "aircraftType": "7878",
                        "arrivalTime": "2021-07-18T14:50:00-05:00",
                        "departureTime": "2021-07-18T11:25:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "AA0049",
                        "origin": "CDG"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T18:50:00-05:00",
                        "departureTime": "2021-07-18T14:50:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "19c631e0-c59e-4e07-841e-fa39aa231b41",
                "latestAcceptanceTime": "2021-07-17T13:00:00+02:00",
                "legalEntity": "American Airlines, Inc.",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "4.90",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "166.60",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "airfreight_fee",
                        "kiloPrice": {
                            "amount": "0.35",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "12.00",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "city": "DFW Airport",
                    "company_name": "",
                    "country": "USA",
                    "po_info": "75261",
                    "street": "1816 Airport North Service Road"
                },
                "priceType": "PRICE_TYPE_SRS",
                "product": {
                    "carrier": "American Airlines",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                    "product": "ExpediteFS"
                },
                "provider": "AIRLINE_PROVIDER_AA",
                "rank": {
                    "best": 11,
                    "cheapest": 6,
                    "earliest": 17
                },
                "ranks": [
                    {
                        "rank": 11,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 6,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 17,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "178.60",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "5.25",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAP"
                ],
                "additionalData": "{}",
                "adjustments": {},
                "awbPrefix": "777",
                "chargeableWeight": 34.0,
                "createdAt": "1625776445228404",
                "dropoffLocation": {
                    "adr_building": "Temporary building",
                    "adr_po_code_city": "Temporary City",
                    "adr_street_number": "Temporary st. number",
                    "code": "",
                    "country": "",
                    "general_email": "",
                    "general_phone": "",
                    "handling_email": "",
                    "handling_phone": ""
                },
                "earliestAvailabilityTime": "2021-07-18T05:00:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T00:00:00+02:00",
                        "departureTime": "2021-07-16T20:00:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "RFS",
                        "arrivalTime": "2021-07-17T20:00:00+02:00",
                        "departureTime": "2021-07-17T00:00:00+02:00",
                        "destination": "MUC",
                        "flightNumber": "CO4567",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T04:00:00+02:00",
                        "departureTime": "2021-07-17T20:00:00+02:00",
                        "destination": "MUC",
                        "flightNumber": "HANDLING",
                        "origin": "MUC"
                    },
                    {
                        "aircraftType": "CO 777",
                        "arrivalTime": "2021-07-18T01:00:00-05:00",
                        "departureTime": "2021-07-18T04:00:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "CO8910",
                        "origin": "MUC"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T05:00:00-05:00",
                        "departureTime": "2021-07-18T01:00:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "3298c870-b9b0-4555-af75-f2b4f36dfbdd",
                "latestAcceptanceTime": "2021-07-16T20:00:00+02:00",
                "legalEntity": "cargo.one Airways Testing Airline",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "2.40",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "234.56",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "adr_building": "Temporary building",
                    "adr_po_code_city": "Temporary City",
                    "adr_street_number": "Temporary st. number",
                    "code": "",
                    "country": "",
                    "general_email": "",
                    "general_phone": "",
                    "handling_email": "",
                    "handling_phone": ""
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "cargo.one Airways",
                    "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/Product+Logo+-+cargo.one.png",
                    "product": "C1 General"
                },
                "provider": "AIRLINE_PROVIDER_COA",
                "rank": {
                    "best": 12,
                    "cheapest": 11,
                    "earliest": 12
                },
                "ranks": [
                    {
                        "rank": 12,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 11,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 12,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "234.56",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "2.40",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"342231661-5\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-23T20:00:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-21T13:40:00+02:00",
                        "departureTime": "2021-07-21T11:40:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "359",
                        "arrivalTime": "2021-07-21T15:55:00-06:00",
                        "departureTime": "2021-07-21T13:40:00+02:00",
                        "destination": "DEN",
                        "flightNumber": "LH446",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-22T18:35:00-06:00",
                        "departureTime": "2021-07-21T15:55:00-06:00",
                        "destination": "DEN",
                        "flightNumber": "HANDLING",
                        "origin": "DEN"
                    },
                    {
                        "aircraftType": "RFS",
                        "arrivalTime": "2021-07-23T17:00:00-05:00",
                        "departureTime": "2021-07-22T18:35:00-06:00",
                        "destination": "DFW",
                        "flightNumber": "LH6853S",
                        "origin": "DEN"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-23T20:00:00-05:00",
                        "departureTime": "2021-07-23T17:00:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "1ec8fd7e-dbeb-4d16-ba95-3c1e99a4e915",
                "latestAcceptanceTime": "2021-07-21T11:40:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "10.23",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "460.35",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 13,
                    "cheapest": 13,
                    "earliest": 31
                },
                "ranks": [
                    {
                        "rank": 13,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 13,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 31,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "491.85",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "10.93",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"705055756-1\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliest": true,
                "earliestAvailabilityTime": "2021-07-16T17:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T10:10:00+02:00",
                        "departureTime": "2021-07-16T08:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-16T14:15:00-05:00",
                        "departureTime": "2021-07-16T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T17:15:00-05:00",
                        "departureTime": "2021-07-16T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "16bf7188-6a97-4956-a9f3-891e6da14d08",
                "latestAcceptanceTime": "2021-07-16T08:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 14,
                    "cheapest": 14,
                    "earliest": 1
                },
                "ranks": [
                    {
                        "rank": 14,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 14,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 1,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"670366567-3\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-17T17:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T10:10:00+02:00",
                        "departureTime": "2021-07-17T08:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-17T14:15:00-05:00",
                        "departureTime": "2021-07-17T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T17:15:00-05:00",
                        "departureTime": "2021-07-17T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "242e181d-8e24-49a4-9d01-24e7ac5614a3",
                "latestAcceptanceTime": "2021-07-17T08:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 15,
                    "cheapest": 16,
                    "earliest": 8
                },
                "ranks": [
                    {
                        "rank": 15,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 16,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 8,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"393253862-1\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-16T19:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T10:10:00+02:00",
                        "departureTime": "2021-07-16T04:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-16T14:15:00-05:00",
                        "departureTime": "2021-07-16T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T19:15:00-05:00",
                        "departureTime": "2021-07-16T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "c0220596-9965-4f5e-adb5-7a3cb9b2e7c0",
                "latestAcceptanceTime": "2021-07-16T04:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 16,
                    "cheapest": 15,
                    "earliest": 3
                },
                "ranks": [
                    {
                        "rank": 16,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 15,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 3,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"363367532-3\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-17T19:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T10:10:00+02:00",
                        "departureTime": "2021-07-17T04:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-17T14:15:00-05:00",
                        "departureTime": "2021-07-17T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T19:15:00-05:00",
                        "departureTime": "2021-07-17T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "b60f39e8-a482-431e-9cbe-804156940b7f",
                "latestAcceptanceTime": "2021-07-17T04:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 17,
                    "cheapest": 17,
                    "earliest": 10
                },
                "ranks": [
                    {
                        "rank": 17,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 17,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 10,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"282070363-2\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-17T10:35:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T17:35:00+02:00",
                        "departureTime": "2021-07-16T15:35:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "77X",
                        "arrivalTime": "2021-07-17T03:25:00-05:00",
                        "departureTime": "2021-07-16T17:35:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH8220",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T10:35:00-05:00",
                        "departureTime": "2021-07-17T03:25:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": true,
                "id": "fb3971df-b1d2-43bf-af04-57fded78b391",
                "latestAcceptanceTime": "2021-07-16T15:35:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "33.00",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1485.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 18,
                    "cheapest": 30,
                    "earliest": 4
                },
                "ranks": [
                    {
                        "rank": 18,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 30,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 4,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1516.50",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "33.70",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"705200660-10\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-19T17:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-19T10:10:00+02:00",
                        "departureTime": "2021-07-19T08:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-19T14:15:00-05:00",
                        "departureTime": "2021-07-19T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-19T17:15:00-05:00",
                        "departureTime": "2021-07-19T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "4a26a0da-1a60-4983-b1b4-bf88a35d2259",
                "latestAcceptanceTime": "2021-07-19T08:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 19,
                    "cheapest": 18,
                    "earliest": 21
                },
                "ranks": [
                    {
                        "rank": 19,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 18,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 21,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"456478652-2\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-17T13:41:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-16T17:35:00+02:00",
                        "departureTime": "2021-07-16T11:35:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "77X",
                        "arrivalTime": "2021-07-17T03:25:00-05:00",
                        "departureTime": "2021-07-16T17:35:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH8220",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-17T13:41:00-05:00",
                        "departureTime": "2021-07-17T03:25:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": true,
                "id": "cb09c9e6-d30b-4e51-a144-445c0b88ae6d",
                "latestAcceptanceTime": "2021-07-16T11:35:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "33.00",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1485.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 20,
                    "cheapest": 31,
                    "earliest": 5
                },
                "ranks": [
                    {
                        "rank": 20,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 31,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 5,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1516.50",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "33.70",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"722012337-15\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-20T17:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-20T10:10:00+02:00",
                        "departureTime": "2021-07-20T08:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-20T14:15:00-05:00",
                        "departureTime": "2021-07-20T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-20T17:15:00-05:00",
                        "departureTime": "2021-07-20T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "c56c3ae4-8db3-4a43-8c24-92bc6f91e177",
                "latestAcceptanceTime": "2021-07-20T08:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 21,
                    "cheapest": 20,
                    "earliest": 23
                },
                "ranks": [
                    {
                        "rank": 21,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 20,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 23,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"075577394-10\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-19T19:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-19T10:10:00+02:00",
                        "departureTime": "2021-07-19T04:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-19T14:15:00-05:00",
                        "departureTime": "2021-07-19T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-19T19:15:00-05:00",
                        "departureTime": "2021-07-19T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "ac65406a-b9fc-4b49-90f0-07edba01f9e1",
                "latestAcceptanceTime": "2021-07-19T04:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 22,
                    "cheapest": 19,
                    "earliest": 22
                },
                "ranks": [
                    {
                        "rank": 22,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 19,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 22,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"053616221-7\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-19T10:35:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T17:40:00+02:00",
                        "departureTime": "2021-07-18T15:40:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "77X",
                        "arrivalTime": "2021-07-19T03:25:00-05:00",
                        "departureTime": "2021-07-18T17:40:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH8220",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-19T10:35:00-05:00",
                        "departureTime": "2021-07-19T03:25:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": true,
                "id": "6b1c8e06-c882-490a-ab36-7745ea72bbf3",
                "latestAcceptanceTime": "2021-07-18T15:40:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "33.00",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1485.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 23,
                    "cheapest": 32,
                    "earliest": 19
                },
                "ranks": [
                    {
                        "rank": 23,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 32,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 19,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1516.50",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "33.70",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"633750507-1\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-21T17:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-21T10:10:00+02:00",
                        "departureTime": "2021-07-21T08:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-21T14:15:00-05:00",
                        "departureTime": "2021-07-21T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-21T17:15:00-05:00",
                        "departureTime": "2021-07-21T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "8bdaebb5-95e2-450b-8348-b87a1de55666",
                "latestAcceptanceTime": "2021-07-21T08:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 24,
                    "cheapest": 22,
                    "earliest": 25
                },
                "ranks": [
                    {
                        "rank": 24,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 22,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 25,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"216755232-15\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-20T19:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-20T10:10:00+02:00",
                        "departureTime": "2021-07-20T04:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-20T14:15:00-05:00",
                        "departureTime": "2021-07-20T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-20T19:15:00-05:00",
                        "departureTime": "2021-07-20T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "aba36d90-dcd6-4a0e-822b-6ba1581877d5",
                "latestAcceptanceTime": "2021-07-20T04:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 25,
                    "cheapest": 21,
                    "earliest": 24
                },
                "ranks": [
                    {
                        "rank": 25,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 21,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 24,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"010367255-9\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442696306",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-19T13:41:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-18T17:40:00+02:00",
                        "departureTime": "2021-07-18T11:40:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "77X",
                        "arrivalTime": "2021-07-19T03:25:00-05:00",
                        "departureTime": "2021-07-18T17:40:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH8220",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-19T13:41:00-05:00",
                        "departureTime": "2021-07-19T03:25:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": true,
                "id": "73f2f7c3-a5b0-4691-9b5c-97940bad6ef9",
                "latestAcceptanceTime": "2021-07-18T11:40:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "33.00",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1485.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 26,
                    "cheapest": 33,
                    "earliest": 20
                },
                "ranks": [
                    {
                        "rank": 26,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 33,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 20,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1516.50",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "33.70",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"628532551-1\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-21T19:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-21T10:10:00+02:00",
                        "departureTime": "2021-07-21T04:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-21T14:15:00-05:00",
                        "departureTime": "2021-07-21T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-21T19:15:00-05:00",
                        "departureTime": "2021-07-21T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "eeeb5021-a80b-43a7-a8d2-f314af6d18e2",
                "latestAcceptanceTime": "2021-07-21T04:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 27,
                    "cheapest": 23,
                    "earliest": 26
                },
                "ranks": [
                    {
                        "rank": 27,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 23,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 26,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"525721072-4\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-23T17:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-23T10:10:00+02:00",
                        "departureTime": "2021-07-23T08:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-23T14:15:00-05:00",
                        "departureTime": "2021-07-23T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-23T17:15:00-05:00",
                        "departureTime": "2021-07-23T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "949ed4e5-09af-4018-9504-d9b3a273693a",
                "latestAcceptanceTime": "2021-07-23T08:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 28,
                    "cheapest": 24,
                    "earliest": 29
                },
                "ranks": [
                    {
                        "rank": 28,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 24,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 29,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"363770573-9\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-24T17:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-24T10:10:00+02:00",
                        "departureTime": "2021-07-24T08:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-24T14:15:00-05:00",
                        "departureTime": "2021-07-24T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-24T17:15:00-05:00",
                        "departureTime": "2021-07-24T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "e88c9b9f-f6a9-44c1-9b40-4f11a6c96925",
                "latestAcceptanceTime": "2021-07-24T08:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 29,
                    "cheapest": 26,
                    "earliest": 34
                },
                "ranks": [
                    {
                        "rank": 29,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 26,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 34,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"655222732-4\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-23T19:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-23T10:10:00+02:00",
                        "departureTime": "2021-07-23T04:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-23T14:15:00-05:00",
                        "departureTime": "2021-07-23T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-23T19:15:00-05:00",
                        "departureTime": "2021-07-23T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "301c8797-8deb-416a-b76d-00d860f06a52",
                "latestAcceptanceTime": "2021-07-23T04:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 30,
                    "cheapest": 25,
                    "earliest": 30
                },
                "ranks": [
                    {
                        "rank": 30,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 25,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 30,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"871347580-2\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-23T10:35:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-22T14:55:00+02:00",
                        "departureTime": "2021-07-22T12:55:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "77X",
                        "arrivalTime": "2021-07-22T21:30:00-05:00",
                        "departureTime": "2021-07-22T14:55:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH8200",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-23T10:35:00-05:00",
                        "departureTime": "2021-07-22T21:30:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": true,
                "id": "2974b7fd-f3d9-474b-a87d-a8d3a39dd103",
                "latestAcceptanceTime": "2021-07-22T12:55:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "32.14",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1446.30",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 31,
                    "cheapest": 28,
                    "earliest": 27
                },
                "ranks": [
                    {
                        "rank": 31,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 28,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 27,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1477.80",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "32.84",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"530552173-9\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-24T19:15:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-24T10:10:00+02:00",
                        "departureTime": "2021-07-24T04:10:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "333",
                        "arrivalTime": "2021-07-24T14:15:00-05:00",
                        "departureTime": "2021-07-24T10:10:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH438",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-24T19:15:00-05:00",
                        "departureTime": "2021-07-24T14:15:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": false,
                "id": "3e72a319-b7fd-4b5c-83bf-61870f75b45f",
                "latestAcceptanceTime": "2021-07-24T04:10:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "29.73",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1337.85",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 32,
                    "cheapest": 27,
                    "earliest": 35
                },
                "ranks": [
                    {
                        "rank": 32,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 27,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 35,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1369.35",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "30.43",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"376909349-3\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-23T13:41:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-22T14:55:00+02:00",
                        "departureTime": "2021-07-22T08:55:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "77X",
                        "arrivalTime": "2021-07-22T21:30:00-05:00",
                        "departureTime": "2021-07-22T14:55:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH8200",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-23T13:41:00-05:00",
                        "departureTime": "2021-07-22T21:30:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": true,
                "id": "80d7468a-e7c7-42b0-8f73-30009e26e37c",
                "latestAcceptanceTime": "2021-07-22T08:55:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "32.14",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1446.30",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 33,
                    "cheapest": 29,
                    "earliest": 28
                },
                "ranks": [
                    {
                        "rank": 33,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 29,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 28,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1477.80",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "32.84",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"605236113-6\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-24T10:35:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-23T17:35:00+02:00",
                        "departureTime": "2021-07-23T15:35:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "77X",
                        "arrivalTime": "2021-07-24T03:25:00-05:00",
                        "departureTime": "2021-07-23T17:35:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH8220",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-24T10:35:00-05:00",
                        "departureTime": "2021-07-24T03:25:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": true,
                "id": "918e082d-76bf-4282-a16c-49d84eb6182e",
                "latestAcceptanceTime": "2021-07-23T15:35:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "33.00",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1485.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Flash"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 34,
                    "cheapest": 34,
                    "earliest": 32
                },
                "ranks": [
                    {
                        "rank": 34,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 34,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 32,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1516.50",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "33.70",
                    "currency": "EUR"
                }
            },
            {
                "acceptedAwbTypes": [
                    "PAPER",
                    "EAW",
                    "EAP"
                ],
                "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"075353233-8\", \"rateType\": \"QTE\"}",
                "adjustments": {},
                "awbPrefix": "020",
                "chargeableWeight": 45.0,
                "createdAt": "1625776442648751",
                "dropoffLocation": {
                    "airport": "FRANKFURT INTERNATIONAL APT",
                    "building": "Building 420",
                    "country": "DE",
                    "po_info": "60456 Frankfurt am Main",
                    "street": "Gate 25"
                },
                "earliestAvailabilityTime": "2021-07-24T13:41:00-05:00",
                "flightSegments": [
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-23T17:35:00+02:00",
                        "departureTime": "2021-07-23T11:35:00+02:00",
                        "destination": "FRA",
                        "flightNumber": "HANDLING",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "77X",
                        "arrivalTime": "2021-07-24T03:25:00-05:00",
                        "departureTime": "2021-07-23T17:35:00+02:00",
                        "destination": "DFW",
                        "flightNumber": "LH8220",
                        "origin": "FRA"
                    },
                    {
                        "aircraftType": "HANDLING",
                        "arrivalTime": "2021-07-24T13:41:00-05:00",
                        "departureTime": "2021-07-24T03:25:00-05:00",
                        "destination": "DFW",
                        "flightNumber": "HANDLING",
                        "origin": "DFW"
                    }
                ],
                "hasAlternativeOrigin": false,
                "hasCargoOnlySegments": true,
                "id": "16dd504a-9c2b-4365-b83a-c8379012e67a",
                "latestAcceptanceTime": "2021-07-23T11:35:00+02:00",
                "legalEntity": "Lufthansa Cargo AG",
                "offerItems": [
                    {
                        "description": "route",
                        "kiloPrice": {
                            "amount": "33.00",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "1485.00",
                            "currency": "EUR"
                        }
                    },
                    {
                        "description": "surcharges",
                        "kiloPrice": {
                            "amount": "0.70",
                            "currency": "EUR"
                        },
                        "price": {
                            "amount": "31.50",
                            "currency": "EUR"
                        }
                    }
                ],
                "pickupLocation": {
                    "airport": "DALLAS/FORT WORTH INTL APT",
                    "building": "Suite 400",
                    "country": "US",
                    "po_info": "75261 Dallas",
                    "street": "23rd Street 1639"
                },
                "priceType": "PRICE_TYPE_DYNAMIC",
                "product": {
                    "carrier": "Lufthansa",
                    "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                    "product": "td.Pro"
                },
                "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                "rank": {
                    "best": 35,
                    "cheapest": 35,
                    "earliest": 33
                },
                "ranks": [
                    {
                        "rank": 35,
                        "type": "OFFER_RANK_TYPE_BEST"
                    },
                    {
                        "rank": 35,
                        "type": "OFFER_RANK_TYPE_CHEAPEST"
                    },
                    {
                        "rank": 33,
                        "type": "OFFER_RANK_TYPE_EARLIEST"
                    }
                ],
                "shipment": {
                    "createdAt": "2021-07-08T20:33:52+00:00",
                    "destination": "DFW",
                    "destinationCountry": "US",
                    "dropoffTime": "2021-07-16T00:00:00+02:00",
                    "goodsType": "general",
                    "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                    "isConsolidated": false,
                    "items": [
                        {
                            "height": 20,
                            "isTotalWeight": false,
                            "length": 100,
                            "quantity": 2,
                            "stackable": false,
                            "turnable": true,
                            "weight": 12.0,
                            "width": 30
                        },
                        {
                            "height": 11,
                            "isTotalWeight": true,
                            "length": 25,
                            "quantity": 15,
                            "stackable": true,
                            "turnable": false,
                            "weight": 10.0,
                            "width": 20
                        }
                    ],
                    "origin": "FRA",
                    "originCountry": "DE",
                    "pickupTime": "2021-07-24T23:59:59-05:00",
                    "productService": "PRODUCT_SERVICE_GENERAL",
                    "product_service_properties": {
                        "product_service_properties": {
                            "general_properties": {
                                "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                            }
                        }
                    },
                    "screening": "screened",
                    "screeningStatus": "SCREENED",
                    "shipperStatus": "known",
                    "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                    "versionId": 1
                },
                "totalPrice": {
                    "amount": "1516.50",
                    "currency": "EUR"
                },
                "totalPricePerKilo": {
                    "amount": "33.70",
                    "currency": "EUR"
                }
            }
        ],
        "searchMetadata": {
            "airlineStatuses": [
                {
                    "done": true,
                    "errors": [
                        {
                            "code": "AIRLINE_API_ERROR",
                            "field": "",
                            "message": "Shipment 3a50552c-7c43-4988-91d9-2d824305a128: API error on FetchOffers - [{'errorCode': 'EBL_AVL_005', 'message': 'No flights found for the search criteria'}]"
                        }
                    ],
                    "numberOfResults": 9,
                    "provider": "AIRLINE_PROVIDER_AA"
                },
                {
                    "done": true,
                    "errors": [
                        {
                            "code": "AIRLINE_API_ERROR",
                            "field": "",
                            "message": "API error"
                        }
                    ],
                    "numberOfResults": 0,
                    "provider": "AIRLINE_PROVIDER_ETIHAD"
                },
                {
                    "done": true,
                    "errors": [],
                    "numberOfResults": 3,
                    "provider": "AIRLINE_PROVIDER_COA"
                },
                {
                    "done": true,
                    "errors": [],
                    "numberOfResults": 23,
                    "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2"
                },
                {
                    "done": true,
                    "errors": [
                        {
                            "code": "VALIDATION_ERROR_DESTINATION_NOT_SERVED",
                            "field": "",
                            "message": "The destination DFW is not served"
                        }
                    ],
                    "numberOfResults": 0,
                    "provider": "AIRLINE_PROVIDER_ECS"
                },
                {
                    "done": true,
                    "errors": [
                        {
                            "code": "VALIDATION_ERROR_DESTINATION_NOT_SERVED",
                            "field": "",
                            "message": "airport is currently not supported as a destination"
                        }
                    ],
                    "numberOfResults": 0,
                    "provider": "AIRLINE_PROVIDER_NCA"
                },
                {
                    "done": false,
                    "errors": [],
                    "numberOfResults": 0,
                    "provider": "AIRLINE_PROVIDER_VOLGA_DNEPR"
                }
            ]
        }
    }


    res.json(response).send()
})

app.get('/get-dynamic-price-indicator', (req, res) => {
    const response = {
        "isDone": false,
        "offers": {
            "16-07-2021": {
                "highestRankedOffer": {
                    "acceptedAwbTypes": [
                        "PAPER",
                        "EAW",
                        "EAP"
                    ],
                    "additionalData": "{}",
                    "adjustments": {},
                    "awbPrefix": "001",
                    "chargeableWeight": 34.0,
                    "createdAt": "1625776458255678",
                    "dropoffLocation": {
                        "city": "Frankfurt",
                        "company_name": "",
                        "country": "Germany",
                        "po_info": "60549",
                        "street": "Cargo City Sud"
                    },
                    "earliestAvailabilityTime": "2021-07-16T18:05:00-05:00",
                    "flightSegments": [
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-16T10:30:00+02:00",
                            "departureTime": "2021-07-16T06:30:00+02:00",
                            "destination": "FRA",
                            "flightNumber": "HANDLING",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "7879",
                            "arrivalTime": "2021-07-16T14:05:00-05:00",
                            "departureTime": "2021-07-16T10:30:00+02:00",
                            "destination": "DFW",
                            "flightNumber": "AA0071",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-16T18:05:00-05:00",
                            "departureTime": "2021-07-16T14:05:00-05:00",
                            "destination": "DFW",
                            "flightNumber": "HANDLING",
                            "origin": "DFW"
                        }
                    ],
                    "hasAlternativeOrigin": false,
                    "hasCargoOnlySegments": false,
                    "id": "bb999b11-fba5-4dc0-96c3-326c640f7a2b",
                    "latestAcceptanceTime": "2021-07-16T06:30:00+02:00",
                    "legalEntity": "American Airlines, Inc.",
                    "offerItems": [
                        {
                            "description": "route",
                            "kiloPrice": {
                                "amount": "4.90",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "166.60",
                                "currency": "EUR"
                            }
                        },
                        {
                            "description": "airfreight_fee",
                            "kiloPrice": {
                                "amount": "0.35",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "12.00",
                                "currency": "EUR"
                            }
                        }
                    ],
                    "pickupLocation": {
                        "city": "DFW Airport",
                        "company_name": "",
                        "country": "USA",
                        "po_info": "75261",
                        "street": "1816 Airport North Service Road"
                    },
                    "priceType": "PRICE_TYPE_SRS",
                    "product": {
                        "carrier": "American Airlines",
                        "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                        "product": "ExpediteFS"
                    },
                    "provider": "AIRLINE_PROVIDER_AA",
                    "ranks": [
                        {
                            "rank": 1,
                            "type": "OFFER_RANK_TYPE_BEST"
                        },
                        {
                            "rank": 2,
                            "type": "OFFER_RANK_TYPE_CHEAPEST"
                        },
                        {
                            "rank": 2,
                            "type": "OFFER_RANK_TYPE_EARLIEST"
                        }
                    ],
                    "shipment": {
                        "createdAt": "2021-07-08T20:33:52+00:00",
                        "destination": "DFW",
                        "destinationCountry": "US",
                        "dropoffTime": "2021-07-16T00:00:00+02:00",
                        "goodsType": "general",
                        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                        "isConsolidated": false,
                        "items": [
                            {
                                "height": 20,
                                "isTotalWeight": false,
                                "length": 100,
                                "quantity": 2,
                                "stackable": false,
                                "turnable": true,
                                "weight": 12.0,
                                "width": 30
                            },
                            {
                                "height": 11,
                                "isTotalWeight": true,
                                "length": 25,
                                "quantity": 15,
                                "stackable": true,
                                "turnable": false,
                                "weight": 10.0,
                                "width": 20
                            }
                        ],
                        "origin": "FRA",
                        "originCountry": "DE",
                        "pickupTime": "2021-07-24T23:59:59-05:00",
                        "productService": "PRODUCT_SERVICE_GENERAL",
                        "product_service_properties": {
                            "product_service_properties": {
                                "general_properties": {
                                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                }
                            }
                        },
                        "screening": "screened",
                        "screeningStatus": "SCREENED",
                        "shipperStatus": "known",
                        "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                        "versionId": 1
                    },
                    "totalPrice": {
                        "amount": "178.60",
                        "currency": "EUR"
                    },
                    "totalPricePerKilo": {
                        "amount": "5.25",
                        "currency": "EUR"
                    }
                },
                "offers": {
                    "AIRLINE_PROVIDER_AA": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{}",
                        "adjustments": {},
                        "awbPrefix": "001",
                        "chargeableWeight": 34.0,
                        "createdAt": "1625776458255678",
                        "dropoffLocation": {
                            "city": "Frankfurt",
                            "company_name": "",
                            "country": "Germany",
                            "po_info": "60549",
                            "street": "Cargo City Sud"
                        },
                        "earliestAvailabilityTime": "2021-07-16T18:05:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-16T10:30:00+02:00",
                                "departureTime": "2021-07-16T06:30:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "7879",
                                "arrivalTime": "2021-07-16T14:05:00-05:00",
                                "departureTime": "2021-07-16T10:30:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "AA0071",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-16T18:05:00-05:00",
                                "departureTime": "2021-07-16T14:05:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "bb999b11-fba5-4dc0-96c3-326c640f7a2b",
                        "latestAcceptanceTime": "2021-07-16T06:30:00+02:00",
                        "legalEntity": "American Airlines, Inc.",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "4.90",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "166.60",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "airfreight_fee",
                                "kiloPrice": {
                                    "amount": "0.35",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "12.00",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "city": "DFW Airport",
                            "company_name": "",
                            "country": "USA",
                            "po_info": "75261",
                            "street": "1816 Airport North Service Road"
                        },
                        "priceType": "PRICE_TYPE_SRS",
                        "product": {
                            "carrier": "American Airlines",
                            "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                            "product": "ExpediteFS"
                        },
                        "provider": "AIRLINE_PROVIDER_AA",
                        "ranks": [
                            {
                                "rank": 1,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 2,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 2,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "178.60",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "5.25",
                            "currency": "EUR"
                        }
                    },
                    "AIRLINE_PROVIDER_COA": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAP"
                        ],
                        "additionalData": "{}",
                        "adjustments": {},
                        "awbPrefix": "777",
                        "chargeableWeight": 34.0,
                        "createdAt": "1625776445228404",
                        "dropoffLocation": {
                            "adr_building": "Temporary building",
                            "adr_po_code_city": "Temporary City",
                            "adr_street_number": "Temporary st. number",
                            "code": "",
                            "country": "",
                            "general_email": "",
                            "general_phone": "",
                            "handling_email": "",
                            "handling_phone": ""
                        },
                        "earliestAvailabilityTime": "2021-07-18T05:00:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-17T00:00:00+02:00",
                                "departureTime": "2021-07-16T20:00:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "RFS",
                                "arrivalTime": "2021-07-17T20:00:00+02:00",
                                "departureTime": "2021-07-17T00:00:00+02:00",
                                "destination": "MUC",
                                "flightNumber": "CO4567",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-18T04:00:00+02:00",
                                "departureTime": "2021-07-17T20:00:00+02:00",
                                "destination": "MUC",
                                "flightNumber": "HANDLING",
                                "origin": "MUC"
                            },
                            {
                                "aircraftType": "CO 777",
                                "arrivalTime": "2021-07-18T01:00:00-05:00",
                                "departureTime": "2021-07-18T04:00:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "CO8910",
                                "origin": "MUC"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-18T05:00:00-05:00",
                                "departureTime": "2021-07-18T01:00:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "3298c870-b9b0-4555-af75-f2b4f36dfbdd",
                        "latestAcceptanceTime": "2021-07-16T20:00:00+02:00",
                        "legalEntity": "cargo.one Airways Testing Airline",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "2.40",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "234.56",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "adr_building": "Temporary building",
                            "adr_po_code_city": "Temporary City",
                            "adr_street_number": "Temporary st. number",
                            "code": "",
                            "country": "",
                            "general_email": "",
                            "general_phone": "",
                            "handling_email": "",
                            "handling_phone": ""
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "cargo.one Airways",
                            "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/Product+Logo+-+cargo.one.png",
                            "product": "C1 General"
                        },
                        "provider": "AIRLINE_PROVIDER_COA",
                        "ranks": [
                            {
                                "rank": 12,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 11,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 12,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "234.56",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "2.40",
                            "currency": "EUR"
                        }
                    },
                    "AIRLINE_PROVIDER_LUFTHANSA_V2": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"705055756-1\", \"rateType\": \"QTE\"}",
                        "adjustments": {},
                        "awbPrefix": "020",
                        "chargeableWeight": 45.0,
                        "createdAt": "1625776442696306",
                        "dropoffLocation": {
                            "airport": "FRANKFURT INTERNATIONAL APT",
                            "building": "Building 420",
                            "country": "DE",
                            "po_info": "60456 Frankfurt am Main",
                            "street": "Gate 25"
                        },
                        "earliestAvailabilityTime": "2021-07-16T17:15:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-16T10:10:00+02:00",
                                "departureTime": "2021-07-16T08:10:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "333",
                                "arrivalTime": "2021-07-16T14:15:00-05:00",
                                "departureTime": "2021-07-16T10:10:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "LH438",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-16T17:15:00-05:00",
                                "departureTime": "2021-07-16T14:15:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "16bf7188-6a97-4956-a9f3-891e6da14d08",
                        "latestAcceptanceTime": "2021-07-16T08:10:00+02:00",
                        "legalEntity": "Lufthansa Cargo AG",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "29.73",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "1337.85",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.70",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "31.50",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "airport": "DALLAS/FORT WORTH INTL APT",
                            "building": "Suite 400",
                            "country": "US",
                            "po_info": "75261 Dallas",
                            "street": "23rd Street 1639"
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "Lufthansa",
                            "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                            "product": "td.Flash"
                        },
                        "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                        "ranks": [
                            {
                                "rank": 14,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 14,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 1,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "1369.35",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "30.43",
                            "currency": "EUR"
                        }
                    }
                }
            },
            "17-07-2021": {
                "highestRankedOffer": {
                    "acceptedAwbTypes": [
                        "PAPER",
                        "EAP"
                    ],
                    "additionalData": "{}",
                    "adjustments": {},
                    "awbPrefix": "777",
                    "chargeableWeight": 34.0,
                    "createdAt": "1625776445228404",
                    "dropoffLocation": {
                        "adr_building": "Temporary building",
                        "adr_po_code_city": "Temporary City",
                        "adr_street_number": "Temporary st. number",
                        "code": "",
                        "country": "",
                        "general_email": "",
                        "general_phone": "",
                        "handling_email": "",
                        "handling_phone": ""
                    },
                    "earliestAvailabilityTime": "2021-07-18T02:00:00-05:00",
                    "flightSegments": [
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-18T00:00:00+02:00",
                            "departureTime": "2021-07-17T20:00:00+02:00",
                            "destination": "FRA",
                            "flightNumber": "HANDLING",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "CO 777",
                            "arrivalTime": "2021-07-17T22:00:00-05:00",
                            "departureTime": "2021-07-18T00:00:00+02:00",
                            "destination": "DFW",
                            "flightNumber": "CO1234",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-18T02:00:00-05:00",
                            "departureTime": "2021-07-17T22:00:00-05:00",
                            "destination": "DFW",
                            "flightNumber": "HANDLING",
                            "origin": "DFW"
                        }
                    ],
                    "hasAlternativeOrigin": false,
                    "hasCargoOnlySegments": false,
                    "id": "59f4ae6f-2308-41b3-aa98-c3be1f098686",
                    "latestAcceptanceTime": "2021-07-17T20:00:00+02:00",
                    "legalEntity": "cargo.one Airways Testing Airline",
                    "offerItems": [
                        {
                            "description": "route",
                            "kiloPrice": {
                                "amount": "1.20",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "123.45",
                                "currency": "EUR"
                            }
                        }
                    ],
                    "pickupLocation": {
                        "adr_building": "Temporary building",
                        "adr_po_code_city": "Temporary City",
                        "adr_street_number": "Temporary st. number",
                        "code": "",
                        "country": "",
                        "general_email": "",
                        "general_phone": "",
                        "handling_email": "",
                        "handling_phone": ""
                    },
                    "priceType": "PRICE_TYPE_DYNAMIC",
                    "product": {
                        "carrier": "cargo.one Airways",
                        "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/Product+Logo+-+cargo.one.png",
                        "product": "C1 General"
                    },
                    "provider": "AIRLINE_PROVIDER_COA",
                    "ranks": [
                        {
                            "rank": 2,
                            "type": "OFFER_RANK_TYPE_BEST"
                        },
                        {
                            "rank": 1,
                            "type": "OFFER_RANK_TYPE_CHEAPEST"
                        },
                        {
                            "rank": 11,
                            "type": "OFFER_RANK_TYPE_EARLIEST"
                        }
                    ],
                    "shipment": {
                        "createdAt": "2021-07-08T20:33:52+00:00",
                        "destination": "DFW",
                        "destinationCountry": "US",
                        "dropoffTime": "2021-07-16T00:00:00+02:00",
                        "goodsType": "general",
                        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                        "isConsolidated": false,
                        "items": [
                            {
                                "height": 20,
                                "isTotalWeight": false,
                                "length": 100,
                                "quantity": 2,
                                "stackable": false,
                                "turnable": true,
                                "weight": 12.0,
                                "width": 30
                            },
                            {
                                "height": 11,
                                "isTotalWeight": true,
                                "length": 25,
                                "quantity": 15,
                                "stackable": true,
                                "turnable": false,
                                "weight": 10.0,
                                "width": 20
                            }
                        ],
                        "origin": "FRA",
                        "originCountry": "DE",
                        "pickupTime": "2021-07-24T23:59:59-05:00",
                        "productService": "PRODUCT_SERVICE_GENERAL",
                        "product_service_properties": {
                            "product_service_properties": {
                                "general_properties": {
                                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                }
                            }
                        },
                        "screening": "screened",
                        "screeningStatus": "SCREENED",
                        "shipperStatus": "known",
                        "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                        "versionId": 1
                    },
                    "totalPrice": {
                        "amount": "123.45",
                        "currency": "EUR"
                    },
                    "totalPricePerKilo": {
                        "amount": "1.20",
                        "currency": "EUR"
                    }
                },
                "offers": {
                    "AIRLINE_PROVIDER_AA": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{}",
                        "adjustments": {},
                        "awbPrefix": "001",
                        "chargeableWeight": 34.0,
                        "createdAt": "1625776458255678",
                        "dropoffLocation": {
                            "city": "Frankfurt",
                            "company_name": "",
                            "country": "Germany",
                            "po_info": "60549",
                            "street": "Cargo City Sud"
                        },
                        "earliestAvailabilityTime": "2021-07-17T18:05:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-17T10:30:00+02:00",
                                "departureTime": "2021-07-17T06:30:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "7879",
                                "arrivalTime": "2021-07-17T14:05:00-05:00",
                                "departureTime": "2021-07-17T10:30:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "AA0071",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-17T18:05:00-05:00",
                                "departureTime": "2021-07-17T14:05:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "8cdc8471-b210-4c07-889b-7c7463abc2ff",
                        "latestAcceptanceTime": "2021-07-17T06:30:00+02:00",
                        "legalEntity": "American Airlines, Inc.",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "4.90",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "166.60",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "airfreight_fee",
                                "kiloPrice": {
                                    "amount": "0.35",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "12.00",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "city": "DFW Airport",
                            "company_name": "",
                            "country": "USA",
                            "po_info": "75261",
                            "street": "1816 Airport North Service Road"
                        },
                        "priceType": "PRICE_TYPE_SRS",
                        "product": {
                            "carrier": "American Airlines",
                            "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                            "product": "ExpediteFS"
                        },
                        "provider": "AIRLINE_PROVIDER_AA",
                        "ranks": [
                            {
                                "rank": 3,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 3,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 9,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "178.60",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "5.25",
                            "currency": "EUR"
                        }
                    },
                    "AIRLINE_PROVIDER_COA": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAP"
                        ],
                        "additionalData": "{}",
                        "adjustments": {},
                        "awbPrefix": "777",
                        "chargeableWeight": 34.0,
                        "createdAt": "1625776445228404",
                        "dropoffLocation": {
                            "adr_building": "Temporary building",
                            "adr_po_code_city": "Temporary City",
                            "adr_street_number": "Temporary st. number",
                            "code": "",
                            "country": "",
                            "general_email": "",
                            "general_phone": "",
                            "handling_email": "",
                            "handling_phone": ""
                        },
                        "earliestAvailabilityTime": "2021-07-18T02:00:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-18T00:00:00+02:00",
                                "departureTime": "2021-07-17T20:00:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "CO 777",
                                "arrivalTime": "2021-07-17T22:00:00-05:00",
                                "departureTime": "2021-07-18T00:00:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "CO1234",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-18T02:00:00-05:00",
                                "departureTime": "2021-07-17T22:00:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "59f4ae6f-2308-41b3-aa98-c3be1f098686",
                        "latestAcceptanceTime": "2021-07-17T20:00:00+02:00",
                        "legalEntity": "cargo.one Airways Testing Airline",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "1.20",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "123.45",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "adr_building": "Temporary building",
                            "adr_po_code_city": "Temporary City",
                            "adr_street_number": "Temporary st. number",
                            "code": "",
                            "country": "",
                            "general_email": "",
                            "general_phone": "",
                            "handling_email": "",
                            "handling_phone": ""
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "cargo.one Airways",
                            "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/Product+Logo+-+cargo.one.png",
                            "product": "C1 General"
                        },
                        "provider": "AIRLINE_PROVIDER_COA",
                        "ranks": [
                            {
                                "rank": 2,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 1,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 11,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "123.45",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "1.20",
                            "currency": "EUR"
                        }
                    },
                    "AIRLINE_PROVIDER_LUFTHANSA_V2": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"670366567-3\", \"rateType\": \"QTE\"}",
                        "adjustments": {},
                        "awbPrefix": "020",
                        "chargeableWeight": 45.0,
                        "createdAt": "1625776442696306",
                        "dropoffLocation": {
                            "airport": "FRANKFURT INTERNATIONAL APT",
                            "building": "Building 420",
                            "country": "DE",
                            "po_info": "60456 Frankfurt am Main",
                            "street": "Gate 25"
                        },
                        "earliestAvailabilityTime": "2021-07-17T17:15:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-17T10:10:00+02:00",
                                "departureTime": "2021-07-17T08:10:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "333",
                                "arrivalTime": "2021-07-17T14:15:00-05:00",
                                "departureTime": "2021-07-17T10:10:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "LH438",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-17T17:15:00-05:00",
                                "departureTime": "2021-07-17T14:15:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "242e181d-8e24-49a4-9d01-24e7ac5614a3",
                        "latestAcceptanceTime": "2021-07-17T08:10:00+02:00",
                        "legalEntity": "Lufthansa Cargo AG",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "29.73",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "1337.85",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.70",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "31.50",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "airport": "DALLAS/FORT WORTH INTL APT",
                            "building": "Suite 400",
                            "country": "US",
                            "po_info": "75261 Dallas",
                            "street": "23rd Street 1639"
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "Lufthansa",
                            "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                            "product": "td.Flash"
                        },
                        "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                        "ranks": [
                            {
                                "rank": 15,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 16,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 8,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "1369.35",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "30.43",
                            "currency": "EUR"
                        }
                    }
                }
            },
            "18-07-2021": {
                "highestRankedOffer": {
                    "acceptedAwbTypes": [
                        "PAPER",
                        "EAW",
                        "EAP"
                    ],
                    "additionalData": "{}",
                    "adjustments": {},
                    "awbPrefix": "001",
                    "chargeableWeight": 34.0,
                    "createdAt": "1625776458255678",
                    "dropoffLocation": {
                        "city": "Frankfurt",
                        "company_name": "",
                        "country": "Germany",
                        "po_info": "60549",
                        "street": "Cargo City Sud"
                    },
                    "earliestAvailabilityTime": "2021-07-18T18:05:00-05:00",
                    "flightSegments": [
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-18T10:30:00+02:00",
                            "departureTime": "2021-07-18T06:30:00+02:00",
                            "destination": "FRA",
                            "flightNumber": "HANDLING",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "7879",
                            "arrivalTime": "2021-07-18T14:05:00-05:00",
                            "departureTime": "2021-07-18T10:30:00+02:00",
                            "destination": "DFW",
                            "flightNumber": "AA0071",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-18T18:05:00-05:00",
                            "departureTime": "2021-07-18T14:05:00-05:00",
                            "destination": "DFW",
                            "flightNumber": "HANDLING",
                            "origin": "DFW"
                        }
                    ],
                    "hasAlternativeOrigin": false,
                    "hasCargoOnlySegments": false,
                    "id": "a13a7556-350c-40d5-9508-6fcba9f48710",
                    "latestAcceptanceTime": "2021-07-18T06:30:00+02:00",
                    "legalEntity": "American Airlines, Inc.",
                    "offerItems": [
                        {
                            "description": "route",
                            "kiloPrice": {
                                "amount": "4.90",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "166.60",
                                "currency": "EUR"
                            }
                        },
                        {
                            "description": "airfreight_fee",
                            "kiloPrice": {
                                "amount": "0.35",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "12.00",
                                "currency": "EUR"
                            }
                        }
                    ],
                    "pickupLocation": {
                        "city": "DFW Airport",
                        "company_name": "",
                        "country": "USA",
                        "po_info": "75261",
                        "street": "1816 Airport North Service Road"
                    },
                    "priceType": "PRICE_TYPE_SRS",
                    "product": {
                        "carrier": "American Airlines",
                        "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                        "product": "ExpediteFS"
                    },
                    "provider": "AIRLINE_PROVIDER_AA",
                    "ranks": [
                        {
                            "rank": 4,
                            "type": "OFFER_RANK_TYPE_BEST"
                        },
                        {
                            "rank": 4,
                            "type": "OFFER_RANK_TYPE_CHEAPEST"
                        },
                        {
                            "rank": 16,
                            "type": "OFFER_RANK_TYPE_EARLIEST"
                        }
                    ],
                    "shipment": {
                        "createdAt": "2021-07-08T20:33:52+00:00",
                        "destination": "DFW",
                        "destinationCountry": "US",
                        "dropoffTime": "2021-07-16T00:00:00+02:00",
                        "goodsType": "general",
                        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                        "isConsolidated": false,
                        "items": [
                            {
                                "height": 20,
                                "isTotalWeight": false,
                                "length": 100,
                                "quantity": 2,
                                "stackable": false,
                                "turnable": true,
                                "weight": 12.0,
                                "width": 30
                            },
                            {
                                "height": 11,
                                "isTotalWeight": true,
                                "length": 25,
                                "quantity": 15,
                                "stackable": true,
                                "turnable": false,
                                "weight": 10.0,
                                "width": 20
                            }
                        ],
                        "origin": "FRA",
                        "originCountry": "DE",
                        "pickupTime": "2021-07-24T23:59:59-05:00",
                        "productService": "PRODUCT_SERVICE_GENERAL",
                        "product_service_properties": {
                            "product_service_properties": {
                                "general_properties": {
                                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                }
                            }
                        },
                        "screening": "screened",
                        "screeningStatus": "SCREENED",
                        "shipperStatus": "known",
                        "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                        "versionId": 1
                    },
                    "totalPrice": {
                        "amount": "178.60",
                        "currency": "EUR"
                    },
                    "totalPricePerKilo": {
                        "amount": "5.25",
                        "currency": "EUR"
                    }
                },
                "offers": {
                    "AIRLINE_PROVIDER_AA": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{}",
                        "adjustments": {},
                        "awbPrefix": "001",
                        "chargeableWeight": 34.0,
                        "createdAt": "1625776458255678",
                        "dropoffLocation": {
                            "city": "Frankfurt",
                            "company_name": "",
                            "country": "Germany",
                            "po_info": "60549",
                            "street": "Cargo City Sud"
                        },
                        "earliestAvailabilityTime": "2021-07-18T18:05:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-18T10:30:00+02:00",
                                "departureTime": "2021-07-18T06:30:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "7879",
                                "arrivalTime": "2021-07-18T14:05:00-05:00",
                                "departureTime": "2021-07-18T10:30:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "AA0071",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-18T18:05:00-05:00",
                                "departureTime": "2021-07-18T14:05:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "a13a7556-350c-40d5-9508-6fcba9f48710",
                        "latestAcceptanceTime": "2021-07-18T06:30:00+02:00",
                        "legalEntity": "American Airlines, Inc.",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "4.90",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "166.60",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "airfreight_fee",
                                "kiloPrice": {
                                    "amount": "0.35",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "12.00",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "city": "DFW Airport",
                            "company_name": "",
                            "country": "USA",
                            "po_info": "75261",
                            "street": "1816 Airport North Service Road"
                        },
                        "priceType": "PRICE_TYPE_SRS",
                        "product": {
                            "carrier": "American Airlines",
                            "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
                            "product": "ExpediteFS"
                        },
                        "provider": "AIRLINE_PROVIDER_AA",
                        "ranks": [
                            {
                                "rank": 4,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 4,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 16,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "178.60",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "5.25",
                            "currency": "EUR"
                        }
                    },
                    "AIRLINE_PROVIDER_COA": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAP"
                        ],
                        "additionalData": "{}",
                        "adjustments": {},
                        "awbPrefix": "777",
                        "chargeableWeight": 34.0,
                        "createdAt": "1625776445228404",
                        "dropoffLocation": {
                            "adr_building": "Temporary building",
                            "adr_po_code_city": "Temporary City",
                            "adr_street_number": "Temporary st. number",
                            "code": "",
                            "country": "",
                            "general_email": "",
                            "general_phone": "",
                            "handling_email": "",
                            "handling_phone": ""
                        },
                        "earliestAvailabilityTime": "2021-07-19T02:00:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-19T00:00:00+02:00",
                                "departureTime": "2021-07-18T20:00:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "CO 777",
                                "arrivalTime": "2021-07-18T22:00:00-05:00",
                                "departureTime": "2021-07-19T00:00:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "CO1234",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-19T02:00:00-05:00",
                                "departureTime": "2021-07-18T22:00:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "f7ecd496-70fc-4dc6-a721-454027f7a4ca",
                        "latestAcceptanceTime": "2021-07-18T20:00:00+02:00",
                        "legalEntity": "cargo.one Airways Testing Airline",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "2.40",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "234.56",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.03",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "1.00",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "adr_building": "Temporary building",
                            "adr_po_code_city": "Temporary City",
                            "adr_street_number": "Temporary st. number",
                            "code": "",
                            "country": "",
                            "general_email": "",
                            "general_phone": "",
                            "handling_email": "",
                            "handling_phone": ""
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "cargo.one Airways",
                            "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/Product+Logo+-+cargo.one.png",
                            "product": "C1 General"
                        },
                        "provider": "AIRLINE_PROVIDER_COA",
                        "ranks": [
                            {
                                "rank": 7,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 12,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 18,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "235.56",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "2.43",
                            "currency": "EUR"
                        }
                    },
                    "AIRLINE_PROVIDER_LUFTHANSA_V2": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"053616221-7\", \"rateType\": \"QTE\"}",
                        "adjustments": {},
                        "awbPrefix": "020",
                        "chargeableWeight": 45.0,
                        "createdAt": "1625776442696306",
                        "dropoffLocation": {
                            "airport": "FRANKFURT INTERNATIONAL APT",
                            "building": "Building 420",
                            "country": "DE",
                            "po_info": "60456 Frankfurt am Main",
                            "street": "Gate 25"
                        },
                        "earliestAvailabilityTime": "2021-07-19T10:35:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-18T17:40:00+02:00",
                                "departureTime": "2021-07-18T15:40:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "77X",
                                "arrivalTime": "2021-07-19T03:25:00-05:00",
                                "departureTime": "2021-07-18T17:40:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "LH8220",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-19T10:35:00-05:00",
                                "departureTime": "2021-07-19T03:25:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": true,
                        "id": "6b1c8e06-c882-490a-ab36-7745ea72bbf3",
                        "latestAcceptanceTime": "2021-07-18T15:40:00+02:00",
                        "legalEntity": "Lufthansa Cargo AG",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "33.00",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "1485.00",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.70",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "31.50",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "airport": "DALLAS/FORT WORTH INTL APT",
                            "building": "Suite 400",
                            "country": "US",
                            "po_info": "75261 Dallas",
                            "street": "23rd Street 1639"
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "Lufthansa",
                            "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                            "product": "td.Flash"
                        },
                        "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                        "ranks": [
                            {
                                "rank": 23,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 32,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 19,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "1516.50",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "33.70",
                            "currency": "EUR"
                        }
                    }
                }
            },
            "19-07-2021": {
                "highestRankedOffer": {
                    "acceptedAwbTypes": [
                        "PAPER",
                        "EAW",
                        "EAP"
                    ],
                    "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"705200660-10\", \"rateType\": \"QTE\"}",
                    "adjustments": {},
                    "awbPrefix": "020",
                    "chargeableWeight": 45.0,
                    "createdAt": "1625776442696306",
                    "dropoffLocation": {
                        "airport": "FRANKFURT INTERNATIONAL APT",
                        "building": "Building 420",
                        "country": "DE",
                        "po_info": "60456 Frankfurt am Main",
                        "street": "Gate 25"
                    },
                    "earliestAvailabilityTime": "2021-07-19T17:15:00-05:00",
                    "flightSegments": [
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-19T10:10:00+02:00",
                            "departureTime": "2021-07-19T08:10:00+02:00",
                            "destination": "FRA",
                            "flightNumber": "HANDLING",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "333",
                            "arrivalTime": "2021-07-19T14:15:00-05:00",
                            "departureTime": "2021-07-19T10:10:00+02:00",
                            "destination": "DFW",
                            "flightNumber": "LH438",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-19T17:15:00-05:00",
                            "departureTime": "2021-07-19T14:15:00-05:00",
                            "destination": "DFW",
                            "flightNumber": "HANDLING",
                            "origin": "DFW"
                        }
                    ],
                    "hasAlternativeOrigin": false,
                    "hasCargoOnlySegments": false,
                    "id": "4a26a0da-1a60-4983-b1b4-bf88a35d2259",
                    "latestAcceptanceTime": "2021-07-19T08:10:00+02:00",
                    "legalEntity": "Lufthansa Cargo AG",
                    "offerItems": [
                        {
                            "description": "route",
                            "kiloPrice": {
                                "amount": "29.73",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "1337.85",
                                "currency": "EUR"
                            }
                        },
                        {
                            "description": "surcharges",
                            "kiloPrice": {
                                "amount": "0.70",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "31.50",
                                "currency": "EUR"
                            }
                        }
                    ],
                    "pickupLocation": {
                        "airport": "DALLAS/FORT WORTH INTL APT",
                        "building": "Suite 400",
                        "country": "US",
                        "po_info": "75261 Dallas",
                        "street": "23rd Street 1639"
                    },
                    "priceType": "PRICE_TYPE_DYNAMIC",
                    "product": {
                        "carrier": "Lufthansa",
                        "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                        "product": "td.Flash"
                    },
                    "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                    "ranks": [
                        {
                            "rank": 19,
                            "type": "OFFER_RANK_TYPE_BEST"
                        },
                        {
                            "rank": 18,
                            "type": "OFFER_RANK_TYPE_CHEAPEST"
                        },
                        {
                            "rank": 21,
                            "type": "OFFER_RANK_TYPE_EARLIEST"
                        }
                    ],
                    "shipment": {
                        "createdAt": "2021-07-08T20:33:52+00:00",
                        "destination": "DFW",
                        "destinationCountry": "US",
                        "dropoffTime": "2021-07-16T00:00:00+02:00",
                        "goodsType": "general",
                        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                        "isConsolidated": false,
                        "items": [
                            {
                                "height": 20,
                                "isTotalWeight": false,
                                "length": 100,
                                "quantity": 2,
                                "stackable": false,
                                "turnable": true,
                                "weight": 12.0,
                                "width": 30
                            },
                            {
                                "height": 11,
                                "isTotalWeight": true,
                                "length": 25,
                                "quantity": 15,
                                "stackable": true,
                                "turnable": false,
                                "weight": 10.0,
                                "width": 20
                            }
                        ],
                        "origin": "FRA",
                        "originCountry": "DE",
                        "pickupTime": "2021-07-24T23:59:59-05:00",
                        "productService": "PRODUCT_SERVICE_GENERAL",
                        "product_service_properties": {
                            "product_service_properties": {
                                "general_properties": {
                                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                }
                            }
                        },
                        "screening": "screened",
                        "screeningStatus": "SCREENED",
                        "shipperStatus": "known",
                        "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                        "versionId": 1
                    },
                    "totalPrice": {
                        "amount": "1369.35",
                        "currency": "EUR"
                    },
                    "totalPricePerKilo": {
                        "amount": "30.43",
                        "currency": "EUR"
                    }
                },
                "offers": {
                    "AIRLINE_PROVIDER_LUFTHANSA_V2": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"705200660-10\", \"rateType\": \"QTE\"}",
                        "adjustments": {},
                        "awbPrefix": "020",
                        "chargeableWeight": 45.0,
                        "createdAt": "1625776442696306",
                        "dropoffLocation": {
                            "airport": "FRANKFURT INTERNATIONAL APT",
                            "building": "Building 420",
                            "country": "DE",
                            "po_info": "60456 Frankfurt am Main",
                            "street": "Gate 25"
                        },
                        "earliestAvailabilityTime": "2021-07-19T17:15:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-19T10:10:00+02:00",
                                "departureTime": "2021-07-19T08:10:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "333",
                                "arrivalTime": "2021-07-19T14:15:00-05:00",
                                "departureTime": "2021-07-19T10:10:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "LH438",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-19T17:15:00-05:00",
                                "departureTime": "2021-07-19T14:15:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "4a26a0da-1a60-4983-b1b4-bf88a35d2259",
                        "latestAcceptanceTime": "2021-07-19T08:10:00+02:00",
                        "legalEntity": "Lufthansa Cargo AG",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "29.73",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "1337.85",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.70",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "31.50",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "airport": "DALLAS/FORT WORTH INTL APT",
                            "building": "Suite 400",
                            "country": "US",
                            "po_info": "75261 Dallas",
                            "street": "23rd Street 1639"
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "Lufthansa",
                            "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                            "product": "td.Flash"
                        },
                        "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                        "ranks": [
                            {
                                "rank": 19,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 18,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 21,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "1369.35",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "30.43",
                            "currency": "EUR"
                        }
                    }
                }
            },
            "20-07-2021": {
                "highestRankedOffer": {
                    "acceptedAwbTypes": [
                        "PAPER",
                        "EAW",
                        "EAP"
                    ],
                    "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"722012337-15\", \"rateType\": \"QTE\"}",
                    "adjustments": {},
                    "awbPrefix": "020",
                    "chargeableWeight": 45.0,
                    "createdAt": "1625776442696306",
                    "dropoffLocation": {
                        "airport": "FRANKFURT INTERNATIONAL APT",
                        "building": "Building 420",
                        "country": "DE",
                        "po_info": "60456 Frankfurt am Main",
                        "street": "Gate 25"
                    },
                    "earliestAvailabilityTime": "2021-07-20T17:15:00-05:00",
                    "flightSegments": [
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-20T10:10:00+02:00",
                            "departureTime": "2021-07-20T08:10:00+02:00",
                            "destination": "FRA",
                            "flightNumber": "HANDLING",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "333",
                            "arrivalTime": "2021-07-20T14:15:00-05:00",
                            "departureTime": "2021-07-20T10:10:00+02:00",
                            "destination": "DFW",
                            "flightNumber": "LH438",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-20T17:15:00-05:00",
                            "departureTime": "2021-07-20T14:15:00-05:00",
                            "destination": "DFW",
                            "flightNumber": "HANDLING",
                            "origin": "DFW"
                        }
                    ],
                    "hasAlternativeOrigin": false,
                    "hasCargoOnlySegments": false,
                    "id": "c56c3ae4-8db3-4a43-8c24-92bc6f91e177",
                    "latestAcceptanceTime": "2021-07-20T08:10:00+02:00",
                    "legalEntity": "Lufthansa Cargo AG",
                    "offerItems": [
                        {
                            "description": "route",
                            "kiloPrice": {
                                "amount": "29.73",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "1337.85",
                                "currency": "EUR"
                            }
                        },
                        {
                            "description": "surcharges",
                            "kiloPrice": {
                                "amount": "0.70",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "31.50",
                                "currency": "EUR"
                            }
                        }
                    ],
                    "pickupLocation": {
                        "airport": "DALLAS/FORT WORTH INTL APT",
                        "building": "Suite 400",
                        "country": "US",
                        "po_info": "75261 Dallas",
                        "street": "23rd Street 1639"
                    },
                    "priceType": "PRICE_TYPE_DYNAMIC",
                    "product": {
                        "carrier": "Lufthansa",
                        "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                        "product": "td.Flash"
                    },
                    "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                    "ranks": [
                        {
                            "rank": 21,
                            "type": "OFFER_RANK_TYPE_BEST"
                        },
                        {
                            "rank": 20,
                            "type": "OFFER_RANK_TYPE_CHEAPEST"
                        },
                        {
                            "rank": 23,
                            "type": "OFFER_RANK_TYPE_EARLIEST"
                        }
                    ],
                    "shipment": {
                        "createdAt": "2021-07-08T20:33:52+00:00",
                        "destination": "DFW",
                        "destinationCountry": "US",
                        "dropoffTime": "2021-07-16T00:00:00+02:00",
                        "goodsType": "general",
                        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                        "isConsolidated": false,
                        "items": [
                            {
                                "height": 20,
                                "isTotalWeight": false,
                                "length": 100,
                                "quantity": 2,
                                "stackable": false,
                                "turnable": true,
                                "weight": 12.0,
                                "width": 30
                            },
                            {
                                "height": 11,
                                "isTotalWeight": true,
                                "length": 25,
                                "quantity": 15,
                                "stackable": true,
                                "turnable": false,
                                "weight": 10.0,
                                "width": 20
                            }
                        ],
                        "origin": "FRA",
                        "originCountry": "DE",
                        "pickupTime": "2021-07-24T23:59:59-05:00",
                        "productService": "PRODUCT_SERVICE_GENERAL",
                        "product_service_properties": {
                            "product_service_properties": {
                                "general_properties": {
                                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                }
                            }
                        },
                        "screening": "screened",
                        "screeningStatus": "SCREENED",
                        "shipperStatus": "known",
                        "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                        "versionId": 1
                    },
                    "totalPrice": {
                        "amount": "1369.35",
                        "currency": "EUR"
                    },
                    "totalPricePerKilo": {
                        "amount": "30.43",
                        "currency": "EUR"
                    }
                },
                "offers": {
                    "AIRLINE_PROVIDER_LUFTHANSA_V2": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{\"productOffersResourceId\": \"FBD7685AE2804EB8AE54E66B2C4FA56A\", \"routeOffersResourceId\": \"722012337-15\", \"rateType\": \"QTE\"}",
                        "adjustments": {},
                        "awbPrefix": "020",
                        "chargeableWeight": 45.0,
                        "createdAt": "1625776442696306",
                        "dropoffLocation": {
                            "airport": "FRANKFURT INTERNATIONAL APT",
                            "building": "Building 420",
                            "country": "DE",
                            "po_info": "60456 Frankfurt am Main",
                            "street": "Gate 25"
                        },
                        "earliestAvailabilityTime": "2021-07-20T17:15:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-20T10:10:00+02:00",
                                "departureTime": "2021-07-20T08:10:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "333",
                                "arrivalTime": "2021-07-20T14:15:00-05:00",
                                "departureTime": "2021-07-20T10:10:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "LH438",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-20T17:15:00-05:00",
                                "departureTime": "2021-07-20T14:15:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "c56c3ae4-8db3-4a43-8c24-92bc6f91e177",
                        "latestAcceptanceTime": "2021-07-20T08:10:00+02:00",
                        "legalEntity": "Lufthansa Cargo AG",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "29.73",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "1337.85",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.70",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "31.50",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "airport": "DALLAS/FORT WORTH INTL APT",
                            "building": "Suite 400",
                            "country": "US",
                            "po_info": "75261 Dallas",
                            "street": "23rd Street 1639"
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "Lufthansa",
                            "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                            "product": "td.Flash"
                        },
                        "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                        "ranks": [
                            {
                                "rank": 21,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 20,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 23,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "1369.35",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "30.43",
                            "currency": "EUR"
                        }
                    }
                }
            },
            "21-07-2021": {
                "highestRankedOffer": {
                    "acceptedAwbTypes": [
                        "PAPER",
                        "EAW",
                        "EAP"
                    ],
                    "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"342231661-5\", \"rateType\": \"QTE\"}",
                    "adjustments": {},
                    "awbPrefix": "020",
                    "chargeableWeight": 45.0,
                    "createdAt": "1625776442648751",
                    "dropoffLocation": {
                        "airport": "FRANKFURT INTERNATIONAL APT",
                        "building": "Building 420",
                        "country": "DE",
                        "po_info": "60456 Frankfurt am Main",
                        "street": "Gate 25"
                    },
                    "earliestAvailabilityTime": "2021-07-23T20:00:00-05:00",
                    "flightSegments": [
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-21T13:40:00+02:00",
                            "departureTime": "2021-07-21T11:40:00+02:00",
                            "destination": "FRA",
                            "flightNumber": "HANDLING",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "359",
                            "arrivalTime": "2021-07-21T15:55:00-06:00",
                            "departureTime": "2021-07-21T13:40:00+02:00",
                            "destination": "DEN",
                            "flightNumber": "LH446",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-22T18:35:00-06:00",
                            "departureTime": "2021-07-21T15:55:00-06:00",
                            "destination": "DEN",
                            "flightNumber": "HANDLING",
                            "origin": "DEN"
                        },
                        {
                            "aircraftType": "RFS",
                            "arrivalTime": "2021-07-23T17:00:00-05:00",
                            "departureTime": "2021-07-22T18:35:00-06:00",
                            "destination": "DFW",
                            "flightNumber": "LH6853S",
                            "origin": "DEN"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-23T20:00:00-05:00",
                            "departureTime": "2021-07-23T17:00:00-05:00",
                            "destination": "DFW",
                            "flightNumber": "HANDLING",
                            "origin": "DFW"
                        }
                    ],
                    "hasAlternativeOrigin": false,
                    "hasCargoOnlySegments": false,
                    "id": "1ec8fd7e-dbeb-4d16-ba95-3c1e99a4e915",
                    "latestAcceptanceTime": "2021-07-21T11:40:00+02:00",
                    "legalEntity": "Lufthansa Cargo AG",
                    "offerItems": [
                        {
                            "description": "route",
                            "kiloPrice": {
                                "amount": "10.23",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "460.35",
                                "currency": "EUR"
                            }
                        },
                        {
                            "description": "surcharges",
                            "kiloPrice": {
                                "amount": "0.70",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "31.50",
                                "currency": "EUR"
                            }
                        }
                    ],
                    "pickupLocation": {
                        "airport": "DALLAS/FORT WORTH INTL APT",
                        "building": "Suite 400",
                        "country": "US",
                        "po_info": "75261 Dallas",
                        "street": "23rd Street 1639"
                    },
                    "priceType": "PRICE_TYPE_DYNAMIC",
                    "product": {
                        "carrier": "Lufthansa",
                        "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                        "product": "td.Flash"
                    },
                    "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                    "ranks": [
                        {
                            "rank": 13,
                            "type": "OFFER_RANK_TYPE_BEST"
                        },
                        {
                            "rank": 13,
                            "type": "OFFER_RANK_TYPE_CHEAPEST"
                        },
                        {
                            "rank": 31,
                            "type": "OFFER_RANK_TYPE_EARLIEST"
                        }
                    ],
                    "shipment": {
                        "createdAt": "2021-07-08T20:33:52+00:00",
                        "destination": "DFW",
                        "destinationCountry": "US",
                        "dropoffTime": "2021-07-16T00:00:00+02:00",
                        "goodsType": "general",
                        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                        "isConsolidated": false,
                        "items": [
                            {
                                "height": 20,
                                "isTotalWeight": false,
                                "length": 100,
                                "quantity": 2,
                                "stackable": false,
                                "turnable": true,
                                "weight": 12.0,
                                "width": 30
                            },
                            {
                                "height": 11,
                                "isTotalWeight": true,
                                "length": 25,
                                "quantity": 15,
                                "stackable": true,
                                "turnable": false,
                                "weight": 10.0,
                                "width": 20
                            }
                        ],
                        "origin": "FRA",
                        "originCountry": "DE",
                        "pickupTime": "2021-07-24T23:59:59-05:00",
                        "productService": "PRODUCT_SERVICE_GENERAL",
                        "product_service_properties": {
                            "product_service_properties": {
                                "general_properties": {
                                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                }
                            }
                        },
                        "screening": "screened",
                        "screeningStatus": "SCREENED",
                        "shipperStatus": "known",
                        "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                        "versionId": 1
                    },
                    "totalPrice": {
                        "amount": "491.85",
                        "currency": "EUR"
                    },
                    "totalPricePerKilo": {
                        "amount": "10.93",
                        "currency": "EUR"
                    }
                },
                "offers": {
                    "AIRLINE_PROVIDER_LUFTHANSA_V2": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"342231661-5\", \"rateType\": \"QTE\"}",
                        "adjustments": {},
                        "awbPrefix": "020",
                        "chargeableWeight": 45.0,
                        "createdAt": "1625776442648751",
                        "dropoffLocation": {
                            "airport": "FRANKFURT INTERNATIONAL APT",
                            "building": "Building 420",
                            "country": "DE",
                            "po_info": "60456 Frankfurt am Main",
                            "street": "Gate 25"
                        },
                        "earliestAvailabilityTime": "2021-07-23T20:00:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-21T13:40:00+02:00",
                                "departureTime": "2021-07-21T11:40:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "359",
                                "arrivalTime": "2021-07-21T15:55:00-06:00",
                                "departureTime": "2021-07-21T13:40:00+02:00",
                                "destination": "DEN",
                                "flightNumber": "LH446",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-22T18:35:00-06:00",
                                "departureTime": "2021-07-21T15:55:00-06:00",
                                "destination": "DEN",
                                "flightNumber": "HANDLING",
                                "origin": "DEN"
                            },
                            {
                                "aircraftType": "RFS",
                                "arrivalTime": "2021-07-23T17:00:00-05:00",
                                "departureTime": "2021-07-22T18:35:00-06:00",
                                "destination": "DFW",
                                "flightNumber": "LH6853S",
                                "origin": "DEN"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-23T20:00:00-05:00",
                                "departureTime": "2021-07-23T17:00:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "1ec8fd7e-dbeb-4d16-ba95-3c1e99a4e915",
                        "latestAcceptanceTime": "2021-07-21T11:40:00+02:00",
                        "legalEntity": "Lufthansa Cargo AG",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "10.23",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "460.35",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.70",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "31.50",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "airport": "DALLAS/FORT WORTH INTL APT",
                            "building": "Suite 400",
                            "country": "US",
                            "po_info": "75261 Dallas",
                            "street": "23rd Street 1639"
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "Lufthansa",
                            "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                            "product": "td.Flash"
                        },
                        "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                        "ranks": [
                            {
                                "rank": 13,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 13,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 31,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "491.85",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "10.93",
                            "currency": "EUR"
                        }
                    }
                }
            },
            "22-07-2021": {
                "highestRankedOffer": {
                    "acceptedAwbTypes": [
                        "PAPER",
                        "EAW",
                        "EAP"
                    ],
                    "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"871347580-2\", \"rateType\": \"QTE\"}",
                    "adjustments": {},
                    "awbPrefix": "020",
                    "chargeableWeight": 45.0,
                    "createdAt": "1625776442648751",
                    "dropoffLocation": {
                        "airport": "FRANKFURT INTERNATIONAL APT",
                        "building": "Building 420",
                        "country": "DE",
                        "po_info": "60456 Frankfurt am Main",
                        "street": "Gate 25"
                    },
                    "earliestAvailabilityTime": "2021-07-23T10:35:00-05:00",
                    "flightSegments": [
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-22T14:55:00+02:00",
                            "departureTime": "2021-07-22T12:55:00+02:00",
                            "destination": "FRA",
                            "flightNumber": "HANDLING",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "77X",
                            "arrivalTime": "2021-07-22T21:30:00-05:00",
                            "departureTime": "2021-07-22T14:55:00+02:00",
                            "destination": "DFW",
                            "flightNumber": "LH8200",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-23T10:35:00-05:00",
                            "departureTime": "2021-07-22T21:30:00-05:00",
                            "destination": "DFW",
                            "flightNumber": "HANDLING",
                            "origin": "DFW"
                        }
                    ],
                    "hasAlternativeOrigin": false,
                    "hasCargoOnlySegments": true,
                    "id": "2974b7fd-f3d9-474b-a87d-a8d3a39dd103",
                    "latestAcceptanceTime": "2021-07-22T12:55:00+02:00",
                    "legalEntity": "Lufthansa Cargo AG",
                    "offerItems": [
                        {
                            "description": "route",
                            "kiloPrice": {
                                "amount": "32.14",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "1446.30",
                                "currency": "EUR"
                            }
                        },
                        {
                            "description": "surcharges",
                            "kiloPrice": {
                                "amount": "0.70",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "31.50",
                                "currency": "EUR"
                            }
                        }
                    ],
                    "pickupLocation": {
                        "airport": "DALLAS/FORT WORTH INTL APT",
                        "building": "Suite 400",
                        "country": "US",
                        "po_info": "75261 Dallas",
                        "street": "23rd Street 1639"
                    },
                    "priceType": "PRICE_TYPE_DYNAMIC",
                    "product": {
                        "carrier": "Lufthansa",
                        "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                        "product": "td.Flash"
                    },
                    "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                    "ranks": [
                        {
                            "rank": 31,
                            "type": "OFFER_RANK_TYPE_BEST"
                        },
                        {
                            "rank": 28,
                            "type": "OFFER_RANK_TYPE_CHEAPEST"
                        },
                        {
                            "rank": 27,
                            "type": "OFFER_RANK_TYPE_EARLIEST"
                        }
                    ],
                    "shipment": {
                        "createdAt": "2021-07-08T20:33:52+00:00",
                        "destination": "DFW",
                        "destinationCountry": "US",
                        "dropoffTime": "2021-07-16T00:00:00+02:00",
                        "goodsType": "general",
                        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                        "isConsolidated": false,
                        "items": [
                            {
                                "height": 20,
                                "isTotalWeight": false,
                                "length": 100,
                                "quantity": 2,
                                "stackable": false,
                                "turnable": true,
                                "weight": 12.0,
                                "width": 30
                            },
                            {
                                "height": 11,
                                "isTotalWeight": true,
                                "length": 25,
                                "quantity": 15,
                                "stackable": true,
                                "turnable": false,
                                "weight": 10.0,
                                "width": 20
                            }
                        ],
                        "origin": "FRA",
                        "originCountry": "DE",
                        "pickupTime": "2021-07-24T23:59:59-05:00",
                        "productService": "PRODUCT_SERVICE_GENERAL",
                        "product_service_properties": {
                            "product_service_properties": {
                                "general_properties": {
                                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                }
                            }
                        },
                        "screening": "screened",
                        "screeningStatus": "SCREENED",
                        "shipperStatus": "known",
                        "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                        "versionId": 1
                    },
                    "totalPrice": {
                        "amount": "1477.80",
                        "currency": "EUR"
                    },
                    "totalPricePerKilo": {
                        "amount": "32.84",
                        "currency": "EUR"
                    }
                },
                "offers": {
                    "AIRLINE_PROVIDER_LUFTHANSA_V2": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"871347580-2\", \"rateType\": \"QTE\"}",
                        "adjustments": {},
                        "awbPrefix": "020",
                        "chargeableWeight": 45.0,
                        "createdAt": "1625776442648751",
                        "dropoffLocation": {
                            "airport": "FRANKFURT INTERNATIONAL APT",
                            "building": "Building 420",
                            "country": "DE",
                            "po_info": "60456 Frankfurt am Main",
                            "street": "Gate 25"
                        },
                        "earliestAvailabilityTime": "2021-07-23T10:35:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-22T14:55:00+02:00",
                                "departureTime": "2021-07-22T12:55:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "77X",
                                "arrivalTime": "2021-07-22T21:30:00-05:00",
                                "departureTime": "2021-07-22T14:55:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "LH8200",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-23T10:35:00-05:00",
                                "departureTime": "2021-07-22T21:30:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": true,
                        "id": "2974b7fd-f3d9-474b-a87d-a8d3a39dd103",
                        "latestAcceptanceTime": "2021-07-22T12:55:00+02:00",
                        "legalEntity": "Lufthansa Cargo AG",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "32.14",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "1446.30",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.70",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "31.50",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "airport": "DALLAS/FORT WORTH INTL APT",
                            "building": "Suite 400",
                            "country": "US",
                            "po_info": "75261 Dallas",
                            "street": "23rd Street 1639"
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "Lufthansa",
                            "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                            "product": "td.Flash"
                        },
                        "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                        "ranks": [
                            {
                                "rank": 31,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 28,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 27,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "1477.80",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "32.84",
                            "currency": "EUR"
                        }
                    }
                }
            },
            "23-07-2021": {
                "highestRankedOffer": {
                    "acceptedAwbTypes": [
                        "PAPER",
                        "EAW",
                        "EAP"
                    ],
                    "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"525721072-4\", \"rateType\": \"QTE\"}",
                    "adjustments": {},
                    "awbPrefix": "020",
                    "chargeableWeight": 45.0,
                    "createdAt": "1625776442648751",
                    "dropoffLocation": {
                        "airport": "FRANKFURT INTERNATIONAL APT",
                        "building": "Building 420",
                        "country": "DE",
                        "po_info": "60456 Frankfurt am Main",
                        "street": "Gate 25"
                    },
                    "earliestAvailabilityTime": "2021-07-23T17:15:00-05:00",
                    "flightSegments": [
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-23T10:10:00+02:00",
                            "departureTime": "2021-07-23T08:10:00+02:00",
                            "destination": "FRA",
                            "flightNumber": "HANDLING",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "333",
                            "arrivalTime": "2021-07-23T14:15:00-05:00",
                            "departureTime": "2021-07-23T10:10:00+02:00",
                            "destination": "DFW",
                            "flightNumber": "LH438",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-23T17:15:00-05:00",
                            "departureTime": "2021-07-23T14:15:00-05:00",
                            "destination": "DFW",
                            "flightNumber": "HANDLING",
                            "origin": "DFW"
                        }
                    ],
                    "hasAlternativeOrigin": false,
                    "hasCargoOnlySegments": false,
                    "id": "949ed4e5-09af-4018-9504-d9b3a273693a",
                    "latestAcceptanceTime": "2021-07-23T08:10:00+02:00",
                    "legalEntity": "Lufthansa Cargo AG",
                    "offerItems": [
                        {
                            "description": "route",
                            "kiloPrice": {
                                "amount": "29.73",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "1337.85",
                                "currency": "EUR"
                            }
                        },
                        {
                            "description": "surcharges",
                            "kiloPrice": {
                                "amount": "0.70",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "31.50",
                                "currency": "EUR"
                            }
                        }
                    ],
                    "pickupLocation": {
                        "airport": "DALLAS/FORT WORTH INTL APT",
                        "building": "Suite 400",
                        "country": "US",
                        "po_info": "75261 Dallas",
                        "street": "23rd Street 1639"
                    },
                    "priceType": "PRICE_TYPE_DYNAMIC",
                    "product": {
                        "carrier": "Lufthansa",
                        "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                        "product": "td.Flash"
                    },
                    "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                    "ranks": [
                        {
                            "rank": 28,
                            "type": "OFFER_RANK_TYPE_BEST"
                        },
                        {
                            "rank": 24,
                            "type": "OFFER_RANK_TYPE_CHEAPEST"
                        },
                        {
                            "rank": 29,
                            "type": "OFFER_RANK_TYPE_EARLIEST"
                        }
                    ],
                    "shipment": {
                        "createdAt": "2021-07-08T20:33:52+00:00",
                        "destination": "DFW",
                        "destinationCountry": "US",
                        "dropoffTime": "2021-07-16T00:00:00+02:00",
                        "goodsType": "general",
                        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                        "isConsolidated": false,
                        "items": [
                            {
                                "height": 20,
                                "isTotalWeight": false,
                                "length": 100,
                                "quantity": 2,
                                "stackable": false,
                                "turnable": true,
                                "weight": 12.0,
                                "width": 30
                            },
                            {
                                "height": 11,
                                "isTotalWeight": true,
                                "length": 25,
                                "quantity": 15,
                                "stackable": true,
                                "turnable": false,
                                "weight": 10.0,
                                "width": 20
                            }
                        ],
                        "origin": "FRA",
                        "originCountry": "DE",
                        "pickupTime": "2021-07-24T23:59:59-05:00",
                        "productService": "PRODUCT_SERVICE_GENERAL",
                        "product_service_properties": {
                            "product_service_properties": {
                                "general_properties": {
                                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                }
                            }
                        },
                        "screening": "screened",
                        "screeningStatus": "SCREENED",
                        "shipperStatus": "known",
                        "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                        "versionId": 1
                    },
                    "totalPrice": {
                        "amount": "1369.35",
                        "currency": "EUR"
                    },
                    "totalPricePerKilo": {
                        "amount": "30.43",
                        "currency": "EUR"
                    }
                },
                "offers": {
                    "AIRLINE_PROVIDER_LUFTHANSA_V2": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"525721072-4\", \"rateType\": \"QTE\"}",
                        "adjustments": {},
                        "awbPrefix": "020",
                        "chargeableWeight": 45.0,
                        "createdAt": "1625776442648751",
                        "dropoffLocation": {
                            "airport": "FRANKFURT INTERNATIONAL APT",
                            "building": "Building 420",
                            "country": "DE",
                            "po_info": "60456 Frankfurt am Main",
                            "street": "Gate 25"
                        },
                        "earliestAvailabilityTime": "2021-07-23T17:15:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-23T10:10:00+02:00",
                                "departureTime": "2021-07-23T08:10:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "333",
                                "arrivalTime": "2021-07-23T14:15:00-05:00",
                                "departureTime": "2021-07-23T10:10:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "LH438",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-23T17:15:00-05:00",
                                "departureTime": "2021-07-23T14:15:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "949ed4e5-09af-4018-9504-d9b3a273693a",
                        "latestAcceptanceTime": "2021-07-23T08:10:00+02:00",
                        "legalEntity": "Lufthansa Cargo AG",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "29.73",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "1337.85",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.70",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "31.50",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "airport": "DALLAS/FORT WORTH INTL APT",
                            "building": "Suite 400",
                            "country": "US",
                            "po_info": "75261 Dallas",
                            "street": "23rd Street 1639"
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "Lufthansa",
                            "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                            "product": "td.Flash"
                        },
                        "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                        "ranks": [
                            {
                                "rank": 28,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 24,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 29,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "1369.35",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "30.43",
                            "currency": "EUR"
                        }
                    }
                }
            },
            "24-07-2021": {
                "highestRankedOffer": {
                    "acceptedAwbTypes": [
                        "PAPER",
                        "EAW",
                        "EAP"
                    ],
                    "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"363770573-9\", \"rateType\": \"QTE\"}",
                    "adjustments": {},
                    "awbPrefix": "020",
                    "chargeableWeight": 45.0,
                    "createdAt": "1625776442648751",
                    "dropoffLocation": {
                        "airport": "FRANKFURT INTERNATIONAL APT",
                        "building": "Building 420",
                        "country": "DE",
                        "po_info": "60456 Frankfurt am Main",
                        "street": "Gate 25"
                    },
                    "earliestAvailabilityTime": "2021-07-24T17:15:00-05:00",
                    "flightSegments": [
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-24T10:10:00+02:00",
                            "departureTime": "2021-07-24T08:10:00+02:00",
                            "destination": "FRA",
                            "flightNumber": "HANDLING",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "333",
                            "arrivalTime": "2021-07-24T14:15:00-05:00",
                            "departureTime": "2021-07-24T10:10:00+02:00",
                            "destination": "DFW",
                            "flightNumber": "LH438",
                            "origin": "FRA"
                        },
                        {
                            "aircraftType": "HANDLING",
                            "arrivalTime": "2021-07-24T17:15:00-05:00",
                            "departureTime": "2021-07-24T14:15:00-05:00",
                            "destination": "DFW",
                            "flightNumber": "HANDLING",
                            "origin": "DFW"
                        }
                    ],
                    "hasAlternativeOrigin": false,
                    "hasCargoOnlySegments": false,
                    "id": "e88c9b9f-f6a9-44c1-9b40-4f11a6c96925",
                    "latestAcceptanceTime": "2021-07-24T08:10:00+02:00",
                    "legalEntity": "Lufthansa Cargo AG",
                    "offerItems": [
                        {
                            "description": "route",
                            "kiloPrice": {
                                "amount": "29.73",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "1337.85",
                                "currency": "EUR"
                            }
                        },
                        {
                            "description": "surcharges",
                            "kiloPrice": {
                                "amount": "0.70",
                                "currency": "EUR"
                            },
                            "price": {
                                "amount": "31.50",
                                "currency": "EUR"
                            }
                        }
                    ],
                    "pickupLocation": {
                        "airport": "DALLAS/FORT WORTH INTL APT",
                        "building": "Suite 400",
                        "country": "US",
                        "po_info": "75261 Dallas",
                        "street": "23rd Street 1639"
                    },
                    "priceType": "PRICE_TYPE_DYNAMIC",
                    "product": {
                        "carrier": "Lufthansa",
                        "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                        "product": "td.Flash"
                    },
                    "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                    "ranks": [
                        {
                            "rank": 29,
                            "type": "OFFER_RANK_TYPE_BEST"
                        },
                        {
                            "rank": 26,
                            "type": "OFFER_RANK_TYPE_CHEAPEST"
                        },
                        {
                            "rank": 34,
                            "type": "OFFER_RANK_TYPE_EARLIEST"
                        }
                    ],
                    "shipment": {
                        "createdAt": "2021-07-08T20:33:52+00:00",
                        "destination": "DFW",
                        "destinationCountry": "US",
                        "dropoffTime": "2021-07-16T00:00:00+02:00",
                        "goodsType": "general",
                        "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                        "isConsolidated": false,
                        "items": [
                            {
                                "height": 20,
                                "isTotalWeight": false,
                                "length": 100,
                                "quantity": 2,
                                "stackable": false,
                                "turnable": true,
                                "weight": 12.0,
                                "width": 30
                            },
                            {
                                "height": 11,
                                "isTotalWeight": true,
                                "length": 25,
                                "quantity": 15,
                                "stackable": true,
                                "turnable": false,
                                "weight": 10.0,
                                "width": 20
                            }
                        ],
                        "origin": "FRA",
                        "originCountry": "DE",
                        "pickupTime": "2021-07-24T23:59:59-05:00",
                        "productService": "PRODUCT_SERVICE_GENERAL",
                        "product_service_properties": {
                            "product_service_properties": {
                                "general_properties": {
                                    "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                }
                            }
                        },
                        "screening": "screened",
                        "screeningStatus": "SCREENED",
                        "shipperStatus": "known",
                        "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                        "versionId": 1
                    },
                    "totalPrice": {
                        "amount": "1369.35",
                        "currency": "EUR"
                    },
                    "totalPricePerKilo": {
                        "amount": "30.43",
                        "currency": "EUR"
                    }
                },
                "offers": {
                    "AIRLINE_PROVIDER_LUFTHANSA_V2": {
                        "acceptedAwbTypes": [
                            "PAPER",
                            "EAW",
                            "EAP"
                        ],
                        "additionalData": "{\"productOffersResourceId\": \"10C75DE171E54D05AB614DCA09C32A1A\", \"routeOffersResourceId\": \"363770573-9\", \"rateType\": \"QTE\"}",
                        "adjustments": {},
                        "awbPrefix": "020",
                        "chargeableWeight": 45.0,
                        "createdAt": "1625776442648751",
                        "dropoffLocation": {
                            "airport": "FRANKFURT INTERNATIONAL APT",
                            "building": "Building 420",
                            "country": "DE",
                            "po_info": "60456 Frankfurt am Main",
                            "street": "Gate 25"
                        },
                        "earliestAvailabilityTime": "2021-07-24T17:15:00-05:00",
                        "flightSegments": [
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-24T10:10:00+02:00",
                                "departureTime": "2021-07-24T08:10:00+02:00",
                                "destination": "FRA",
                                "flightNumber": "HANDLING",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "333",
                                "arrivalTime": "2021-07-24T14:15:00-05:00",
                                "departureTime": "2021-07-24T10:10:00+02:00",
                                "destination": "DFW",
                                "flightNumber": "LH438",
                                "origin": "FRA"
                            },
                            {
                                "aircraftType": "HANDLING",
                                "arrivalTime": "2021-07-24T17:15:00-05:00",
                                "departureTime": "2021-07-24T14:15:00-05:00",
                                "destination": "DFW",
                                "flightNumber": "HANDLING",
                                "origin": "DFW"
                            }
                        ],
                        "hasAlternativeOrigin": false,
                        "hasCargoOnlySegments": false,
                        "id": "e88c9b9f-f6a9-44c1-9b40-4f11a6c96925",
                        "latestAcceptanceTime": "2021-07-24T08:10:00+02:00",
                        "legalEntity": "Lufthansa Cargo AG",
                        "offerItems": [
                            {
                                "description": "route",
                                "kiloPrice": {
                                    "amount": "29.73",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "1337.85",
                                    "currency": "EUR"
                                }
                            },
                            {
                                "description": "surcharges",
                                "kiloPrice": {
                                    "amount": "0.70",
                                    "currency": "EUR"
                                },
                                "price": {
                                    "amount": "31.50",
                                    "currency": "EUR"
                                }
                            }
                        ],
                        "pickupLocation": {
                            "airport": "DALLAS/FORT WORTH INTL APT",
                            "building": "Suite 400",
                            "country": "US",
                            "po_info": "75261 Dallas",
                            "street": "23rd Street 1639"
                        },
                        "priceType": "PRICE_TYPE_DYNAMIC",
                        "product": {
                            "carrier": "Lufthansa",
                            "logoUrl": "https://s3.eu-central-1.amazonaws.com/static-cargo-one/production/lufthansa_logo.png",
                            "product": "td.Flash"
                        },
                        "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2",
                        "ranks": [
                            {
                                "rank": 29,
                                "type": "OFFER_RANK_TYPE_BEST"
                            },
                            {
                                "rank": 26,
                                "type": "OFFER_RANK_TYPE_CHEAPEST"
                            },
                            {
                                "rank": 34,
                                "type": "OFFER_RANK_TYPE_EARLIEST"
                            }
                        ],
                        "shipment": {
                            "createdAt": "2021-07-08T20:33:52+00:00",
                            "destination": "DFW",
                            "destinationCountry": "US",
                            "dropoffTime": "2021-07-16T00:00:00+02:00",
                            "goodsType": "general",
                            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
                            "isConsolidated": false,
                            "items": [
                                {
                                    "height": 20,
                                    "isTotalWeight": false,
                                    "length": 100,
                                    "quantity": 2,
                                    "stackable": false,
                                    "turnable": true,
                                    "weight": 12.0,
                                    "width": 30
                                },
                                {
                                    "height": 11,
                                    "isTotalWeight": true,
                                    "length": 25,
                                    "quantity": 15,
                                    "stackable": true,
                                    "turnable": false,
                                    "weight": 10.0,
                                    "width": 20
                                }
                            ],
                            "origin": "FRA",
                            "originCountry": "DE",
                            "pickupTime": "2021-07-24T23:59:59-05:00",
                            "productService": "PRODUCT_SERVICE_GENERAL",
                            "product_service_properties": {
                                "product_service_properties": {
                                    "general_properties": {
                                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                                    }
                                }
                            },
                            "screening": "screened",
                            "screeningStatus": "SCREENED",
                            "shipperStatus": "known",
                            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
                            "versionId": 1
                        },
                        "totalPrice": {
                            "amount": "1369.35",
                            "currency": "EUR"
                        },
                        "totalPricePerKilo": {
                            "amount": "30.43",
                            "currency": "EUR"
                        }
                    }
                }
            }
        },
        "searchMetadata": {
            "airlineStatuses": [
                {
                    "done": true,
                    "errors": [
                        {
                            "code": "AIRLINE_API_ERROR",
                            "field": "",
                            "message": "Shipment 3a50552c-7c43-4988-91d9-2d824305a128: API error on FetchOffers - [{'errorCode': 'EBL_AVL_005', 'message': 'No flights found for the search criteria'}]"
                        }
                    ],
                    "numberOfResults": 9,
                    "provider": "AIRLINE_PROVIDER_AA"
                },
                {
                    "done": true,
                    "errors": [
                        {
                            "code": "AIRLINE_API_ERROR",
                            "field": "",
                            "message": "API error"
                        }
                    ],
                    "numberOfResults": 0,
                    "provider": "AIRLINE_PROVIDER_ETIHAD"
                },
                {
                    "done": true,
                    "errors": [],
                    "numberOfResults": 3,
                    "provider": "AIRLINE_PROVIDER_COA"
                },
                {
                    "done": true,
                    "errors": [],
                    "numberOfResults": 23,
                    "provider": "AIRLINE_PROVIDER_LUFTHANSA_V2"
                },
                {
                    "done": true,
                    "errors": [
                        {
                            "code": "VALIDATION_ERROR_DESTINATION_NOT_SERVED",
                            "field": "",
                            "message": "The destination DFW is not served"
                        }
                    ],
                    "numberOfResults": 0,
                    "provider": "AIRLINE_PROVIDER_ECS"
                },
                {
                    "done": true,
                    "errors": [
                        {
                            "code": "VALIDATION_ERROR_DESTINATION_NOT_SERVED",
                            "field": "",
                            "message": "airport is currently not supported as a destination"
                        }
                    ],
                    "numberOfResults": 0,
                    "provider": "AIRLINE_PROVIDER_NCA"
                },
                {
                    "done": false,
                    "errors": [],
                    "numberOfResults": 0,
                    "provider": "AIRLINE_PROVIDER_VOLGA_DNEPR"
                }
            ]
        }
    }


    res.json(response).send()
})
app.get('/offers/bb999b11-fba5-4dc0-96c3-326c640f7a2b', (req, res) => {
    const response = {
        "acceptedAwbTypes": [
            "PAPER",
            "EAW",
            "EAP"
        ],
        "additionalData": "{}",
        "adjustments": {},
        "awbPrefix": "001",
        "chargeableWeight": 34.0,
        "createdAt": "1625776458255678",
        "dropoffLocation": {
            "city": "Frankfurt",
            "company_name": "",
            "country": "Germany",
            "po_info": "60549",
            "street": "Cargo City Sud"
        },
        "earliestAvailabilityTime": "2021-07-16T18:05:00-05:00",
        "flightSegments": [
            {
                "aircraftType": "HANDLING",
                "arrivalTime": "2021-07-16T10:30:00+02:00",
                "departureTime": "2021-07-16T06:30:00+02:00",
                "destination": "FRA",
                "flightNumber": "HANDLING",
                "origin": "FRA"
            },
            {
                "aircraftType": "7879",
                "arrivalTime": "2021-07-16T14:05:00-05:00",
                "departureTime": "2021-07-16T10:30:00+02:00",
                "destination": "DFW",
                "flightNumber": "AA0071",
                "origin": "FRA"
            },
            {
                "aircraftType": "HANDLING",
                "arrivalTime": "2021-07-16T18:05:00-05:00",
                "departureTime": "2021-07-16T14:05:00-05:00",
                "destination": "DFW",
                "flightNumber": "HANDLING",
                "origin": "DFW"
            }
        ],
        "hasAlternativeOrigin": false,
        "hasCargoOnlySegments": false,
        "id": "bb999b11-fba5-4dc0-96c3-326c640f7a2b",
        "latestAcceptanceTime": "2021-07-16T06:30:00+02:00",
        "legalEntity": "American Airlines, Inc.",
        "offerItems": [
            {
                "description": "route",
                "kiloPrice": {
                    "amount": "4.90",
                    "currency": "EUR"
                },
                "price": {
                    "amount": "166.60",
                    "currency": "EUR"
                }
            },
            {
                "description": "airfreight_fee",
                "kiloPrice": {
                    "amount": "0.35",
                    "currency": "EUR"
                },
                "price": {
                    "amount": "12.00",
                    "currency": "EUR"
                }
            }
        ],
        "pickupLocation": {
            "city": "DFW Airport",
            "company_name": "",
            "country": "USA",
            "po_info": "75261",
            "street": "1816 Airport North Service Road"
        },
        "priceType": "PRICE_TYPE_SRS",
        "product": {
            "carrier": "American Airlines",
            "logoUrl": "https://static-cargo-one.s3.eu-central-1.amazonaws.com/production/american-airlines_logo_6b0736e9-b9d6-42bc-b869-5ffc20732124.png",
            "product": "ExpediteFS"
        },
        "provider": "AIRLINE_PROVIDER_AA",
        "ranks": [
            {
                "rank": 1,
                "type": "OFFER_RANK_TYPE_BEST"
            },
            {
                "rank": 2,
                "type": "OFFER_RANK_TYPE_CHEAPEST"
            },
            {
                "rank": 2,
                "type": "OFFER_RANK_TYPE_EARLIEST"
            }
        ],
        "shipment": {
            "createdAt": "2021-07-08T20:33:52+00:00",
            "destination": "DFW",
            "destinationCountry": "US",
            "dropoffTime": "2021-07-16T00:00:00+02:00",
            "goodsType": "general",
            "id": "3a50552c-7c43-4988-91d9-2d824305a128",
            "isConsolidated": false,
            "items": [
                {
                    "height": 20,
                    "isTotalWeight": false,
                    "length": 100,
                    "quantity": 2,
                    "stackable": false,
                    "turnable": true,
                    "weight": 12.0,
                    "width": 30
                },
                {
                    "height": 11,
                    "isTotalWeight": true,
                    "length": 25,
                    "quantity": 15,
                    "stackable": true,
                    "turnable": false,
                    "weight": 10.0,
                    "width": 20
                }
            ],
            "origin": "FRA",
            "originCountry": "DE",
            "pickupTime": "2021-07-24T23:59:59-05:00",
            "productService": "PRODUCT_SERVICE_GENERAL",
            "product_service_properties": {
                "product_service_properties": {
                    "general_properties": {
                        "commodity": "GENERAL_COMMODITY_MISCELLANEOUS"
                    }
                }
            },
            "screening": "screened",
            "screeningStatus": "SCREENED",
            "shipperStatus": "known",
            "userId": "1120d007-e7fd-4298-a337-230445463dd9",
            "versionId": 1
        },
        "totalPrice": {
            "amount": "178.60",
            "currency": "EUR"
        },
        "totalPricePerKilo": {
            "amount": "5.25",
            "currency": "EUR"
        }
    }

    res.json(response).send()
})
app.get('/get-entity-metadata', (req, res) => {
    const response = {
        "header": {
            "success": true
        }
    }

    res.json(response).send()
})
// app.get('/', (req, res) => {
//     const response = ''
//     res.json(response).send()
// })
// app.get('/', (req, res) => {
//     const response = ''
//     res.json(response).send()
// })
// app.get('/', (req, res) => {
//     const response = ''
//     res.json(response).send()
// })