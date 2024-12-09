import { BasePage, expect, Page } from "./base_page";
import { AccountPageLocators } from "./locators/my_account_page_locators";

export class MyAccountPage extends BasePage {
  private readonly locators: AccountPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new AccountPageLocators(page);
  }
}
