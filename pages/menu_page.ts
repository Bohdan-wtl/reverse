import { BasePage, expect, Page } from "./base_page";
import { MenuPageLocators } from "./locators/menu_page_locators";

export class MenuPage extends BasePage {
  private readonly locators: MenuPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new MenuPageLocators(page);
  }
}
