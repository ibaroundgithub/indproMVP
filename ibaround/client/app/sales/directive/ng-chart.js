'use strict';

ibAroundApp.directive("ngChart", function () {

        function link(scope, element, attrs) {

            attrs.$observe("ngChart", function(value) {

                if (attrs.ngChart === undefined || attrs.ngChart === null || attrs.ngChart === "") {
                    return;
                }

                var salesData = JSON.parse(attrs.ngChart);
                console.log("Sales Data", salesData);

                // Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs,
                // and may do more in the future... it's NOT required
                nv.addGraph(function() {
                    var chart = nv.models.cumulativeLineChart()
                        .useInteractiveGuideline(true)
                        .x(function(d) { return d[0]; })
                        .y(function(d) { return d[1]/100; })
                        .color(d3.scale.category10().range())
                        .average(function(d) { return d.mean/100; })
                        .duration(500)
                        .clipVoronoi(true);

                    chart.dispatch.on('renderEnd', function() {
                        setTimeout(function(){
                            $(".nv-indexLine").hide();
                        }, 0);
                    });

                    var tickValues = [];
                    $(salesData).each(function(index, value){
                        tickValues.push(new Date(moment(value.Dates, "DD-MM-YYYY")._d).getTime());
                    });

                    chart.xAxis.tickValues(tickValues);
                    chart.xAxis.tickFormat(function(d) {
                        return d3.time.format('%b %Y')(new Date(d));
                    });

                    chart.yAxis.tickFormat(d3.format(',.1%'));

                    d3.select('#chart svg')
                        .datum(cumulativeTestData())
                        .call(chart);

                    nv.utils.windowResize(chart.update);

                    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
                    chart.state.dispatch.on('change', function(state){
                        nv.log('state', JSON.stringify(state));
                    });

                    return chart;
                });

                function flatTestData() {
                    return [{
                        key: "Snakes",
                        values: [0,1,2,3,4,5,6,7,8,9].map(function(d) {
                            var currentDate = new Date();
                            currentDate.setDate(currentDate.getDate() + d);
                            return [currentDate, 0];
                        })
                    }];
                }

                function cumulativeTestData() {

                    var salesDateArray = [];
                    $(salesData).each(function(index, value){

                        var contextKey,salesKey;
                        if(salesDateArray.length < 1){

                            contextKey = Object.keys(value.Context);
                            $(contextKey).each(function(keyIndex, keyValue){
                                salesDateArray.push({
                                    key : keyValue,
                                    values : [[new Date(moment(value.Dates, "DD-MM-YYYY")._d).getTime(), 0.00]]
                                });
                            });

                            salesKey = Object.keys(value.Sales);
                            $(salesKey).each(function(keyIndex, keyValue){
                                salesDateArray.push({
                                    key : keyValue,
                                    values : [[new Date(moment(value.Dates, "DD-MM-YYYY")._d).getTime(), 0.00]]
                                });
                            });

                        }
                        else{

                            contextKey = Object.keys(value.Context);
                            $(contextKey).each(function(keyIndex, keyValue) {
                                $(salesDateArray).each(function (salesIndex, salesValue) {
                                    if(salesValue.key === keyValue){
                                        salesValue.values.push([new Date(moment(value.Dates, "DD-MM-YYYY")._d).getTime(), parseFloat(value.Context[keyValue])]);
                                    }
                                });
                            });

                            salesKey = Object.keys(value.Sales);
                            $(salesKey).each(function(keyIndex, keyValue) {
                                $(salesDateArray).each(function (salesIndex, salesValue) {
                                    if(salesValue.key === keyValue){
                                        salesValue.values.push([new Date(moment(value.Dates, "DD-MM-YYYY")._d).getTime(), parseFloat(value.Sales[keyValue])]);
                                    }
                                });
                            });
                        }
                    });

                    return salesDateArray;

                }
            });
        }

        return {
            restrict: "AE",
            link: link
        };
});

//Method : extending the String type for format function support.
String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

if (typeof Object.keys !== "function") {
    (function() {

        function objectKeys(obj) {
            var keys = [], name;
            for (name in obj) {
                if (obj.hasOwnProperty(name)) {
                    keys.push(name);
                }
            }
            return keys;
        }
        Object.keys = objectKeys;

    })();
}
