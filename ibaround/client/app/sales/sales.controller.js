'use strict';

angular.module('ibAround')
    .controller('SalesCtrl', function ($scope, $http, socket) {
        $scope.awesomeThings = [];
        $scope.options = {/* JSON data */};
        $scope.data = {/* JSON data */};

        $http.get('/api/sales').success(function (salesData) {
            $scope.salesData = salesData;
        });
    });
