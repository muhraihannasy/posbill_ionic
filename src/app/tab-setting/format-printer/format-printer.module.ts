import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormatPrinterPageRoutingModule } from './format-printer-routing.module';

import { FormatPrinterPage } from './format-printer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormatPrinterPageRoutingModule
  ],
  declarations: [FormatPrinterPage]
})
export class FormatPrinterPageModule {}
