'use strict';

angular.module('todoClient', ['ngAnimate', 'ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', { templateUrl: 'app/about/about.html'})
      .when('/signup', { templateUrl: 'app/signup/signup.html'})
      .when('/login', { templateUrl: 'app/login/login.html'})
      .otherwise({
        redirectTo: '/'
      });
  })
;
