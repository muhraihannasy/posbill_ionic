import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

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

 async  updateUnread(pathDialogId) {
    let body = {
      admin: 0,
      user: 0
    };

    const field = `/dialog/${pathDialogId}/unread`;
    const unreadRef = this.db.object(field);
    const unreadRef2 = this.db.object(field);
      try {
        const unread:any = await unreadRef.valueChanges().pipe(take(1)).toPromise();
        body.admin = unread?.admin + 1;
        unreadRef2.set(body);
        

        console.log("body", body);

        // Lanjutkan dengan logika berikutnya di sini
        // ...
      } catch (error) {
        // Tangani kesalahan jika terjadi
      }

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
