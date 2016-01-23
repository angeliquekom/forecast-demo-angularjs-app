'use strict';

/**
 * @ngdoc overview
 * @name forecastAngularjsAppApp
 * @description
 * # forecastAngularjsAppApp
 *
 * Main module of the application.
 */
angular
  .module('forecastAngularjsAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'forecastServices',
    'forecastControllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
