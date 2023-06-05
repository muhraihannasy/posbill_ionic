import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { GlobalService } from "../global.service";
import { ModalController } from "@ionic/angular";
import { ImageModalComponentComponent } from "../image-modal-component/image-modal-component.component";

@Component({
  selector: "app-chat-box",
  templateUrl: "./chat-box.component.html",
  styleUrls: ["./chat-box.component.scss"],
})
export class ChatBoxComponent implements OnInit {
  @Input() chat: any;
  @Input() current_user_id: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openImageModal(imageUrl: string) {
    const modal = await this.modalController.create({
      component: ImageModalComponentComponent,
      componentProps: {
        title: "Image Preview",
        imageUrl: imageUrl,
      },
    });

    return await modal.present();
  }

  getFormattedTime(time) {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return hours + ":" + minutes;
  }
}
