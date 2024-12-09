import { Locator, Page } from 'playwright';

export class AccountPageLocators {
    readonly myAccountName: Locator;
    readonly myAccountSurname: Locator;
    readonly myAccountEmail: Locator;
    readonly myAccountTelephone: Locator;
    readonly personalInfoSubmitButton: Locator;
    readonly passwordUpdateInput: Locator;
    readonly passwordUpdateConfirmInput: Locator;
    readonly passwordUpdateSubmitButton: Locator;
    readonly languageUpdate: Locator;
    readonly languageUpdateButton: Locator;
    readonly logOutButton: Locator;

    constructor(page: Page) {
        this.myAccountName = page.locator("//input[@id='name']");
        this.myAccountSurname = page.locator("//input[@id='surname']");
        this.myAccountEmail = page.locator("//div[@class='input-field-area']/input[@id='email']");
        this.myAccountTelephone = page.locator("//input[@id='telephone']");
        this.personalInfoSubmitButton = page.locator("//button[@id='sbmt']");
        this.passwordUpdateInput = page.locator("//input[@id='password']");
        this.passwordUpdateConfirmInput = page.locator("//input[@id='re_password']");
        this.passwordUpdateSubmitButton = page.locator("//button[@id='passSave']");
        this.languageUpdate = page.locator("//select[@id='language']");
        this.languageUpdateButton = page.locator("//button[@id='LangSave']");
        this.logOutButton = page.locator("//span[@class='icon-sign-out']/parent::a");
    }
}
