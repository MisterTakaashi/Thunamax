'use strict';

/**
 * @ngdoc overview
 * @name thunamaxApp
 * @description
 * # thunamaxApp
 *
 * Main module of the application.
 */
angular
  .module('thunamaxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
