import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportProductSalesPageRoutingModule } from './report-product-sales-routing.module';

import { ReportProductSalesPage } from './report-product-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportProductSalesPageRoutingModule
  ],
  declarations: [ReportProductSalesPage]
})
export class ReportProductSalesPageModule {}
