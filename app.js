(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController ($scope){
  $scope.name = "Manish";
  $scope.stateOfBird = "0";

  $scope.sayMessage = function () {
    return "Manish likes to play with his Raspberry Pi!";
  }

  $scope.changeBird = function () {
    $scope.stateOfBird = "1";
  }
}

})();
