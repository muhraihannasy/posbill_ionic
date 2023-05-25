import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingOlshopPageRoutingModule } from './setting-olshop-routing.module';

import { SettingOlshopPage } from './setting-olshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingOlshopPageRoutingModule
  ],
  declarations: [SettingOlshopPage]
})
export class SettingOlshopPageModule {}
