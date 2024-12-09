import { Page } from "@playwright/test";
import { LoginPage } from "./login_page";
import { AccountPage } from "./account_page";
import { AdminPage } from "./admin_page";
import { MainPage } from "./main_page";
import { MenuPage } from "./menu_page";
import { MyAccountPage } from "./my_account_page";
import { MyQrCodesPage } from "./my_qr_codes_page";
import { PaymentPage } from "./payment_page";
import { PlansAndPricePage } from "./plans_and_prices_page";
import { QrCreationFlowPage } from "./qr_creation_flow_page";
import { RegisterPage } from "./register_page";

export const Pages = (page: Page) => {
  return {
    LoginPage: new LoginPage(page),
    AccountPage: new AccountPage(page),
    AdminPage: new AdminPage(page),
    MainPage: new MainPage(page),
    MenuPage: new MenuPage(page),
    MyAccountPage: new MyAccountPage(page),
    MyQrCodesPage: new MyQrCodesPage(page),
    PaymentPage: new PaymentPage(page),
    PlansAndPricePage: new PlansAndPricePage(page),
    QrCreationFlowPage: new QrCreationFlowPage(page),
    RegisterPage: new RegisterPage(page),
  };
};
