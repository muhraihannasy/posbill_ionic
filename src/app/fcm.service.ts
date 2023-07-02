import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable,  } from "@angular/core";

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
import { StorageService } from "./storage.service";


@Injectable({
  providedIn: "root",
})
export class FcmService  {
  constructor(
    private router: Router,
    private http: HttpClient,
    private global: GlobalService,
    private notification: NotificationService,
    private storage: StorageService
    
  ) {
   
        // this.router.navigate([`orders-detail/e13af9b2-4a88-4f4b-bf4e-ca16068ef69f/list`]);

  }

  start_date:any = "";
  end_date:any = "";
  activeOutlet:any = "";

  // Request permission to use push notifications
  // iOS will prompt user and return if they granted permission or not
  // Android will just grant without prompting

  public initPush() {
      this.storage.getObject('user').then((user) => {
      this.registerPush(user.id);
      this.getActiveOutlet();
      this.start_date = this.global.parsingDate(
        this.global.getFullYear() + "-" + this.global.getMonth() + "-01"
      );
      this.end_date = this.global.getDateOnlyNow();
  });
  }

  private registerPush(user) {
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
          user_id: user,
          token: token.value,
        };

        this.http
          .post(this.global.base_url + "fcm/add/"+  token.value, postData, options)
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
        const header = notification.title;
        const message = notification.body;
        const id = notification.data.id;
        
      this.storage.getObject('auth').then((auth) => {
          
        var reqHeader = new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        });

        let options = { headers: reqHeader };

        let postdata = {
          outlet_id: this.activeOutlet.id,
          start_date: this.global.parsingDate(this.start_date),
          end_date: this.global.parsingDate(this.end_date),
        };

          this.http
          .post(
            this.global.base_url + "auth/order/last_per_outlet",
            postdata,
            options
          )
          .subscribe(
            (data: any) => {
              if (data.status == 0) {
                this.storage.setObject("order", data.order);
                console.log("Data Order", data.order);
                this.http.get('assets/dramatic_boom_effect.mp3', { responseType: 'blob' }).subscribe((audioBlob: Blob) => {
                      const audioUrl = URL.createObjectURL(audioBlob);
                      const audio = new Audio(audioUrl);

                      console.log(id, "id nya nih");
                      audio.play();
                      this.notification.showNotification(header, message, id);
                    });
              }     
            },
            (error) => {
              console.log(error);
            }
          );
        })
       
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        const id = notification.notification.data.id;
        const name = notification.notification.data.name;
        const phone = notification.notification.data.phone;

              this.storage.getObject('auth').then((auth) => {
          
        var reqHeader = new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        });

        let options = { headers: reqHeader };

        let postdata = {
          outlet_id: this.activeOutlet.id,
          start_date: this.global.parsingDate(this.start_date),
          end_date: this.global.parsingDate(this.end_date),
        };

          this.http
          .post(
            this.global.base_url + "auth/order/last_per_outlet",
            postdata,
            options
          )
          .subscribe(
            (data: any) => {
              if (data.status == 0) {
                this.storage.setObject("order", data.order);
                console.log("Data Order", data.order);
        
                this.router.navigate([`orders-detail/${id}/list`]);
        
              }     
            },
            (error) => {
              console.log(error);
            }
          );
        })
                
      }
    );
  }

    getActiveOutlet() {
    this.storage.getObject("outlet_active").then((data) => {
      if (data != null) {
        this.activeOutlet = data;
  
      }
    });
  }
}
