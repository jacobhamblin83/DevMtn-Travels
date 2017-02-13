angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, mainService){
    $scope.packages = mainService.travelInfo

})