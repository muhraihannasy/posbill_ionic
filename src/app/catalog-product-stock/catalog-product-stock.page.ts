import { Component, OnInit } from '@angular/core';

import { NavController} from '@ionic/angular';
import { ToastController, AlertController } from '@ionic/angular';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-catalog-product-stock',
  templateUrl: './catalog-product-stock.page.html',
  styleUrls: ['./catalog-product-stock.page.scss'],
})
export class CatalogProductStockPage implements OnInit {

  auth: any;
  id: any;
  type: any;
  product: any;

  showContent:any = false;
  stockList: any = [];


  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    public navController: NavController,
    private route : ActivatedRoute,
    private transfer: FileTransfer,
    private file: File,
    private alertController: AlertController
  ) {
    this.route.params.subscribe((params: any) => {
      if(params['id'])
      {
        this.id = params['id'];
      }

      if(params['type'])
      {
        this.type = params['type'];
      }
    });
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

  add(id)
  {
    var stockIndex = this.stockList.findIndex(stock => stock.id == id);

    this.stockList[stockIndex].adjustment++;
  }

  remove(id)
  {
    var stockIndex = this.stockList.findIndex(stock => stock.id == id);

    if(this.stockList[stockIndex].adjustment > 0)
    {
      this.stockList[stockIndex].adjustment--;
    }

  }

  getData()
  {
    this.global.loadingPresent('mengambil data...');
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    let postData = {id: this.id};

    this.http.post(this.global.base_url+'auth/product/detail', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.product = data.product;

           var stockLists = [];
           for(let i of this.product.stock)
           {
             stockLists.push({id:i.id,name:i.name,enabled:i.enabled,stock:i.stock,adjustment:0});
           }

           this.stockList = stockLists;
           this.showContent = true;
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
    this.global.loadingPresent('menyimpan data...');
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    let postData = {id: this.id, type: this.type, stock_list: this.stockList};

    this.http.post(this.global.base_url+'auth/product/stock_adjustment', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.global.toastPresent(data.message);
           this.router.navigate(['/catalog-product-edit/'+this.id]);
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
