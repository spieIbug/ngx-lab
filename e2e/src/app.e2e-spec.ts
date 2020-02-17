import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { LoginPage } from './login.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let login: LoginPage;

  beforeEach(() => {
    page = new AppPage();
    login = new LoginPage();
  });

  it('should display ngxLab title', async () => {
    await login.navigateTo();
    await login.typeUsername('admin');
    await login.typePassword('admin');
    browser.sleep(2000);
    await login.submit();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    browser.sleep(2000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
