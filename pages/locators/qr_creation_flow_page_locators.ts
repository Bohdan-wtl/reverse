import { Locator, Page } from 'playwright';

export class QrCreationLocators {
    // Step 1 locators
    readonly step1BreadcrumbsSectionToVerifyPage: Locator;
    readonly menuBurgerButton: Locator;
    readonly websiteQrType: Locator;
    readonly pdfQrType: Locator;
    readonly linksQrType: Locator;
    readonly vcardQrType: Locator;
    readonly businessQrType: Locator;
    readonly imagesQrType: Locator;
    readonly videoQrType: Locator;
    readonly appsQrType: Locator;
    readonly couponQrType: Locator;
    readonly mp3QrType: Locator;
    readonly menuQrType: Locator;
    readonly wifiQrType: Locator;
    readonly facebookQrType: Locator;
    readonly instagramQrType: Locator;
    readonly socialMediaQrType: Locator;
    readonly whatsappQrType: Locator;
    readonly crossCloseButton: Locator;

    // Step 2 locators
    readonly backButton: Locator;
    readonly nextButton: Locator;
    readonly modalWindowStep2: string;
    readonly helpModalCloseButton: Locator;
    readonly customNameQrCodeDropdown: Locator;
    readonly customNameQrCodeInput: Locator;

    // QR code password
    readonly setupPasswordQrCodeDropdown: Locator;
    readonly passwordCheckbox: Locator;
    readonly passwordQrCodeInputField: Locator;

    // QR code folder
    readonly setupNewFolderQrCodeDropdown: Locator;
    readonly selectFolderTitleDropdown: Locator;
    readonly createNewFolderButton: Locator;

    // QR code fonts
    readonly updateFontsQrCodeDropdown: Locator;
    readonly fontsTitleDropdown: Locator;
    readonly fontsTextsDropdown: Locator;

    // QR code welcome screen
    readonly uploadWelcomeScreenQrCodeDropdown: Locator;
    readonly uploadWelcomeScreenQrCodeInput: Locator;

    // QR code color theme
    readonly updateColorThemeQrCodeDropdown: Locator;

    // Social networks
    readonly socialNetworkQrCodeDropdown: Locator;
    readonly socialNetworkUrlInput: Locator;
    readonly socialNetworkTextInput: Locator;

    // Contact details
    readonly contactDetailsQrCodeDropdown: Locator;
    readonly contactDetailsContactName: Locator;
    readonly contactDetailsQrCodeAddPhoneButton: Locator;
    readonly contactDetailsQrCodeAddPhoneLabel: Locator;
    readonly contactDetailsQrCodeAddPhoneNumber: Locator;
    readonly contactDetailsQrCodeDeletePhoneButton: Locator;

    constructor(page: Page) {
        // Step 1 locators
        this.step1BreadcrumbsSectionToVerifyPage = page.locator("//span[@id='tab1text']");
        this.menuBurgerButton = page.locator("//div[@id='openMenu']");
        this.websiteQrType = page.locator("//input[@data-qr_type='Url']/../../..");
        this.pdfQrType = page.locator("//input[@value='pdf']/../../..");
        this.linksQrType = page.locator("//input[@value='links']/../../..");
        this.vcardQrType = page.locator("//input[@value='vcard']/../../..");
        this.businessQrType = page.locator("//input[@value='business']/../../..");
        this.imagesQrType = page.locator("//input[@value='images']/../../..");
        this.videoQrType = page.locator("//input[@value='video']/../../..");
        this.appsQrType = page.locator("//input[@value='app']/../../..");
        this.couponQrType = page.locator("//input[@value='coupon']/../../..");
        this.mp3QrType = page.locator("//input[@value='mp3']/../../..");
        this.menuQrType = page.locator("//input[@value='menu']/../../..");
        this.wifiQrType = page.locator("//input[@value='wifi']/../../..");
        this.facebookQrType = page.locator("//input[@value='facebook']/../../..");
        this.instagramQrType = page.locator("//input[@value='instagram']/../../..");
        this.socialMediaQrType = page.locator("//input[@value='social']/../../..");
        this.whatsappQrType = page.locator("//input[@value='whatsapp']/../../..");
        this.crossCloseButton = page.locator("//button[@id='closeBtn']");

        // Step 2 locators
        this.backButton = page.locator("//button[@id='cancel']");
        this.nextButton = page.locator("//button[@id='temp_next']");
        this.modalWindowStep2 = "//div[@id='helpCarousel']";
        this.helpModalCloseButton = page.locator("//div[@id='helpCarousel']//button[@id='closeBtn']");
        this.customNameQrCodeDropdown = page.locator("//button[@data-target='#acc_nameOfQrCode']");
        this.customNameQrCodeInput = page.locator("//input[@id='name']");

        // QR code password
        this.setupPasswordQrCodeDropdown = page.locator("//button[@data-target='#acc_password']");
        this.passwordCheckbox = page.locator("//input[@id='passcheckbox']");
        this.passwordQrCodeInputField = page.locator("//input[@id='passwordField']");

        // QR code folder
        this.setupNewFolderQrCodeDropdown = page.locator("//button[@data-target='#acc_folder']");
        this.selectFolderTitleDropdown = page.locator("//input[@id='folder_title']");
        this.createNewFolderButton = page.locator("//button[@id='createFolderBtn']");

        // QR code fonts
        this.updateFontsQrCodeDropdown = page.locator("//button[@data-target='#acc_nameOfFonts']");
        this.fontsTitleDropdown = page.locator("//div[@id='dropdown_title']/../div/button[@class='drp-icon-btn-open']");
        this.fontsTextsDropdown = page.locator("//div[@id='dropdown_text']/../div/button[@class='drp-icon-btn-open']");

        // QR code welcome screen
        this.uploadWelcomeScreenQrCodeDropdown = page.locator("//button[@data-target='#acc_welcomeScreen']");
        this.uploadWelcomeScreenQrCodeInput = page.locator("//input[@id='screen']");

        // QR code color theme
        this.updateColorThemeQrCodeDropdown = page.locator("//button[@data-target='#acc_Design']");

        // Social networks
        this.socialNetworkQrCodeDropdown = page.locator("//button[@data-target='#acc_social']");
        this.socialNetworkUrlInput = page.locator("//input[@id='socialUrl']");
        this.socialNetworkTextInput = page.locator("//input[@name='social_icon_text[]']");

        // Contact details
        this.contactDetailsQrCodeDropdown = page.locator("//button[@data-target='#acc_contactInfo']");
        this.contactDetailsContactName = page.locator("//input[@id='contactName']");
        this.contactDetailsQrCodeAddPhoneButton = page.locator("//button[@id='addPhone']");
        this.contactDetailsQrCodeAddPhoneLabel = page.locator("//input[@id='vcard_phoneLabel']");
        this.contactDetailsQrCodeAddPhoneNumber = page.locator("//input[@id='vcard_phone']");
        this.contactDetailsQrCodeDeletePhoneButton = page.locator(
            "//div[@id='phoneBlock']//button[contains(@class,'delete-btn vcard-remove')]"
        );
    }
}
