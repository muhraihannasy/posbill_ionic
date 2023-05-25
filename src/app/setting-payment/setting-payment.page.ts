import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-setting-payment',
  templateUrl: './setting-payment.page.html',
  styleUrls: ['./setting-payment.page.scss'],
})
export class SettingPaymentPage implements OnInit {

  auth: any;
  setting:any = {
    payment_cash:false,
    payment_debit_card: false,
    payment_credit_card:false,
    payment_qris: false,
    payment_qris_online:false,
    payment_transfer:false
  };

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private route: ActivatedRoute
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this.router.navigate(['/tabs/tab4']);
    // });
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
                    payment_cash: this.setting.payment_cash,
                    payment_debit_card: this.setting.payment_debit_card,
                    payment_credit_card:this.setting.payment_credit_card,
                    payment_qris: this.setting.payment_qris,
                    payment_qris_online: this.setting.payment_qris_online,
                    payment_transfer: this.setting.payment_transfer
                  };

        this.http.post(this.global.base_url+'auth/setting/payment', postData, options)
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
