import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;

import { PopoverChatComponent } from "../popover-chat/popover-chat.component";

@Component({
  selector: "app-help-chat",
  templateUrl: "./help-chat.page.html",
  styleUrls: ["./help-chat.page.scss"],
})
export class HelpChatPage implements OnInit {
  name: string = "Sender";
  message: string = "";
  isLoading = false;
  currentUserId = 3;
  chats = [
    { id: 1, sender: 1, message: "hi" },
    { id: 3, sender: 3, message: "hi ther" },
    {
      id: 3,
      sender: 3,
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit totam iste deserunt, alias sunt corporis quaerat voluptates fugiat aut eveniet.",
    },
    { id: 3, sender: 3, message: "hi ther" },
    { id: 3, sender: 3, message: "hi ther" },
    { id: 3, sender: 1, message: "hi ther" },
    { id: 3, sender: 1, message: "hi ther" },
    { id: 3, sender: 1, message: "hi ther" },
    { id: 3, sender: 1, message: "hi ther" },
    { id: 3, sender: 1, message: "hi ther" },
    { id: 3, sender: 1, message: "hi ther" },
    { id: 3, sender: 1, message: "hi ther" },
  ];

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

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    const imageUrl = image.webPath;
    console.log(imageUrl);
  }

  sendMessage() {}
}
