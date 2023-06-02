import { Component, Input, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopoverChatComponent } from "../popover-chat/popover-chat.component";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"],
})
export class ChatPage implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async showPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PopoverChatComponent,
      event: event,
      translucent: true,
      componentProps: {
        title: "Judul Popover",
        message: "Ini adalah isi pesan popover.",
      },
    });
    return await popover.present();
  }
}
