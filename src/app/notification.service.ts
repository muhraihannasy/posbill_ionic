import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private toastController: ToastController) {}

  async showNotification(header: string, message: string, buttons: any[] = []) {
    const toast = await this.toastController.create({
      header: header,
      message: message,
      buttons: buttons,
      duration: 5000,
      position: "top",
      color: "light",
      cssClass: "custom-toast",
    });

    toast.present();
  }
}
