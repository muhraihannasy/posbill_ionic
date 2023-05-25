import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-outlet-add',
  templateUrl: './outlet-add.page.html',
  styleUrls: ['./outlet-add.page.scss'],
})
export class OutletAddPage implements OnInit {

  auth: any;
  outlet: any = {name:'',address:'',province_id:'',city:'',subdistrict_id:'',phone:''};
  province: any = [];
  city: any = [];
  subdistrict: any = [];

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this.router.navigate(['/outlet']);
    // });
  }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.global.loadingPresent('menyiapkan form registrasi outlet...');
    this.storage.getObject('auth').then((auth) => {
      this.auth = auth;
      this.getProvince();
    });
  }

  getProvince()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
     });

    let options = {headers: reqHeader};

    this.http.post(this.global.base_url+'auth/outlet/province', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.province = data.province;
         }

         this.global.loadingDismiss();
        }, error => {
         console.log(error);
          this.global.loadingDismiss();
    });
  }

  getCity()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
     });

    let options = {headers: reqHeader};

    let postData = {province_id: this.outlet.province_id};

    this.http.post(this.global.base_url+'auth/outlet/city', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.city = data.city;
           this.outlet.city_id = data.city[0].id;
           this.subdistrict = [];
           this.outlet.subdistrict_id = '';

           console.log(this.outlet.city_id);
         }

        }, error => {
         console.log(error);
    });
  }

  getSubdistrict()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
     });

    let options = {headers: reqHeader};

    let postData = {city_id: this.outlet.city_id};

    this.http.post(this.global.base_url+'auth/outlet/subdistrict', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.subdistrict = data.subdistrict;
           this.outlet.subdistrict_id = data.subdistrict[0].id;
         }

        }, error => {
         console.log(error);
    });
  }

  purchase(period)
  {
    if((this.outlet.name == '') || (this.outlet.address == '') || (this.outlet.province_id == '') || (this.outlet.city_id == '') || (this.outlet.subdistrict_id == ''))
    {
      this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
      return false;
    }

    if((this.outlet.name == null) || (this.outlet.address == null))
    {
      this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
      return false;
    }

    this.global.loadingPresent('menambah outlet...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  name: this.outlet.name,
                  address: this.outlet.address,
                  province_id: this.outlet.province_id,
                  city_id: this.outlet.city_id,
                  subdistrict_id: this.outlet.subdistrict_id,
                  phone: this.outlet.phone,
                  subscription: period,
                  type: 'New'
                };

      this.http.post(this.global.base_url+'auth/outlet/add', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/outlet']);
             window.open(data.payment.invoice_url);
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
