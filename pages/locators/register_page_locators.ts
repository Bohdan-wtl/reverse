import { Locator, Page } from 'playwright';

export class RegisterPageLocators {
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signUpConfirmButton: Locator;

    constructor(page: Page) {
        this.emailInputField = page.locator("//input[@id='input-email']");
        this.passwordInputField = page.locator("//input[@id='input-password']");
        this.signUpConfirmButton = page.locator("//form[@id='register-form']/button[@class='-btn-submit']");
    }
}
