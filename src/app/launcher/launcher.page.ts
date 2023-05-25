import { Component, OnInit } from "@angular/core";

import { GlobalService } from "../global.service";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

import { StorageService } from "../storage.service";

@Component({
  selector: "app-launcher",
  templateUrl: "./launcher.page.html",
  styleUrls: ["./launcher.page.scss"],
})
export class LauncherPage implements OnInit {
  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private router: Router,
    private toastController: ToastController,
    private storage: StorageService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.storage.getObject("auth").then((data) => {
      if (data != null) {
        this.router.navigate(["/tabs/tab-dashboard"]);
      } else {
        this.storage.clear().then(() => {
          this.storage.removeItem("auth");
          this.storage.removeItem("user");
          this.storage.removeItem("company");
          this.storage.removeItem("outlet_active");
          this.storage.removeItem("outlet");
          this.storage.removeItem("product");
          this.router.navigate(["/login"]);
        });
      }
    });
  }
}
