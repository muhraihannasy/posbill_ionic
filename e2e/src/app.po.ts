import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/tabs/tab-dashboard");
  }

  getPageTitle() {
    return element(by.css("ion-title")).getText();
  }
}
