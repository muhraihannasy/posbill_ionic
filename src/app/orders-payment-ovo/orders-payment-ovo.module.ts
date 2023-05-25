import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPaymentOvoPageRoutingModule } from './orders-payment-ovo-routing.module';

import { OrdersPaymentOvoPage } from './orders-payment-ovo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPaymentOvoPageRoutingModule
  ],
  declarations: [OrdersPaymentOvoPage]
})
export class OrdersPaymentOvoPageModule {}
