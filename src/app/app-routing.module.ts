import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "payment-options",
    loadChildren: () =>
      import("./payment-options/payment-options.module").then(
        (m) => m.PaymentOptionsPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterPageModule),
  },
  {
    path: "payment-finish",
    loadChildren: () =>
      import("./payment-finish/payment-finish.module").then(
        (m) => m.PaymentFinishPageModule
      ),
  },
  {
    path: "catalog-product",
    loadChildren: () =>
      import("./catalog-product/catalog-product.module").then(
        (m) => m.CatalogProductPageModule
      ),
  },
  {
    path: "catalog-product-edit/:id",
    loadChildren: () =>
      import("./catalog-product-edit/catalog-product-edit.module").then(
        (m) => m.CatalogProductEditPageModule
      ),
  },
  {
    path: "catalog-product-add",
    loadChildren: () =>
      import("./catalog-product-add/catalog-product-add.module").then(
        (m) => m.CatalogProductAddPageModule
      ),
  },
  {
    path: "catalog-category-add",
    loadChildren: () =>
      import("./catalog-category-add/catalog-category-add.module").then(
        (m) => m.CatalogCategoryAddPageModule
      ),
  },
  {
    path: "catalog-category-edit/:id",
    loadChildren: () =>
      import("./catalog-category-edit/catalog-category-edit.module").then(
        (m) => m.CatalogCategoryEditPageModule
      ),
  },
  {
    path: "blank",
    loadChildren: () =>
      import("./blank/blank.module").then((m) => m.BlankPageModule),
  },
  {
    path: "catalog-category",
    loadChildren: () =>
      import("./catalog-category/catalog-category.module").then(
        (m) => m.CatalogCategoryPageModule
      ),
  },
  {
    path: "orders-detail/:id/:source",
    loadChildren: () =>
      import("./orders-detail/orders-detail.module").then(
        (m) => m.OrdersDetailPageModule
      ),
  },
  {
    path: "setting-printer",
    loadChildren: () =>
      import("./setting-printer/setting-printer.module").then(
        (m) => m.SettingPrinterPageModule
      ),
  },
  {
    path: "launcher",
    loadChildren: () =>
      import("./launcher/launcher.module").then((m) => m.LauncherPageModule),
  },
  {
    path: "setting-sale",
    loadChildren: () =>
      import("./setting-sale/setting-sale.module").then(
        (m) => m.SettingSalePageModule
      ),
  },
  {
    path: "setting-format",
    loadChildren: () =>
      import("./setting-format/setting-format.module").then(
        (m) => m.SettingFormatPageModule
      ),
  },
  {
    path: "setting-payment",
    loadChildren: () =>
      import("./setting-payment/setting-payment.module").then(
        (m) => m.SettingPaymentPageModule
      ),
  },
  {
    path: "setting-discount",
    loadChildren: () =>
      import("./setting-discount/setting-discount.module").then(
        (m) => m.SettingDiscountPageModule
      ),
  },
  {
    path: "setting/order-payment",
    loadChildren: () =>
      import("./tab-setting/order-payment/order-payment.module").then(
        (m) => m.OrderPaymentPageModule
      ),
  },
  {
    path: "setting/format-printer",
    loadChildren: () =>
      import("./tab-setting/format-printer/format-printer.module").then(
        (m) => m.FormatPrinterPageModule
      ),
  },
  {
    path: "outlet",
    loadChildren: () =>
      import("./outlet/outlet.module").then((m) => m.OutletPageModule),
  },
  {
    path: "customer",
    loadChildren: () =>
      import("./customer/customer.module").then((m) => m.CustomerPageModule),
  },
  {
    path: "user",
    loadChildren: () =>
      import("./user/user.module").then((m) => m.UserPageModule),
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountPageModule),
  },
  {
    path: "subscription",
    loadChildren: () =>
      import("./subscription/subscription.module").then(
        (m) => m.SubscriptionPageModule
      ),
  },
  {
    path: "outlet-add",
    loadChildren: () =>
      import("./outlet-add/outlet-add.module").then(
        (m) => m.OutletAddPageModule
      ),
  },
  {
    path: "outlet-edit/:id",
    loadChildren: () =>
      import("./outlet-edit/outlet-edit.module").then(
        (m) => m.OutletEditPageModule
      ),
  },
  {
    path: "customer-edit/:id",
    loadChildren: () =>
      import("./customer-edit/customer-edit.module").then(
        (m) => m.CustomerEditPageModule
      ),
  },
  {
    path: "customer-add",
    loadChildren: () =>
      import("./customer-add/customer-add.module").then(
        (m) => m.CustomerAddPageModule
      ),
  },
  {
    path: "user-add",
    loadChildren: () =>
      import("./user-add/user-add.module").then((m) => m.UserAddPageModule),
  },
  {
    path: "user-edit/:id",
    loadChildren: () =>
      import("./user-edit/user-edit.module").then((m) => m.UserEditPageModule),
  },
  {
    path: "discount-add",
    loadChildren: () =>
      import("./discount-add/discount-add.module").then(
        (m) => m.DiscountAddPageModule
      ),
  },
  {
    path: "discount-edit/:id",
    loadChildren: () =>
      import("./discount-edit/discount-edit.module").then(
        (m) => m.DiscountEditPageModule
      ),
  },
  {
    path: "select-customer/:redirect",
    loadChildren: () =>
      import("./select-customer/select-customer.module").then(
        (m) => m.SelectCustomerPageModule
      ),
  },
  {
    path: "select-customer/:redirect/:id",
    loadChildren: () =>
      import("./select-customer/select-customer.module").then(
        (m) => m.SelectCustomerPageModule
      ),
  },
  {
    path: "select-discount/:source",
    loadChildren: () =>
      import("./select-discount/select-discount.module").then(
        (m) => m.SelectDiscountPageModule
      ),
  },
  {
    path: "select-discount/:source/:id",
    loadChildren: () =>
      import("./select-discount/select-discount.module").then(
        (m) => m.SelectDiscountPageModule
      ),
  },
  {
    path: "report-sales/:start_date/:end_date/:outlet_id",
    loadChildren: () =>
      import("./report-sales/report-sales.module").then(
        (m) => m.ReportSalesPageModule
      ),
  },
  {
    path: "report-product-sales/:start_date/:end_date/:outlet_id",
    loadChildren: () =>
      import("./report-product-sales/report-product-sales.module").then(
        (m) => m.ReportProductSalesPageModule
      ),
  },
  {
    path: "account-edit",
    loadChildren: () =>
      import("./account-edit/account-edit.module").then(
        (m) => m.AccountEditPageModule
      ),
  },
  {
    path: "inactive",
    loadChildren: () =>
      import("./inactive/inactive.module").then((m) => m.InactivePageModule),
  },
  {
    path: "setting-order-type",
    loadChildren: () =>
      import("./setting-order-type/setting-order-type.module").then(
        (m) => m.SettingOrderTypePageModule
      ),
  },
  {
    path: "booking",
    loadChildren: () =>
      import("./booking/booking.module").then((m) => m.BookingPageModule),
  },
  {
    path: "booking-detail/:id/:source",
    loadChildren: () =>
      import("./booking-detail/booking-detail.module").then(
        (m) => m.BookingDetailPageModule
      ),
  },
  {
    path: "booking-options",
    loadChildren: () =>
      import("./booking-options/booking-options.module").then(
        (m) => m.BookingOptionsPageModule
      ),
  },
  {
    path: "outlet-detail/:id",
    loadChildren: () =>
      import("./outlet-detail/outlet-detail.module").then(
        (m) => m.OutletDetailPageModule
      ),
  },
  {
    path: "orders-payment-qris/:id",
    loadChildren: () =>
      import("./orders-payment-qris/orders-payment-qris.module").then(
        (m) => m.OrdersPaymentQrisPageModule
      ),
  },
  {
    path: "orders-payment-ovo",
    loadChildren: () =>
      import("./orders-payment-ovo/orders-payment-ovo.module").then(
        (m) => m.OrdersPaymentOvoPageModule
      ),
  },
  {
    path: "help-chat",
    loadChildren: () =>
      import("./help-chat/help-chat.module").then((m) => m.HelpChatPageModule),
  },
  {
    path: "catalog-product-stock/:id/:type",
    loadChildren: () =>
      import("./catalog-product-stock/catalog-product-stock.module").then(
        (m) => m.CatalogProductStockPageModule
      ),
  },
  {
    path: "orders-payment/:id",
    loadChildren: () =>
      import("./orders-payment/orders-payment.module").then(
        (m) => m.OrdersPaymentPageModule
      ),
  },
  {
    path: "orders-edit/:id",
    loadChildren: () =>
      import("./orders-edit/orders-edit.module").then(
        (m) => m.OrdersEditPageModule
      ),
  },
  {
    path: "orders-edit/:id/:action",
    loadChildren: () =>
      import("./orders-edit/orders-edit.module").then(
        (m) => m.OrdersEditPageModule
      ),
  },
  {
    path: "select-product/:source/:id/:type",
    loadChildren: () =>
      import("./select-product/select-product.module").then(
        (m) => m.SelectProductPageModule
      ),
  },
  {
    path: "booking-edit/:id",
    loadChildren: () =>
      import("./booking-edit/booking-edit.module").then(
        (m) => m.BookingEditPageModule
      ),
  },
  {
    path: "booking-edit/:id/:action",
    loadChildren: () =>
      import("./booking-edit/booking-edit.module").then(
        (m) => m.BookingEditPageModule
      ),
  },
  {
    path: "setting-olshop",
    loadChildren: () =>
      import("./setting-olshop/setting-olshop.module").then(
        (m) => m.SettingOlshopPageModule
      ),
  },
  {
    path: "test",
    loadChildren: () =>
      import("./test/test.module").then((m) => m.TestPageModule),
  },
  {
    path: "information-detail/:id",
    loadChildren: () =>
      import("./information-detail/information-detail.module").then(
        (m) => m.InformationDetailPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
