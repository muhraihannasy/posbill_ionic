import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabSettingPage } from './tab-setting.page';

const routes: Routes = [
  {
    path: '',
    component: TabSettingPage,
  },
  {
    path: 'format-printer',
    loadChildren: () => import('./format-printer/format-printer.module').then( m => m.FormatPrinterPageModule)
  },
  {
    path: 'order-payment',
    loadChildren: () => import('./order-payment/order-payment.module').then( m => m.OrderPaymentPageModule)
  },
  {
    path: 'online-shop',
    loadChildren: () => import('./online-shop/online-shop.module').then( m => m.OnlineShopPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabSettingPageRoutingModule {}
