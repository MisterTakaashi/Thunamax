'use strict';

/**
 * @ngdoc service
 * @name thunamaxApp.mainService
 * @description
 * # mainService
 * Service in the thunamaxApp.
 */
angular.module('thunamaxApp')
  .service('mainService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var obj = {};
    obj.getCardInfos = function (card, amount) {
      method: 'POST',
      url: ':4040/checkout',
      params: {card, amount};
    }
    return obj;
  });
