'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SalesSchema = new Schema({
    Dates: String,
    Context: {
        AEDEUR: String,
        DowJones:String,
        Passengers:String,
        Temp: String
    },
    Sales: {
        SalesTurnover: String,
        SalesVolume: String
    }
});

module.exports = mongoose.model('Sales', SalesSchema);