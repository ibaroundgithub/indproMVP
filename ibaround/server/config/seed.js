/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Sales = require('../api/sales/sales.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
    Thing.create({
        name : 'Sales volume',
        info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
        name : 'Sales turnover',
        info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
        name : 'AEDEUR',
        info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    },  {
        name : 'DowJones',
        info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
    },  {
        name : 'Passengers',
        info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    },{
        name : 'Temp',
        info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
});

User.find({}).remove(function() {
    User.create({
            provider: 'local',
            name: 'Test User',
            email: 'test@test.com',
            password: 'test'
        }, {
            provider: 'local',
            role: 'admin',
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'admin'
        }, function() {
            console.log('finished populating users');
        }
    );
});


Sales.find({}).remove(function() {
    Sales.create(
        {
            "Dates": "15-1-2014",
            "Context": {
                "AEDEUR": "0.00",
                "DowJones": "0.00",
                "Passengers": "0.00",
                "Temp": "0.00"
            },
            "Sales": {
                "SalesTurnover": "0.00",
                "SalesVolume": "0.00"
            }
        },
        {
            "Dates": "15-2-2014",
            "Context": {
                "AEDEUR": "-0.08",
                "DowJones": "-1.85",
                "Passengers": "-11.33",
                "Temp": "2.58"
            },
            "Sales": {
                "SalesTurnover": "-31.71",
                "SalesVolume": "-26.18"
            }
        },
        {
            "Dates": "15-3-2014",
            "Context": {
                "AEDEUR": "-1.31",
                "DowJones": "2.26",
                "Passengers": "10.76",
                "Temp": "10.21"
            },
            "Sales": {
                "SalesTurnover": "18.96",
                "SalesVolume": "15.75"
            }
        },
        {
            "Dates": "15-4-2014",
            "Context": {
                "AEDEUR": "0.13",
                "DowJones": "0.49",
                "Passengers": "-2.01",
                "Temp": "11.93"
            },
            "Sales": {
                "SalesTurnover": "10.91",
                "SalesVolume": "7.97"
            }
        },
        {
            "Dates": "15-5-2014",
            "Context": {
                "AEDEUR": "0.47",
                "DowJones": "1.03",
                "Passengers": "-17.42",
                "Temp": "7.21"
            },
            "Sales": {
                "SalesTurnover": "-12.72",
                "SalesVolume": "-21.57"
            }
        },
        {
            "Dates": "15-6-2014",
            "Context": {
                "AEDEUR": "1.05",
                "DowJones": "1.67",
                "Passengers": "-0.38",
                "Temp": "3.41"
            },
            "Sales": {
                "SalesTurnover": "-5.62",
                "SalesVolume": "-5.42"
            }
        },
        {
            "Dates": "15-7-2014",
            "Context": {
                "AEDEUR": "0.36",
                "DowJones": "0.91",
                "Passengers": "1.74",
                "Temp": "3.86"
            },
            "Sales": {
                "SalesTurnover": "2.09",
                "SalesVolume": "16.07"
            }
        },
        {
            "Dates": "15-8-2014",
            "Context": {
                "AEDEUR": "1.67",
                "DowJones": "-1.31",
                "Passengers": "28.94",
                "Temp": "-0.07"
            },
            "Sales": {
                "SalesTurnover": "-25.62",
                "SalesVolume": "-23.41"
            }
        },
        {
            "Dates": "15-9-2014",
            "Context": {
                "AEDEUR": "3.25",
                "DowJones": "1.93",
                "Passengers": "-10.61",
                "Temp": "-3.28"
            },
            "Sales": {
                "SalesTurnover": "16.19",
                "SalesVolume": "5.25"
            }
        },
        {
            "Dates": "15-10-2014",
            "Context": {
                "AEDEUR": "1.87",
                "DowJones": "-2.32",
                "Passengers": "0.78",
                "Temp": "-5.37"
            },
            "Sales": {
                "SalesTurnover": "16.35",
                "SalesVolume": "17.86"
            }
        },
        {
            "Dates": "15-11-2014",
            "Context": {
                "AEDEUR": "1.56",
                "DowJones": "5.67",
                "Passengers": "-7.07",
                "Temp": "-12.30"
            },
            "Sales": {
                "SalesTurnover": "5.35",
                "SalesVolume": "4.68"
            }
        },
        {
            "Dates": "15-12-2014",
            "Context": {
                "AEDEUR": "1.28",
                "DowJones": "0.60",
                "Passengers": "16.77",
                "Temp": "-8.40"
            },
            "Sales": {
                "SalesTurnover": "24.09",
                "SalesVolume": "13.90"
            }
        }, function() {
            console.log('finished populating sales data');
        }
    );
});