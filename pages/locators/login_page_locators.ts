import { Locator, Page } from 'playwright';

export class LoginPageLocators {
    readonly emailLogIn: Locator;
    readonly passwordLogIn: Locator;
    readonly logInConfirmButton: Locator;

    constructor(page: Page) {
        this.emailLogIn = page.locator("//input[@id='input-email']");
        this.passwordLogIn = page.locator("//input[@id='input-password']");
        this.logInConfirmButton = page.locator("//button[@id='login-btn']");
    }
}
