'use strict';

describe('module: main, controller: NewEmployeeCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var NewEmployeeCtrl;
  beforeEach(inject(function ($controller) {
    NewEmployeeCtrl = $controller('NewEmployeeCtrl');
  }));

  it('should do something', function () {
    expect(!!NewEmployeeCtrl).toBe(true);
  });

});
