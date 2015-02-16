'use strict';

angular.module('todoClient', ['ngAnimate', 'ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', { templateUrl: 'components/about/about.html'})
      .when('/signup', { templateUrl: 'components/signup/signup.html'})
      .when('/login', { templateUrl: 'components/login/login.html'})
      .otherwise({
        redirectTo: '/'
      });
  })
;
