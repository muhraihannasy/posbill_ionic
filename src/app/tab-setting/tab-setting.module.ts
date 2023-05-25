import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabSettingPage } from './tab-setting.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabSettingPageRoutingModule } from './tab-setting-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TabSettingPage }]),
    TabSettingPageRoutingModule,
  ],
  declarations: [TabSettingPage]
})
export class TabSettingPageModule {}
