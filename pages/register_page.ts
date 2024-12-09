import { BasePage, expect, Page } from "./base_page";
import { RegisterPageLocators } from "./locators/register_page_locators";

export class RegisterPage extends BasePage {
  private readonly locators: RegisterPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new RegisterPageLocators(page);
  }
}
