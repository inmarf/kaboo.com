import BasePage from './basePage';

class SignUpStepTwoModule extends BasePage {
  
  constructor() {
    super();
    this.txtFirstname = element(by.name("firstname"));
    this.txtLastname = element(by.name('lastname'));
    this.txtDays = element(by.name('days'));
    this.txtMonths = element(by.name('months'));
    this.txtYears = element(by.name('years'));
    this.txtAddress = element(by.name('address'));
    this.txtPostalCode = element(by.name('postalCode'));
    this.listCountry = element(by.css('div[class="c-dropdown__toggle c-dropdown__toggle--bottom e-flag e-flag--es"]')); //element(by.css('ul[class="c-dropdown__menu c-dropdown__menu--bottom e-flag e-flag--es"]'));
    this.listCurrency = element(by.css('div[class="c-dropdown__toggle  c-dropdown__toggle--bottom is-selected"]'));
    this.txtCity = element(by.name('city'));
    this.txtPhoneNumber = element(by.name('phoneNumber'));
    this.cmdEnterYourDetails = element(by.css('button[type="submit"]')); //element(by.css('button[class="e-btn m-auth-form__button m-auth-registration__button m-auth-registration__button--step2"]'));
  }

  setFirstname(firstname) {
    this.txtFirstname.sendKeys(firstname);
  }

  setLastname(lastname) {    
    this.txtLastname.sendKeys(lastname);
  }

  setBirthDate(day, month, year) {
    this.txtDays.sendKeys(day);
    this.txtMonths.sendKeys(month);
    this.txtYears.sendKeys(year);
  }

  setAddress(address) {
    this.txtAddress.sendKeys(address);
  }

  setPostalCode(postalcode) {
    this.txtPostalCode.sendKeys(postalcode);
  }

  setCity(city) {
    this.txtCity.sendKeys(city);
  }

  setPhoneNumber(phonenumber) {
    this.txtPhoneNumber.sendKeys(phonenumber);
  }

  setCountry(countrycode) {
    this.listCountry.click();
    element(by.css('a[data-value="'+countrycode+'"]')).click();
  }

  setCurrency(currencycode) {
    this.listCurrency.click();
    element(by.css('a[data-value="'+currencycode+'"]')).click();
  }
}

export default new SignUpStepTwoModule();