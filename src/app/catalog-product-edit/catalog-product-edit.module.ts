import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogProductEditPageRoutingModule } from './catalog-product-edit-routing.module';

import { CatalogProductEditPage } from './catalog-product-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogProductEditPageRoutingModule
  ],
  declarations: [CatalogProductEditPage]
})
export class CatalogProductEditPageModule {}
