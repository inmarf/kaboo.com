// Home Page is not an Angular Site
browser.ignoreSynchronization = true;
import BasePage from './BasePage';

class ProfilePage extends BasePage {

  constructor() {
    super();
    //elements to access
    this.uknownElement = element(by.id('profile'));

    this.url = '/en/profile';
    this.pageLoaded = this.isVisible(this.uknownElement);
  }
}

export default new ProfilePage();