import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogProductEditPage } from './catalog-product-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogProductEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogProductEditPageRoutingModule {}
