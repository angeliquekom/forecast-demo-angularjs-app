'use strict';

/**
 * @ngdoc function
 * @name forecastAngularjsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forecastAngularjsAppApp
 */
angular.module('forecastControllers', [])
  .controller('MainCtrl', ['$scope', '$log', '$http', 'forecast', function ($scope, $log, $http, forecast) {

    var vm = this;

    vm.show = false;

    vm.ActiveCity = false;

    function getMainCities() {

      var mainCities = ['London', 'Cambridge', 'Oxford'];

      var citiesForecast = {};

     forecast(mainCities).then(function(data){
        vm.cityDataMain = data;
      })
    }

    getMainCities();

  }]);
