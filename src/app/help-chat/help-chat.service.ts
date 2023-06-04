import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";

import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: "root",
})
export class HelpChatService {
  messages: any = [];
  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {}

  createDialog(dialog: any, pathDialogId: any): any {
    const field = `/dialog/${pathDialogId}`;
    this.checkDataAvailability(field, dialog);
  }

  createMessage(message: any, pathDialogId, pathMessageId): any {
    const field = `/dialog/${pathDialogId}/messages/${pathMessageId}`;
    this.checkDataAvailability(field, message);
  }

  checkDataAvailability(field, data: any) {
    const dialogsRef = this.db.object(field);
    const ref = this.db.object(field).valueChanges();

    ref.subscribe((exits) => {
      if (exits) {
        console.log("ada");
      } else {
        dialogsRef.set(data);
        console.log("tidack ada");
      }
    });
  }

  uploadFile(selectedFile, uploadProgress, downloadURL) {}

  getMessages(pathDialogId) {}
}
