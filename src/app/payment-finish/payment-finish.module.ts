import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentFinishPageRoutingModule } from './payment-finish-routing.module';

import { PaymentFinishPage } from './payment-finish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentFinishPageRoutingModule
  ],
  declarations: [PaymentFinishPage]
})
export class PaymentFinishPageModule {}
