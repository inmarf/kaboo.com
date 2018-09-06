import BasePage from './basePage';

class SignUpStepOneModule extends BasePage {
  
  constructor() {
    super();

    this.txtEmail = element(by.name("email"));
    this.txtUsername = element(by.name("username"));
    this.txtPassword = element(by.css('input[name="password"]'));
    this.txtPasswordRepeat = element(by.css('input[name="passwordRepeat"]'));
    this.chkTermsAndConditions = element(by.css('svg[class="e-label__checkbox-icon"]')); //element(by.css('input[type=checkbox]')); //element(by.model('authModel.acceptNewsEmail')); //element(by.name("termsAndConditions"));
    this.cmdNext = element(by.css('button[class="e-btn m-auth-form__button m-auth-registration__button"]')); //element(by.buttonText("NEXT"));
  }

  setEmail(email) {
    this.txtEmail.sendKeys(email);
  }

  setUsername(user) {    
    this.txtUsername.sendKeys(user);
  }

  setPassword(pass) {
    this.txtPassword.sendKeys(pass);
    this.txtPasswordRepeat.sendKeys(pass);
  }

  setTermsAccepted() {
    this.chkTermsAndConditions.click();
  }

  nextStep() {
    this.cmdNext.click();
  }
}

export default new SignUpStepOneModule();