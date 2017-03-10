'use strict';

/**
 * @ngdoc service
 * @name thunamaxApp.mainService
 * @description
 * # mainService
 * Service in the thunamaxApp.
 */
angular.module('thunamaxApp')
  .service('mainService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var obj = {};
    obj.getCardInfos = function (card, amount) {
      return $http.post('http://localhost:4040/checkout', {card: card, amount: amount});
    };
    return obj;
  });
