'use strict';

/**
 * @ngdoc service
 * @name forecastAngularjsAppApp.forecast
 * @description
 * # forecast
 * Service in the forecastAngularjsAppApp.
 */
var forecastServices = angular.module('forecastServices',[]);

forecastServices.factory('forecast',function($q,$http){

  return function(cities){

    var promises = cities.map( function(city){

      var deffered  = $q.defer();
      $http({
        url : 'http://api.openweathermap.org/data/2.5/forecast?q='+city+',us&mode=json&appid=44db6a862fba0b067b1930da0d769e98',
        method: 'GET'
      }).
      success(function(data){
        deffered.resolve(data);
      }).
      error(function(error){
          deffered.reject();
      });

      return deffered.promise;

    })

    return $q.all(promises);
  }

});
