import { BasePage, expect, Page } from "./base_page";
import { PlansAndPriceLocators } from "./locators/plans_and_prices_page_locators";

export class PlansAndPricePage extends BasePage {
  private readonly locators: PlansAndPriceLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new PlansAndPriceLocators(page);
  }
}
