import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../global.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from "@ionic-native/native-page-transitions/ngx";
import { StorageService } from "../storage.service";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-information-detail",
  templateUrl: "./information-detail.page.html",
  styleUrls: ["./information-detail.page.scss"],
})
export class InformationDetailPage implements OnInit {
  id: any;
  source: any;
  auth: any;
  showContent: any = false;
  disabledAnimation: any = false;
  src: any = "https://via.placeholder.com/800x400";

  company: any;
  outlet: any;
  user: any;

  constructor(
    private http: HttpClient,
    public global: GlobalService,
    private router: Router,
    private route: ActivatedRoute,
    private nativePageTransitions: NativePageTransitions,
    private storage: StorageService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params["id"]) {
        this.id = params["id"];
      }
    });

    console.log(this.id);
  }

  ionViewWillEnter() {
    this.showContent = false;
    this.platform.ready().then(() => {
      this.storage.getObject("company").then((company: any) => {
        this.company = company;
      });

      this.storage.getObject("outlet_active").then((outlet: any) => {
        this.outlet = outlet;
      });

      this.storage.getObject("user").then((user: any) => {
        this.user = user;
      });

      this.storage.getObject("auth").then((auth: any) => {
        this.auth = auth;
      });

      this.showContent = true;
    });
  }

  goBackToTab() {
    let options: NativeTransitionOptions = {
      direction: "left",
      duration: 300,
      slowdownfactor: 0,
      slidePixels: 0,
      iosdelay: 0,
      androiddelay: 0,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 0,
    };

    this.nativePageTransitions.slide(options);

    this.router.navigate(["/tabs/tab-dashboard"]);
  }
}
