import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-setting-sale',
  templateUrl: './setting-sale.page.html',
  styleUrls: ['./setting-sale.page.scss'],
})
export class SettingSalePage implements OnInit {

  auth: any;
  setting: any = {service_charge:'',tax:''};

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
                  service_charge: this.setting.service_charge,
                  tax: this.setting.tax
                };

      this.http.post(this.global.base_url+'auth/setting/sale', postData, options)
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
