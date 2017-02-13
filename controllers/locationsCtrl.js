angular.module('devmtnTravel')
.controller('locationsCtrl', function($scope, mainService){

    $scope.locations = mainService.travelInfo
    
})