import { BasePage, expect, Page } from "./base_page";
import { MyQrCodesLocators } from "./locators/my_qr_codes_page_locators";

export class MyQrCodesPage extends BasePage {
  private readonly locators: MyQrCodesLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new MyQrCodesLocators(page);
  }
}
