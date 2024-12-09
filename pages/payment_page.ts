import { BasePage, expect, Page } from "./base_page";
import { PaymentPageLocators } from "./locators/payment_page_locators";

export class PaymentPage extends BasePage {
  private readonly locators: PaymentPageLocators;

  constructor(page: Page){
    super(page);
    this.locators = new PaymentPageLocators(page);
  }
}
