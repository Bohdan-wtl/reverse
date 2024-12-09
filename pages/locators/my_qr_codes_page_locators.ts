import { Locator, Page } from 'playwright';

export class MyQrCodesLocators {
    readonly downloadModalH3Title: Locator;
    readonly downloadModalCloseButton: Locator;
    readonly downloadQrCodeButton: Locator;
    readonly downloadButton: Locator;
    readonly pngFileDownload: Locator;
    readonly jpegFileDownload: Locator;
    readonly svgFileDownload: Locator;
    readonly pdfFileDownload: Locator;
    readonly epsFileDownload: Locator;
    readonly printFileDownload: Locator;
    readonly sizeOfQrFileDownloadDropdown: Locator;
    readonly sizeDefaultOfQrFileDownload: Locator;
    readonly size512OfQrFileDownload: Locator;
    readonly size1024OfQrFileDownload: Locator;
    readonly size2048OfQrFileDownload: Locator;
    readonly size4096OfQrFileDownload: Locator;
    readonly signUpSuccessImage: Locator;
    readonly createQrCodeButton: Locator;
    readonly headerCreateQrCodeButton: Locator;

    constructor(page: Page) {
        this.downloadModalH3Title = page.locator("//div[@id='DownloadModal']//h3");
        this.downloadModalCloseButton = page.locator("//div[@id='DownloadModal']//button[@type='button']");
        this.downloadQrCodeButton = page.locator(
            "//div[contains(@class,'position-relative')]/button[@data-target='#DownloadModal']"
        );
        this.downloadButton = page.locator("//div[@class='dl-modal-footer-buttons']/button");
        this.pngFileDownload = page.locator("//div[contains(@class,'dl-modal-option-card')]//h6[text()='PNG']");
        this.jpegFileDownload = page.locator("//div[contains(@class,'dl-modal-option-card')]//h6[text()='JPEG']");
        this.svgFileDownload = page.locator("//div[contains(@class,'dl-modal-option-card')]//h6[text()='SVG']");
        this.pdfFileDownload = page.locator("//div[contains(@class,'dl-modal-option-card')]//h6[text()='PDF']");
        this.epsFileDownload = page.locator("//div[contains(@class,'dl-modal-option-card')]//h6[text()='EPS']");
        this.printFileDownload = page.locator("//div[contains(@class,'dl-modal-option-card')]//h6[text()='Print']");
        this.sizeOfQrFileDownloadDropdown = page.locator(
            "//div[contains(@class,'dl-modal-size-picker')]/span[contains(@class,'icon-arrow-down')]"
        );
        this.sizeDefaultOfQrFileDownload = page.locator("//input[@id='Default']");
        this.size512OfQrFileDownload = page.locator("//input[@id='512x512']");
        this.size1024OfQrFileDownload = page.locator("//input[@id='1024x1024']");
        this.size2048OfQrFileDownload = page.locator("//input[@id='2048x2048']");
        this.size4096OfQrFileDownload = page.locator("//input[@id='4096x4096']");
        this.signUpSuccessImage = page.locator("//img[contains(@class,'dl-modal-head-img')]");
        this.createQrCodeButton = page.locator("//button[@data-target='#CreateQrCodeModal']");
        this.headerCreateQrCodeButton = page.locator("(//div[contains(@class, 'content-end')]/div)[2]");
    }
}
