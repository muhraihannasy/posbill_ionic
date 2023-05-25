import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpChatPageRoutingModule } from './help-chat-routing.module';

import { HelpChatPage } from './help-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpChatPageRoutingModule
  ],
  declarations: [HelpChatPage]
})
export class HelpChatPageModule {}
