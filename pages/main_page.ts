import { BasePage, expect, Page } from "./base_page";
import { MainPageLocators } from "./locators/main_page_locators";

export class MainPage extends BasePage {
  private readonly locators: MainPageLocators;

  constructor(page: Page){
    super(page);
    this.locators = new MainPageLocators(page);
  }
}
