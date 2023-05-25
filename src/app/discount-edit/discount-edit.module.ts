import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscountEditPageRoutingModule } from './discount-edit-routing.module';

import { DiscountEditPage } from './discount-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscountEditPageRoutingModule
  ],
  declarations: [DiscountEditPage]
})
export class DiscountEditPageModule {}
