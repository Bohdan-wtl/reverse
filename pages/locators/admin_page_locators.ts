import { Locator, Page } from 'playwright';

export class AdminPageLocators {
    // Admin Log In page
    readonly adminEmailInput: Locator;
    readonly adminPasswordInput: Locator;
    readonly adminLogInButton: Locator;

    // Admin left menu
    readonly menuDashboardButton: Locator;
    readonly menuUsersButton: Locator;
    readonly menuQrCodesButton: Locator;
    readonly menuArchivedQrCodesButton: Locator;
    readonly menuPaymentsButton: Locator;

    // Admin Users page
    readonly globalSearchInput: Locator;
    readonly searchButton: Locator;

    // User menu dropdown
    readonly generateDiscountUrlButton: Locator;

    // Link discount variables pop up
    readonly pricingPopupCloseButton: Locator;
    readonly defaultPricingButton: Locator;
    readonly discount70PromoButton: Locator;
    readonly discount899MonthlyButton: Locator;
    readonly discount50OneTimeButton: Locator;
    readonly createNewPasswordButton: Locator;
    readonly generateLinkButton: Locator;
    readonly generatedLink: Locator;

    // Refund form
    readonly fullRefundCancelSubscriptionButton: Locator;
    readonly fullRefundKeepSubscriptionButton: Locator;
    readonly partialRefundCancelSubscriptionButton: Locator;
    readonly partialRefundKeepSubscriptionButton: Locator;
    readonly refundConfirmButtonPaymentsTab: Locator;
    readonly refundAlertMessage: Locator;
    readonly refundAmountInputField: Locator;
    readonly refundAmountInputPaymentButton: Locator;

    // Log out button
    readonly adminLogoutArea: Locator;
    readonly adminLogoutButton: Locator;

    constructor(page: Page) {
        // Admin Log In page
        this.adminEmailInput = page.locator("//input[@id='input-email']");
        this.adminPasswordInput = page.locator("//input[@id='input-password']");
        this.adminLogInButton = page.locator("//button[@id='login-btn']");

        // Admin left menu
        this.menuDashboardButton = page.locator("//a[.//span[contains(text(),'Dashboard')]]");
        this.menuUsersButton = page.locator("//a[.//span[contains(text(),'Users')]]");
        this.menuQrCodesButton = page.locator("//a[.//span[text()='QR codes']]");
        this.menuArchivedQrCodesButton = page.locator("//a[.//span[contains(text(),'Archived')]]");
        this.menuPaymentsButton = page.locator("//a[.//span[contains(text(),'Payments')]]");

        // Admin Users page
        this.globalSearchInput = page.locator("//input[@id='global_search']");
        this.searchButton = page.locator("//button[contains(text(),'Search')]");

        // User menu dropdown
        this.generateDiscountUrlButton = page.locator("//div[contains(@class,'dropdown-menu')]/a[text()=' Generate URL']");

        // Link discount variables pop up
        this.pricingPopupCloseButton = page.locator("//div[@id='user_plan_generate_modal']//button[@class='close']");
        this.defaultPricingButton = page.locator("//h5[contains(text(),'Default Pricing Page')]");
        this.discount70PromoButton = page.locator("//h5[contains(text(),'70% OFF Promo Page')]");
        this.discount899MonthlyButton = page.locator("//h5[contains(text(),'$8.99 Monthly Page')]");
        this.discount50OneTimeButton = page.locator("//h5[contains(text(),'$50 One Time Payment Page')]");
        this.createNewPasswordButton = page.locator("//h5[contains(text(),'Create New Password')]");
        this.generateLinkButton = page.locator("//a[@id='user_payment_url']");
        this.generatedLink = page.locator("//div[contains(@class,'url-view-block active')]");

        // Refund form
        this.fullRefundCancelSubscriptionButton = page.locator("//label[.//input[@id='option1']]");
        this.fullRefundKeepSubscriptionButton = page.locator("//label[.//input[@id='option2']]");
        this.partialRefundCancelSubscriptionButton = page.locator("//label[.//input[@id='option3']]");
        this.partialRefundKeepSubscriptionButton = page.locator("//label[.//input[@id='option4']]");
        this.refundConfirmButtonPaymentsTab = page.locator("//button[@id='refund_btn']");
        this.refundAlertMessage = page.locator("//div[button[@data-dismiss='alert']]");
        this.refundAmountInputField = page.locator("//input[@id='refund_amount']");
        this.refundAmountInputPaymentButton = page.locator("//button[@id='partial_refund_btn']");

        // Log out button
        this.adminLogoutArea = page.locator("//ul[2]/li/a");
        this.adminLogoutButton = page.locator("//ul[2]/li/div/a");
    }
}
