import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpChatPage } from './help-chat.page';

const routes: Routes = [
  {
    path: '',
    component: HelpChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpChatPageRoutingModule {}
