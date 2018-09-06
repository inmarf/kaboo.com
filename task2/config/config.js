// solves `SyntaxError: Unexpected token import`
require("babel-register")({
  presets: [ 'es2015' ]
});

// Protractor configuration
// https://github.com/angular/protractor/

// Doing this, we don't need to declare chai in all pages
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

'use strict';

exports.config = {
    // The timeout for each script run on the browser. This should be longer
    // than the maximum time your application needs to stabilize between tasks.
    allScriptsTimeout: 110000,

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://username:password@qatest.staging.kaboo.com',

    // Selenium server address
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // If true, only chromedriver will be started, not a standalone selenium.
    // Tests for browsers other than chrome will not run.
    //chromeOnly: true,
    // If enabled, you can specify the url for the chromedriver to be used
    //chromeDriver: '/usr/lib/chromium-browser/chromedriver',

    // list of files / patterns to load in the browser
    specs: [
        '../features/*.feature'
    ],

    // Patterns to exclude.
    exclude: [],

    // ----- Capabilities to be passed to the webdriver instance ----
    //
    //multiCapabilities: {
    //    browserName: process.env.TEST_BROWSER_NAME || "chrome"
    //},
    // For a full list of available capabilities, see
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities
    // and
    // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    // ----- The test framework -----
    //
    // Jasmine and Cucumber are fully supported as a test and assertion framework.
    // Mocha has limited beta support. You will need to include your own
    // assertion framework if working with mocha.
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    resultJsonOutputFile: "./reports/json/protractor_report.json",

    cucumberOpts: {
      strict: true,
      require: ["../stepDefinitions/*.js", "../support/*.js"],
      plugin: ["pretty"],
      tags: false,
      profile: false,
      'no-colors': true,
      format: ['progress']
    },

    //If your process abruptly stops with an exit code 199 then your steps most likely threw an uncaught exception.
    //Protractor is capturing these and exiting the process in this situation.
    // The solution is to upgrade to at least protractor version 4.0.10 and add the following to your protractor conf...
    ignoreUncaughtExceptions: true,
    includeStackTrace: true,

    onPrepare: function () {
        // By default set all the pages as "NON-ANGULAR"
        // So you can specify in a page object that the page is angular specifying this property
        // to false at the beggining of the object definition
        browser.ignoreSynchronization = false;
        // maximize the browser before executing the feature files
        //browser.manage().window().maximize();
        // set browser size...
        browser.manage().window().setSize(1024, 800);

        // Set chai expect as the global expect function
        global.expect = chai.expect;
    }
};