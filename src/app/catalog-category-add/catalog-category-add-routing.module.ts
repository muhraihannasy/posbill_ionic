import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogCategoryAddPage } from './catalog-category-add.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogCategoryAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogCategoryAddPageRoutingModule {}
