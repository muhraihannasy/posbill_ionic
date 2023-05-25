import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { LoadingController, Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { BackButtonEvent } from '@ionic/core';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  auth: any;
  user: any = {name:'',level:''};

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private loadingController: LoadingController,
    private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private platform: Platform,
    private menu: MenuController
  ) {}

  ionViewWillEnter()
  {
      this.storage.getObject('auth').then((auth) => {
        this.auth = auth;

        this.storage.getObject('user').then((user) => {
          this.user = user;
          
        });
      });
  }

}
