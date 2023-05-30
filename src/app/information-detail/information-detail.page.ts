import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  baseUrl = this.global.base_url;
  disabledAnimation: any = false;
  src: any = "https://via.placeholder.com/800x400";

  company: any;
  outlet: any;
  user: any;
  information: any = "";

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
  }

  ionViewWillEnter() {
    this.showContent = false;
    this.platform.ready().then(() => {
      this.storage.getObject("auth").then((auth: any) => {
        this.auth = auth;
        this.getData();
      });

      this.showContent = true;
    });
  }

  getData() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };
    this.http
      .get(this.global.base_url + "auth/information/" + this.id, options)
      .subscribe(
        (data: any) => {
          this.information = data?.information;
        },
        (error) => {
          console.log(error);
        }
      );
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
