import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPaymentPageRoutingModule } from './orders-payment-routing.module';

import { OrdersPaymentPage } from './orders-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPaymentPageRoutingModule
  ],
  declarations: [OrdersPaymentPage]
})
export class OrdersPaymentPageModule {}
