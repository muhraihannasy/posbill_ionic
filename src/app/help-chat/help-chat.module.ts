import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HelpChatPageRoutingModule } from "./help-chat-routing.module";

import { HelpChatPage } from "./help-chat.page";
import { ChatBoxComponent } from "../chat-box/chat-box.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HelpChatPageRoutingModule],
  declarations: [HelpChatPage, ChatBoxComponent],
})
export class HelpChatPageModule {}
