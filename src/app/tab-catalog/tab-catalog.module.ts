import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabCatalogPage } from './tab-catalog.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabCatalogPageRoutingModule } from './tab-catalog-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TabCatalogPage }]),
    TabCatalogPageRoutingModule,
  ],
  declarations: [TabCatalogPage]
})
export class TabCatalogPageModule {}
