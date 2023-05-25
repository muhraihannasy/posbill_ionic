import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogCategoryPageRoutingModule } from './catalog-category-routing.module';

import { CatalogCategoryPage } from './catalog-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogCategoryPageRoutingModule
  ],
  declarations: [CatalogCategoryPage]
})
export class CatalogCategoryPageModule {}
