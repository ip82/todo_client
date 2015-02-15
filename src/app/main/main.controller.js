'use strict';

angular.module('todoClient').controller('MainCtrl', function ($scope, $location) {
    $scope.isOnPage = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});
