import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogCategoryAddPageRoutingModule } from './catalog-category-add-routing.module';

import { CatalogCategoryAddPage } from './catalog-category-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogCategoryAddPageRoutingModule
  ],
  declarations: [CatalogCategoryAddPage]
})
export class CatalogCategoryAddPageModule {}
