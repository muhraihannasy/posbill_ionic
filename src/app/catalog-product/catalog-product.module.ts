import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogProductPageRoutingModule } from './catalog-product-routing.module';

import { CatalogProductPage } from './catalog-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogProductPageRoutingModule
  ],
  declarations: [CatalogProductPage]
})
export class CatalogProductPageModule {}
