import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  auth: any;
  company: any = {name: '',address:''};
  showContent: any = false;

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private route: ActivatedRoute
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


    this.http.post(this.global.base_url+'auth/me', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.company = data.company;

           console.log(data);
         }
         else
         {
           console.log(data);
         }
          this.showContent = true;
          this.global.loadingDismiss();

        }, error => {
         console.log(error);
    });
  }

  purchase(selectedPackage,selectedPeriod)
  {
    this.global.loadingPresent('memproses...');

    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    let postData = {package: selectedPackage, period: selectedPeriod}

    this.http.post(this.global.base_url+'auth/subscription/purchase', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           console.log(data);
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
  }

}
