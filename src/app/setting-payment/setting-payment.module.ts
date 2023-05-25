import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPaymentPageRoutingModule } from './setting-payment-routing.module';

import { SettingPaymentPage } from './setting-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPaymentPageRoutingModule
  ],
  declarations: [SettingPaymentPage]
})
export class SettingPaymentPageModule {}
