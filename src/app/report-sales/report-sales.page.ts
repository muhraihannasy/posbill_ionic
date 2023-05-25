import { Component, OnInit } from '@angular/core';

import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';



@Component({
  selector: 'app-report-sales',
  templateUrl: './report-sales.page.html',
  styleUrls: ['./report-sales.page.scss'],
})
export class ReportSalesPage implements OnInit {

  auth: any = {token:''};

  totalGrossSales: any = 0;
  totalDiscount: any = 0;
  totalNetSales: any = 0;
  totalServiceCharge: any = 0;
  totalTax: any = 0;
  totalCollected: any=0;
  totalCost: any = 0;
  totalExpense: any = 0;
  totalQty: any = 0;
  totalMargin: any = 0;
  outlet: any;
  outlet_id: any = 'All';
  start_date: any = '';
  end_date: any = '';
  totalTrx: any =0;
  company: any = {name: '',package: ''};
  min_date: any = '';

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

    this.route.params.subscribe((params: any) => {
      if(params['start_date'])
      {
        this.start_date = params['start_date'];
      }
      if(params['end_date'])
      {
        this.end_date = params['end_date'];
      }
      if(params['outlet_id'])
      {
        this.outlet_id = params['outlet_id'];
      }
    });
  }

  ngOnInit() {
    this.min_date = this.global.parsingDate(this.global.getFullYear2Ago()+'-'+this.global.getMonth2Ago()+'-01');
  }

  ionViewWillEnter() {

      this.storage.getObject('auth').then((auth) => {

        this.auth = auth;
        this.getDataOutlet();
        // this.getDataSales();
      });

      this.storage.getObject('company').then((company:any) => {
        this.company = company;
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
           this.getDataSales();

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

  changeEvent()
  {
    this.getDataSales();
  }

  getDataSales()
  {
    this.storage.getObject('auth').then((auth: any) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  outlet_id: this.outlet_id,
                  start_date: this.global.parsingDate(this.start_date),
                  end_date: this.global.parsingDate(this.end_date)
                };

      this.http.post(this.global.base_url+'auth/report/sales_summary', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.totalGrossSales = data.total_gross_sales;
             this.totalDiscount = data.total_discount;
             this.totalNetSales = data.total_net_sales;
             this.totalServiceCharge = data.total_service_charge;
             this.totalTax = data.total_tax;
             this.totalCollected = data.total_collected;
             this.totalCost = data.total_cost;
             this.totalMargin = data.total_margin;
             this.totalTrx = data.total_trx;
             this.totalQty = data.total_qty;
             console.log(data);
           }
           else
           {
             console.log(data);
           }


          }, error => {

           console.log(error);

      });
    });

  }

}
