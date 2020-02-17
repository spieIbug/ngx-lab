import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl + '/login') as Promise<any>;
  }

  async typeUsername(value: string): Promise<any> {
    const userNameEl = element(by.id('username'));
    await userNameEl.clear();
    return userNameEl.sendKeys(value);
  }

  async typePassword(value: string): Promise<any> {
    const passwordEl = element(by.id('password'));
    await passwordEl.clear();
    return passwordEl.sendKeys(value);
  }

  async submit(): Promise<any> {
    const submitBtn = element(by.id('submit-login'));
    return submitBtn.click();
  }
}
