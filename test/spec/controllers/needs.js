'use strict';

describe('Controller: NeedsCtrl', function () {

  // load the controller's module
  beforeEach(module('envosApp'));

  var NeedsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NeedsCtrl = $controller('NeedsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
