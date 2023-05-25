import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingSalePageRoutingModule } from './setting-sale-routing.module';

import { SettingSalePage } from './setting-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingSalePageRoutingModule
  ],
  declarations: [SettingSalePage]
})
export class SettingSalePageModule {}
