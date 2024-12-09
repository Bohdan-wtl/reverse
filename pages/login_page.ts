import { BasePage, expect, Page } from "./base_page";
import { LoginPageLocators } from "./locators/login_page_locators";

export class LoginPage extends BasePage {
  private readonly locators: LoginPageLocators;

  constructor(page: Page){
    super(page);
    this.locators = new LoginPageLocators(page);
  }

  async logIn(temporaryMail: string, signupPassword: string) {
    await this.locators.emailLogIn.fill(temporaryMail);
    await this.locators.passwordLogIn.fill(signupPassword);
    await this.locators.logInConfirmButton.click();
}
}
