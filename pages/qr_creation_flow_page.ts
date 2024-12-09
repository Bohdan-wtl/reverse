import { BasePage, expect, Page } from "./base_page";
import { QrCreationLocators } from "./locators/qr_creation_flow_page_locators";

export class QrCreationFlowPage extends BasePage {
  private readonly locators: QrCreationLocators;

  constructor(page: Page){
    super(page);
    this.locators = new QrCreationLocators(page);
  }
}
