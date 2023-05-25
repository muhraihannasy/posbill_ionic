import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { OrdersDetailPageRoutingModule } from './orders-detail-routing.module';

import { OrdersDetailPage } from './orders-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersDetailPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [OrdersDetailPage]
})
export class OrdersDetailPageModule {}
