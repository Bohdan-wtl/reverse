import { BasePage, expect, Page } from "./base_page";
import { AccountPageLocators } from "./locators/account_page_locators";

export class AccountPage extends BasePage {
  private readonly locators: AccountPageLocators;

  constructor(page: Page){
    super(page);
    this.locators = new AccountPageLocators(page);
  }
  
}
