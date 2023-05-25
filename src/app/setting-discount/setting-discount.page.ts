import { Component, OnInit } from '@angular/core';

import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-setting-discount',
  templateUrl: './setting-discount.page.html',
  styleUrls: ['./setting-discount.page.scss'],
})
export class SettingDiscountPage implements OnInit {

  auth: any;
  discount: any;

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions
  ) {
  
  }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.storage.getObject('auth').then((auth) => {
      this.auth = auth;
      this.getData();
    });

  }

  getData()
  {
    this.global.loadingPresent('mengambil data...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      this.http.post(this.global.base_url+'auth/discount/list', null, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.discount = data.discount;
             console.log(data);

           }
           else
           {
             console.log(data);
           }

           this.global.loadingDismiss();

          }, error => {
           console.log(error);
      });

    });
  }

  typeFormat(amount,type)
  {
    if(type == 'Percentage')
    {
      return amount+'%';
    }
    else
    {
      return this.global.currency(amount);
    }
  }

}
