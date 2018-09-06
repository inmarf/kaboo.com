// Home Page is not an Angular Site
browser.ignoreSynchronization = true;
import BasePage from './BasePage';

class HomePage extends BasePage {

  constructor() {
    super();
    //elements to access
    this.profileMenu = element(by.id('profile'));

    this.url = '/en/lobby';
    this.pageLoaded = this.isVisible(this.profileMenu);
  }
}

export default new HomePage();