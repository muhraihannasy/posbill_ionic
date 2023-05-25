import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { LoadingController, Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { BackButtonEvent } from '@ionic/core';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-report-product-sales',
  templateUrl: './report-product-sales.page.html',
  styleUrls: ['./report-product-sales.page.scss'],
})
export class ReportProductSalesPage implements OnInit {

  auth: any;
  outlet: any;
  outlet_id: any = 'All';
  start_date: any = '';
  end_date: any = '';
  product:any;


  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private route: ActivatedRoute,
    private nativePageTransitions: NativePageTransitions
  ) {

    this.start_date = this.global.parsingDate(this.global.getFullYear()+'-'+this.global.getMonth()+'-01');
    this.end_date = this.global.getDateOnlyNow();
   }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.platform.ready().then(() => {
      this.storage.getObject('auth').then((auth) => {
        this.auth = auth;
        this.getDataOutlet();
        this.getDataTopProduct();
      });

    });
  }

  getDataOutlet()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};
    this.http.post(this.global.base_url+'auth/outlet/list', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.storage.setObject('outlet',data.outlet);
           this.outlet = data.outlet;

           console.log(data);
         }
         else
         {
           console.log(data);
         }


        }, error => {

         console.log(error);
    });
  }


  getDataTopProduct()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    let postData = {
                outlet_id: this.outlet_id,
                start_date: this.global.parsingDate(this.start_date),
                end_date: this.global.parsingDate(this.end_date)
              };

    this.http.post(this.global.base_url+'auth/report/sales_product_summary', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.product = data.product_top;
           console.log(data);
         }
         else
         {
           console.log(data);
         }

           this.global.loadingDismiss();
        }, error => {
          this.global.loadingDismiss();
         console.log(error);
    });
  }

}
