import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogCategoryEditPageRoutingModule } from './catalog-category-edit-routing.module';

import { CatalogCategoryEditPage } from './catalog-category-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogCategoryEditPageRoutingModule
  ],
  declarations: [CatalogCategoryEditPage]
})
export class CatalogCategoryEditPageModule {}
