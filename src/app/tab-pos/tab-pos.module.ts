import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabPosPage } from './tab-pos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabPosPageRoutingModule } from './tab-pos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabPosPageRoutingModule,
  ],
  declarations: [TabPosPage]
})
export class TabPosPageModule {}
