import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-tab-catalog',
  templateUrl: 'tab-catalog.page.html',
  styleUrls: ['tab-catalog.page.scss']
})
export class TabCatalogPage implements OnInit {

  category: any;
  storageCategory: any = [];

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions
  ) {

  }

  ngOnInit()
  {

  }

  ionViewWillEnter()
  {

  }


  // ngOnDestroy(){
  //   this.category = [];
  //   this.storageCategory = [];
  // }
}
