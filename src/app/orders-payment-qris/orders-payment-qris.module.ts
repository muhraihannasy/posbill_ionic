import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { OrdersPaymentQrisPageRoutingModule } from './orders-payment-qris-routing.module';

import { OrdersPaymentQrisPage } from './orders-payment-qris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPaymentQrisPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [OrdersPaymentQrisPage]
})
export class OrdersPaymentQrisPageModule {}
