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
    $scope.valide = false;
    $scope.affichageErreur = false;
    $scope.valideForm = function(){
      console.log('Transfer des données bancaires');
      var card = {
        number: $scope.carteInput,
        firstname: $scope.firstName,
        lastname: $scope.lastName,
        expiration: $scope.expireInput,
        cvv: $scope.cryptoInput
      };
      var amount = 50;
      $scope.valide = true;
      mainService.getCardInfos(card, amount).then(function(data){
        $scope.status = data.status;
        if ($scope.status === false){
            $scope.affichageErreur = true;
            $scope.error = data.error;
        }

      }, function (error) {
        console.log(error);
      });

    };

    $scope.goAccueil = function(){
      $scope.valide = false;
      $scope.affichageErreur = false;
    };
  });
