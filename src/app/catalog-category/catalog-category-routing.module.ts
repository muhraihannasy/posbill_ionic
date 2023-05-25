import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogCategoryPage } from './catalog-category.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogCategoryPageRoutingModule {}
