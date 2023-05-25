import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportSalesPageRoutingModule } from './report-sales-routing.module';

import { ReportSalesPage } from './report-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportSalesPageRoutingModule
  ],
  declarations: [ReportSalesPage]
})
export class ReportSalesPageModule {}
