import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogProductStockPageRoutingModule } from './catalog-product-stock-routing.module';

import { CatalogProductStockPage } from './catalog-product-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogProductStockPageRoutingModule
  ],
  declarations: [CatalogProductStockPage]
})
export class CatalogProductStockPageModule {}
