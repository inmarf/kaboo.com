var {defineSupportCode} = require('cucumber');

import signUpPage from '../pages/signUpPage';
import testData from '../data/testData';

defineSupportCode(function({setDefaultTimeout, After, Given, When, Then}) {
    setDefaultTimeout(60 * 1000);
    After((scenario, done) => done());

    Given(/^user is on signup page$/, function () {
        signUpPage.goto();
    });

    When(/^fills all fields with valid data on step 1$/, function(next) {
        signUpPage.step1.setEmail("oneEmail@anemail.com");
        signUpPage.step1.setUsername("Paulino");
        signUpPage.step1.setPassword("aValid1Password");
        signUpPage.step1.setTermsAccepted();
        next();
    });

    When(/^clicks NEXT$/, function(next) {
        expect(signUpPage.step1.cmdNext.isEnabled()).to.be.eventually.true;
        signUpPage.step1.nextStep();
        next();
    });

    When(/^fills all fields with valid data from step 2$/, function(next) {
        signUpPage.step2.setFirstname("Miguel");
        signUpPage.step2.setLastname("de Maria");
        signUpPage.step2.setAddress("Any place in the world");
        signUpPage.step2.setBirthDate(11,11,1983);
        signUpPage.step2.setCountry("LK");  // Sri Lanka
        signUpPage.step2.setCity("Malaga");
        signUpPage.step2.setCurrency("EUR");
        signUpPage.step2.setPhoneNumber("690000000");
        signUpPage.step2.setPostalCode("29580");
        next();
    });

    Then(/^register button is enable and clickable$/, function(next) {
        expect(signUpPage.hasClass(signUpPage.step2.cmdEnterYourDetails, 'is-inactive')).to.be.eventually.false;
        expect(signUpPage.step2.cmdEnterYourDetails.isEnabled()).to.be.eventually.true.and.notify(next);
    });
});
