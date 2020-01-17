const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports.config = {
  baseUrl: 'http://automationpractice.com/index.php',
  directConnect: true,
  specs: ['spec/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['incognito']
    }
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true
        },
        spec: {
          displayFailed: true,
          displayPending: true,
          displayDuration: true,
          displayStackTrace: true
        },
        summary: {
          displayFailed: true
        }
      })
    );
  },
  jasmineNodeOpts: {
    print: function() {}
  }
};
