/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /sales              ->  index
 */

'use strict';

var _ = require('lodash');
var Sales = require('./sales.model');

// Get list of things
exports.index = function(req, res) {

     Sales.find(function (err, things) {
     if(err) { return handleError(res, err); }
     return res.json(200, things);
     });

};

function handleError(res, err) {
    return res.send(500, err);
}