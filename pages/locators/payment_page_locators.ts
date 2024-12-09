import { Locator, Page, FrameLocator } from 'playwright';

export class PaymentPageLocators {
    readonly iframePayment: Locator;
    readonly framePayment: FrameLocator;
    readonly cardNumber: Locator;
    readonly expiryDateInput: Locator;
    readonly cvcCodeInput: Locator;
    readonly paymentCountryDropdown: Locator;
    readonly paymentZipInput: Locator;
    readonly exitFromPaymentFrame: Locator;
    readonly submitPaymentButton: Locator;

    // Billing info
    readonly iframeBilling: Locator;
    readonly frameBilling: FrameLocator;
    readonly billingFullNameInput: Locator;
    readonly billingCountryInput: Locator;
    readonly billingAddressLine1Input: Locator;
    readonly billingCityInput: Locator;
    readonly billingOblastInput: Locator;
    readonly billingPostalCodeInput: Locator;
    readonly billingInfoContinueButton: Locator;

    constructor(page: Page) {
        // Payment frame
        this.framePayment = this.iframePayment.frameLocator("//div[@id='payment-element']/div/iframe");
        this.cardNumber = this.framePayment.locator("//input[@id='Field-numberInput']");
        this.expiryDateInput = this.framePayment.locator("//input[@id='Field-expiryInput']");
        this.cvcCodeInput = this.framePayment.locator("//input[@id='Field-cvcInput']");
        this.paymentCountryDropdown = this.framePayment.locator("//select[@id='Field-countryInput']");
        this.paymentZipInput = this.framePayment.locator("//input[@id='Field-postalCodeInput']");
        this.exitFromPaymentFrame = page.locator("body");
        this.submitPaymentButton = page.locator("//button[@id='submit']");

        // Billing info frame
        this.frameBilling = this.iframeBilling.frameLocator("//div[@id='address-element']/div/iframe");
        this.billingFullNameInput = this.frameBilling.locator("//input[@id='Field-nameInput']");
        this.billingCountryInput = this.frameBilling.locator("//input[@id='Field-countryInput']");
        this.billingAddressLine1Input = this.frameBilling.locator("//input[@id='Field-addressLine1Input']");
        this.billingCityInput = this.frameBilling.locator("//input[@id='Field-localityInput']");
        this.billingOblastInput = this.frameBilling.locator("//select[@id='Field-administrativeAreaInput']");
        this.billingPostalCodeInput = this.frameBilling.locator("//input[@id='Field-postalCodeInput']");
        this.billingInfoContinueButton = page.locator("//button[@id='infoSubmit']");
    }
}
