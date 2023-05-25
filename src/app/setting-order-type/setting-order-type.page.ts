import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { GlobalService } from '../global.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import { ToastController,Platform } from '@ionic/angular';

import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-setting-order-type',
  templateUrl: './setting-order-type.page.html',
  styleUrls: ['./setting-order-type.page.scss'],
})
export class SettingOrderTypePage implements OnInit {

  auth: any;
  setting: any = {
                    order_type1: 0,
                    order_type2: 0,
                    order_type3: 0,
                    order_type4: 0,
                    order_type5: 0,
                    order_type_label1: '',
                    order_type_label2: '',
                    order_type_label3: '',
                    order_type_label4: '',
                    order_type_label5: '',
                  };
  //
  // order_type1: any = false;
  // order_type2: any = false;
  // order_type3: any = false;
  // order_type4: any = false;
  // order_type5: any = false;
  //
  // order_type_label1: any = '';
  // order_type_label2: any = '';
  // order_type_label3: any = '';
  // order_type_label4: any = '';
  // order_type_label5: any = '';

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private http: HttpClient,
    private global: GlobalService,
    private router: Router,
    private toastController: ToastController,
    private storage: StorageService,
    private alertController: AlertController,
    private platform: Platform
  ) { }

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

    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};


    this.http.post(this.global.base_url+'auth/setting/data', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.setting = data.company;
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
  }

  process()
  {
    this.global.loadingPresent('menyimpan perubahan... ');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  order_type1: this.setting.order_type1,
                  order_type2: this.setting.order_type2,
                  order_type3: this.setting.order_type3,
                  order_type4: this.setting.order_type4,
                  order_type5: this.setting.order_type5,
                  order_type_label1: this.setting.order_type_label1,
                  order_type_label2: this.setting.order_type_label2,
                  order_type_label3: this.setting.order_type_label3,
                  order_type_label4: this.setting.order_type_label4,
                  order_type_label5: this.setting.order_type_label5
                };

      this.http.post(this.global.base_url+'auth/setting/order_type', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/tabs/tab-setting']);
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


}
