import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-dashboard',
        loadChildren: () => import('../tab-dashboard/tab-dashboard.module').then(m => m.TabDashboardPageModule)
      },
      {
        path: 'tab-pos/:source',
        loadChildren: () => import('../tab-pos/tab-pos.module').then(m => m.TabPosPageModule)
      },
      {
        path: 'tab-pos',
        loadChildren: () => import('../tab-pos/tab-pos.module').then(m => m.TabPosPageModule)
      },
      {
        path: 'tab-order',
        loadChildren: () => import('../tab-order/tab-order.module').then(m => m.TabOrderPageModule)
      },
      {
        path: 'tab-order/:source/:id',
        loadChildren: () => import('../tab-order/tab-order.module').then(m => m.TabOrderPageModule)
      },
      {
        path: 'tab-report',
        loadChildren: () => import('../tab-report/tab-report.module').then(m => m.TabReportPageModule)
      },
      {
        path: 'tab-catalog',
        loadChildren: () => import('../tab-catalog/tab-catalog.module').then(m => m.TabCatalogPageModule)
      },
      {
        path: 'tab-setting',
        loadChildren: () => import('../tab-setting/tab-setting.module').then(m => m.TabSettingPageModule)
      },
      {
        path: 'blank',
        loadChildren: () => import('../blank/blank.module').then(m => m.BlankPageModule)
      },
      {
        path: 'category',
        redirectTo: '/tabs/tab-catalog',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/launcher',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
