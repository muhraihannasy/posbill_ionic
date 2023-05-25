import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogProductAddPageRoutingModule } from './catalog-product-add-routing.module';

import { CatalogProductAddPage } from './catalog-product-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogProductAddPageRoutingModule
  ],
  declarations: [CatalogProductAddPage]
})
export class CatalogProductAddPageModule {}
