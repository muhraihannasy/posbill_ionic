import { Component } from '@angular/core';

import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-tab-report',
  templateUrl: 'tab-report.page.html',
  styleUrls: ['tab-report.page.scss']
})
export class TabReportPage {

  auth: any = {token:''};
  totalGrossSales: any = 0;
  totalNetSales: any = 0;
  totalTrx: any = 0;
  totalQty: any = 0;
  topCustomer: any;
  outlet: any;
  outlet_id: any = 'All';
  start_date: any = '';
  end_date: any = '';

  showChart: any = false;

  productChartPie: any;

  company: any = {name:'',package:''};
  min_date: any = '';

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Produk', 'Total order']
    ],
    //firstRowIsData: true,
    options: {
      'title': 'Produk terlaris',
      'legend':'none',
      'chartArea': {
        'width':'100%',
        'height':'100%'
      },
    },
  };

  charttype: any = 'piechart';
  datachart: any = [];

  list: any;
  storageOrder: any;

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

    this.min_date = this.global.parsingDate(this.global.getFullYear2Ago()+'-'+this.global.getMonth2Ago()+'-01');
    this.start_date = this.global.parsingDate(this.global.getFullYear()+'-'+this.global.getMonth()+'-01');
    this.end_date = this.global.getDateOnlyNow();

  }

  ionViewWillEnter() {


    this.storage.getObject('auth').then((auth) => {
      this.auth = auth;
      this.getDataOutlet();

    });

    this.storage.getObject('company').then((company:any) => {
      this.company = company;
    });
  }

  changeEvent()
  {
    this.getDataSales();
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

  getDataSales()
  {
    this.storage.getObject('auth').then((auth:any) => {

      this.showChart = false;

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
             this.totalNetSales = data.total_net_sales;
             this.totalTrx = data.total_trx;
             this.totalQty = data.total_qty;
             console.log(data);
           }
           else
           {
             console.log(data);
           }

           this.getDataTopProduct();
           this.getDataTopCustomer();


          }, error => {

           console.log(error);
      });
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
           var i = 1;
           let other_product:number = 0;
           var chartPie = [['Produk','Total Order']];

           for(let item of data.product_top)
           {
             if(i<=10)
             {
               var thisItem = [item.product.name,parseInt(item.total_qty)];
               chartPie.push(thisItem);
             }
             if(i>10)
             {
               var thisQty = parseInt(item.total_qty);
               other_product += thisQty;
             }

             i++;
           }
           console.log(other_product);
           if(other_product > 0)
           {
             let other:any = ['Produk lainnya',other_product];
             chartPie.push(other);
           }

           this.productChartPie = chartPie;
           this.datachart = chartPie;

           console.log(chartPie);
           this.generatePieChart();

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

  getDataTopCustomer()
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

    this.http.post(this.global.base_url+'auth/report/top_customer_summary', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.topCustomer = data.customer_top;
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


  generatePieChart()
  {
     this.pieChart.dataTable  = this.productChartPie;
     this.pieChart.options = {
       'title': 'Produk terlaris',
       'legend':'none',
       'chartArea': {
         'width':'100%',
         'height':'100%'
       },
     };

     this.showChart = true;
     console.log(this.pieChart);
  }

  detail(id)
  {
    let options: NativeTransitionOptions = {
       direction: 'left',
       duration: 300,
       slowdownfactor: 0,
       slidePixels: 0,
       iosdelay: 0,
       androiddelay: 0,
       fixedPixelsTop: 0,
       fixedPixelsBottom: 0
      }

    this.nativePageTransitions.slide(options);

    this.router.navigate(['/orders-detail/'+id]);
  }

  ionViewWillLeave()
  {

  }

}
