'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /flexBox1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/flexBox1");
  });


  describe('flexBox1', function() {

    beforeEach(function() {
      browser.get('index.html#/flexBox1');
    });


    it('should render flexBox1 when user navigates to /flexBox1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for flexBox 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
