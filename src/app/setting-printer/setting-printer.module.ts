import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPrinterPageRoutingModule } from './setting-printer-routing.module';

import { SettingPrinterPage } from './setting-printer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPrinterPageRoutingModule
  ],
  declarations: [SettingPrinterPage]
})
export class SettingPrinterPageModule {}
