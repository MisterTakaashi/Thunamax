'use strict';

/**
 * @ngdoc function
 * @name thunamaxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thunamaxApp
 */
angular.module('thunamaxApp')
  .controller('MainCtrl', function ($scope, mainService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.valideForm = function(){
      console.log("Transfer des données bancaires");
      card = {
        infosCarte: $scope.carteInput,
        infosProprietaire: $scope.proprietaireInput,
        expire: $scope.expireInput,
        crypto: $scope.cryptoInput
      }
      var amount = 50;
      mainService.getCardInfos(card, amount);
    }
  });
