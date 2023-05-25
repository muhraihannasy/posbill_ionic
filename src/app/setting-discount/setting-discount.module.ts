import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingDiscountPageRoutingModule } from './setting-discount-routing.module';

import { SettingDiscountPage } from './setting-discount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingDiscountPageRoutingModule
  ],
  declarations: [SettingDiscountPage]
})
export class SettingDiscountPageModule {}
