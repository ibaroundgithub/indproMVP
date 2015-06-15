'use strict';

angular.module('ibAround')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/sales', {
                templateUrl: 'app/sales/sales.html',
                controller: 'SalesCtrl',
                authenticate: true
            });
    });