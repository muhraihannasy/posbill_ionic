import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscountAddPageRoutingModule } from './discount-add-routing.module';

import { DiscountAddPage } from './discount-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscountAddPageRoutingModule
  ],
  declarations: [DiscountAddPage]
})
export class DiscountAddPageModule {}
