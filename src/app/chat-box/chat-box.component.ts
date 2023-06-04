import { Component, Input, OnInit } from "@angular/core";
declare var cordova: any;

@Component({
  selector: "app-chat-box",
  templateUrl: "./chat-box.component.html",
  styleUrls: ["./chat-box.component.scss"],
})
export class ChatBoxComponent implements OnInit {
  @Input() chat: any;
  @Input() current_user_id: any;

  constructor() {}

  ngOnInit() {}

  downloadFile(url) {
    const fileTransfer = new cordova.plugins.FileTransfer();
    const fileUrl = url;
    const targetDirectory = cordova.file.externalRootDirectory + "Download/";
    const timestamp = new Date().getTime();
    const targetPath = targetDirectory + timestamp;

    fileTransfer.download(
      fileUrl,
      targetPath,
      (entry) => {
        console.log("File downlopaded at:", entry.toURL());
      },
      (error) => {
        console.error("Error downloading file:", error);
      }
    );
  }
}
