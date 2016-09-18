(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController ($scope){
  $scope.name = "Manish";

  $scope.sayMessage = function() {
    return "Manish likes to play with his Raspberry Pi!";
  }
}

})();
