import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Filesystem } from "@capacitor/filesystem";

import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;
import { finalize, map } from "rxjs/operators";

import { PopoverChatComponent } from "../popover-chat/popover-chat.component";
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../global.service";
import { StorageService } from "../storage.service";
import { HelpChatService } from "./help-chat.service";

import { v4 as uuidv4 } from "uuid";
import * as firebase from "firebase";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";

import { type } from "os";

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

  typeMessage: any = "message";
  messages: any = [];

  selectedFile: any;
  uploadProgress: number;
  downloadURL: string;

  constructor(
    private popoverController: PopoverController,
    private http: HttpClient,
    private global: GlobalService,
    private storage: StorageService,
    private storageFirebase: AngularFireStorage,
    private chat: HelpChatService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {
    this.storage.getObject("user").then((data) => {
      const id = data?.id;
      this.currentUserId = id;
      this.createRoom(id);

      this.db
        .list(`/dialog/${id}/messages`)
        .query.orderByChild("timestamp")
        .on("value", (snapshot) => {
          // Mendapatkan data yang diurutkan berdasarkan timestamp
          const coba = [];
          snapshot.forEach((childSnapshot) => {
            coba.push(childSnapshot.val());
          });

          this.messages = coba;
        });
    });
  }

  createRoom(id: any) {
    const room = {
      messages: "",
      unread: {
        admin: 0,
        user: 0,
      },
    };
    this.chat.createDialog(room, id);
  }

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

  onFileSelected(files: FileList) {
    this.selectedFile = files.item(0);
    if (files.item(0).type == "image/png") {
      this.typeMessage = "image";
      return;
    }

    this.typeMessage = "file";
  }

  onClosePreview() {
    this.typeMessage = "message";
    this.selectedFile = "";
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

  sendMessage() {
    const uuid = uuidv4();
    const dataMockup = {
      admin_id: "",
      sender_type: "user",
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    };

    if (this.typeMessage == "message") {
      const data = {
        ...dataMockup,
        body: this.message,
        type: "text",
      };

      this.message = "";
      this.chat.createMessage(data, this.currentUserId, uuid);
      return;
    }
    if (this.selectedFile) {
      const filePath = `attachments/${uuidv4()}_${this.selectedFile.name}`;
      const fileRef = this.storageFirebase.ref(filePath);
      const uploadTask = this.storageFirebase.upload(
        filePath,
        this.selectedFile
      );

      uploadTask.percentageChanges().subscribe((percentage) => {
        this.uploadProgress = Math.round(percentage);
      });

      uploadTask
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.downloadURL = url;

              const data = {
                ...dataMockup,
                body: url,
                type: this.typeMessage,
              };
              this.chat.createMessage(data, this.currentUserId, uuid);

              this.selectedFile = "";
              this.onClosePreview();
            });
          })
        )
        .subscribe();
    }
  }
}
