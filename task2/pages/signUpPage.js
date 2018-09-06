import BasePage from './basePage';
import SignUpStepOneModule from './signUpStep1.module';
import SignUpStepTwoModule from './signUpStep2.module';

class SignUpPage extends BasePage {
  
  constructor() {
    super();
    this.breadcrum = element(by.css("c-steps"));
    this.titleText = element(by.css('h1[class="e-title-auth ng-isolate-scope"]'));

    // Steps for the wizard
    this.step1 = SignUpStepOneModule;
    this.step2 = SignUpStepTwoModule;

    this.url = '/en/signup';
    this.pageLoaded = this.isVisible(this.titleText);
  }
}

export default new SignUpPage();