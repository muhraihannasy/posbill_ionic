import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Router } from "@angular/router";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor,
} from "@capacitor/core";
import { GlobalService } from "./global.service";
import { NotificationService } from "./notification.service";

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: "root",
})
export class FcmService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private global: GlobalService,
    private notification: NotificationService
  ) {}

  // Request permission to use push notifications
  // iOS will prompt user and return if they granted permission or not
  // Android will just grant without prompting

  public initPush() {
    this.registerPush();
  }

  private registerPush() {
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        var reqHeader = new HttpHeaders({
          "Content-Type": "application/json",
        });

        let options = { headers: reqHeader };

        let postData = {
          token: token.value,
        };

        this.http
          .post(this.global.base_url + "auth/fcm/add", postData, options)
          .subscribe(
            (data: any) => {
              console.log(data);
            },
            (error) => {
              console.log(error);
            }
          );
      }
    );

    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        const header = "Header";
        const message = "<strong>Ada Pesanan Nich</strong>";
        this.notification.showNotification(header, message);
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        alert("Push action performed: " + JSON.stringify(notification));
        if (data.detailsId) {
          this.router.navigateByUrl(`/orders-detail/${data.detailsId}/pos`);
        }
      }
    );
  }
}
