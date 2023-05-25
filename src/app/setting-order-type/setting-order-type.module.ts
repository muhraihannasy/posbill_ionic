import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingOrderTypePageRoutingModule } from './setting-order-type-routing.module';

import { SettingOrderTypePage } from './setting-order-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingOrderTypePageRoutingModule
  ],
  declarations: [SettingOrderTypePage]
})
export class SettingOrderTypePageModule {}
