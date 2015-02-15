'use strict';

angular.module('todoClient').controller('MainCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});
