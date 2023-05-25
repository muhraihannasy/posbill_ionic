import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabReportPage } from './tab-report.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabReportPageRoutingModule } from './tab-report-routing.module';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabReportPageRoutingModule,
    Ng2GoogleChartsModule
  ],
  declarations: [TabReportPage]
})
export class TabReportPageModule {}
