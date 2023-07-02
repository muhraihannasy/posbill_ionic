import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private toastController: ToastController,
    private router: Router,
     ) {}

  async showNotification(header: string, message: string, id) {
    const toast = await this.toastController.create({
      header: header,
      message: message,
      buttons: [
        {
          side: "end",
          text: "lihat",
          handler: () => {
              this.router.navigate([`orders-detail/${id}/list`]);
          }
        }
      ],
      duration: 5000,
      position: "top",
      color: "light",
      cssClass: "custom-toast",
    });

    toast.present();
  }
}
