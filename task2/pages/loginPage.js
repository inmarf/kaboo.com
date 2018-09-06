import BasePage from './basePage';

class LoginPage extends BasePage {

  constructor() {
    super();
    //elements to access
    this.username = element(by.name("username"));
    this.password = element(by.name("password"));
    this.loginButton = element(by.id("submitLogin"));
    this.loginForm = element(by.id("formLogin"));

    this.url = '/en/login';
    this.pageLoaded = this.isVisible(this.username);
  }

  setUsename(user) {    
    this.username.sendKeys(user);
  }

  setPassword(pass) {
    this.password.sendKeys(pass);
  }

  login() {
    this.loginButton.click();
  }
}

export default new LoginPage();