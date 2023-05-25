import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingFormatPageRoutingModule } from './setting-format-routing.module';

import { SettingFormatPage } from './setting-format.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingFormatPageRoutingModule
  ],
  declarations: [SettingFormatPage]
})
export class SettingFormatPageModule {}
