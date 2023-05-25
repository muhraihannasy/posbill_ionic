import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDiscountPageRoutingModule } from './select-discount-routing.module';

import { SelectDiscountPage } from './select-discount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDiscountPageRoutingModule
  ],
  declarations: [SelectDiscountPage]
})
export class SelectDiscountPageModule {}
