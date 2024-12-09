import { Locator, Page } from 'playwright';

export class PlansAndPriceLocators {
    readonly variablePlanButtonUniversalLocator: Locator;
    readonly monthlyBuyNowButton: Locator;
    readonly annuallyBuyNowButton: Locator;
    readonly quarterlyBuyNowButton: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.variablePlanButtonUniversalLocator = page.locator(
            "//div[@class='buy-btn-area']//a[@data-plan-name='Monthly'] | " +
            "//div[@class='buy-btn-area']//a[@data-plan-name='Annually'] | " +
            "//div[@class='buy-btn-area']//a[@data-plan-name='Quarterly'] | " +
            "//div[@class='buy-btn-area']//a[@data-plan-name='One Time'] | " +
            "//div[@class='buy-btn-area']//a[@data-plan-name='Discounted']"
        );
        this.monthlyBuyNowButton = page.locator("//a[@data-plan-name='Monthly']");
        this.annuallyBuyNowButton = page.locator("//a[@data-plan-name='Annually']");
        this.quarterlyBuyNowButton = page.locator("//a[@data-plan-name='Quarterly']");
        this.continueButton = page.locator("#user_plan_url");
    }
}
