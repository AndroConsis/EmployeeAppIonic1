'use strict';

describe('module: main, service: Database', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Database;
  beforeEach(inject(function (_Database_) {
    Database = _Database_;
  }));

  it('should do something', function () {
    expect(!!Database).toBe(true);
  });

});
