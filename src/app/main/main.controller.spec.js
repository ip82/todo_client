'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('todoClient'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));
  // future tests
});
