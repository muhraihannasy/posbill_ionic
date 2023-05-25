import { Component, OnInit } from '@angular/core';

import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@Component({
  selector: 'app-discount-add',
  templateUrl: './discount-add.page.html',
  styleUrls: ['./discount-add.page.scss'],
})
export class DiscountAddPage implements OnInit {

  auth: any;
  discount: any = {name:'',type:'Percentage',amount:''};

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
    //   this.router.navigate(['/setting-discount']);
    // });
   }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.storage.getObject('auth').then((auth) => {
      this.auth = auth;
    });
  }

  process()
  {
    if((this.discount.name == '') || (this.discount.type == '') || (this.discount.amount < 0))
    {
      this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
      return false;
    }

    this.global.loadingPresent('menambah diskon...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  name: this.discount.name,
                  type: this.discount.type,
                  amount: this.discount.amount
                };

      this.http.post(this.global.base_url+'auth/discount/add', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/setting-discount']);
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
