import { Locator, Page } from 'playwright';

export class MainPageLocators {
    readonly logInButton: Locator;
    readonly signUpButton: Locator;
    readonly mainLogoLink: Locator;

    constructor(page: Page) {
        this.logInButton = page.getByRole('link', { name: 'Log In' });
        this.signUpButton = page.getByRole('link', { name: 'Sign Up' });
        this.mainLogoLink = page.locator('.billing-nav .animate-logo');
    }
}
