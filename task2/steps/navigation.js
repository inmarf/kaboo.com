var {defineSupportCode} = require('cucumber');

import signUpPage from '../pages/signUpPage';
import testData from '../data/testData';

defineSupportCode(function({setDefaultTimeout, After, Given, When, Then}) {
    //setDefaultTimeout(60 * 1000);
    After((scenario, done) => done());

    Given(/^user is on \/(.*) page$/, function (page) {
        console.log("navigate to " + page);
        browser.get(page);
    });
});