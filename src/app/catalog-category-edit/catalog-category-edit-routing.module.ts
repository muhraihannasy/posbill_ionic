import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogCategoryEditPage } from './catalog-category-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogCategoryEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogCategoryEditPageRoutingModule {}
