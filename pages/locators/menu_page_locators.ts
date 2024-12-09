import { Locator, Page } from 'playwright';

export class MenuPageLocators {
    readonly createQrCode: Locator;
    readonly analytics: Locator;
    readonly myQrCodes: Locator;
    readonly myAccount: Locator;
    readonly billing: Locator;

    constructor(page: Page) {
        this.createQrCode = page.locator("//ul[@class='app-sidebar-links']/li[1]");
        this.analytics = page.locator("//ul[@class='app-sidebar-links']/li[2]");
        this.myQrCodes = page.locator("//ul[@class='app-sidebar-links']/li[3]");
        this.myAccount = page.locator("//ul[@class='app-sidebar-links']/li[4]");
        this.billing = page.locator("//ul[@class='app-sidebar-links']/li[5]");
    }
}
