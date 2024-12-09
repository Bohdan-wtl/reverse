import { BasePage, expect, Page } from "./base_page";
import { AdminPageLocators } from "./locators/admin_page_locators";

export class AdminPage extends BasePage {
  private readonly locators: AdminPageLocators;

  constructor(page: Page){
    super(page);
    this.locators = new AdminPageLocators(page);
  }

}
