var {defineSupportCode} = require('cucumber');

import loginPage from '../pages/loginPage';
import testData from '../data/testData';

defineSupportCode(function({setDefaultTimeout, After, Given, When, Then}) {
    setDefaultTimeout(60 * 1000);
    After((scenario, done) => done());

    Given(/^user is on login page$/, function () {
        loginPage.goto();
        loginPage.titleIs("Login to Kaboo | Kaboo Casino");
        //next();
    });

    When(/^fills username\/password$/, function(next) {
        loginPage.setUsename(testData.testUser.username);
		loginPage.setPassword(testData.testUser.password);
        next();
    });

    When(/^clicks Log in button$/, function() {
        loginPage.login();
    });

    Then(/^user should be redirected to account page \/profile$/, function(next) {
        browser.waitForAngular();
        expect(loginPage.loginForm.isPresent()).to.eventually.be.false.and.notify(next);
    });
});