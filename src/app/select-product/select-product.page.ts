import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.page.html',
  styleUrls: ['./select-product.page.scss'],
})
export class SelectProductPage implements OnInit {

  auth: any;
  product: any;
  productSearch: any;
  category: any;
  showContent: any = false;

  id: any;
  source: any;
  type: any;


  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.route.params.subscribe((params: any) => {
      if(params['source'])
      {
        if(params['source'] != '')
        {
          this.source = params['source'];
        }
      }
      if(params['type'])
      {
        if(params['type'] != '')
        {
          this.type = params['type'];
        }
      }
      if(params['id'])
      {
        if(params['id'] != '')
        {
          this.id = params['id'];
        }
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

  getData()
  {
    this.global.loadingPresent('mengambil data...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      this.http.post(this.global.base_url+'auth/category/list', null, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.category = data.category;
             this.getDataProduct();
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

  getDataProduct()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};
    this.http.post(this.global.base_url+'auth/product/list', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.product = data.product;
           this.productSearch = this.product;
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

  getProductByCategory(category_id)
  {
    var filterArray = this.productSearch.filter(x => x.category_id === category_id);
    return filterArray;
  }

  async choose(item) {

    this.product = item;

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.product.name,
      inputs: [
        {
          name: 'qty',
          type: 'number',
          id: 'qty',
          value: 1,
          placeholder: 'Qty'
        },
        {
          name: 'note',
          id: 'note',
          value: '',
          type: 'textarea',
          placeholder: 'Catatan'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.process(item,data.qty,data.note);
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  process(dataItem,dataQty,dataNote)
  {
    this.global.loadingPresent('menambah item...');

    if(this.source == 'orders-edit')
    {
      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {order_id: this.id, product_id: dataItem.id, qty:dataQty, note:dataNote};

      this.http.post(this.global.base_url+'auth/order/add_item', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             console.log(data);
             this.storage.getObject('order').then((storageOrder: any) => {
               if(storageOrder != null)
               {
                 var orderIndex = storageOrder.findIndex(x => x.id === this.id);
                 storageOrder[orderIndex] = data.order;

                 this.storage.setObject('order',storageOrder);

                 this.router.navigate(['/orders-edit/'+this.id]);
               }
             });
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
    else if(this.source == 'booking-edit')
    {
      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {booking_id: this.id, product_id: dataItem.id, qty:dataQty, note:dataNote};

      this.http.post(this.global.base_url+'auth/booking/add_item', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             console.log(data);
             this.storage.getObject('booking').then((storageBooking: any) => {
               if(storageBooking != null)
               {
                 var orderIndex = storageBooking.findIndex(x => x.id === this.id);
                 storageBooking[orderIndex] = data.booking;

                 this.storage.setObject('booking',storageBooking);

                 this.router.navigate(['/booking-edit/'+this.id]);
               }
             });
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

  async filterList(evt) {
     this.productSearch = this.product;

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.productSearch = this.productSearch.filter(currentProduct => {
      if (currentProduct.name && searchTerm) {
        return (currentProduct.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });

    console.log(this.productSearch);
  }



}
