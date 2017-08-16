import { browser, by, element } from 'protractor';

export class ElectronTestePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('alt-root h1')).getText();
  }
}
