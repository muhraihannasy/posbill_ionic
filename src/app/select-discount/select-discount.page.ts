import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { LoadingController, Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-discount',
  templateUrl: './select-discount.page.html',
  styleUrls: ['./select-discount.page.scss'],
})
export class SelectDiscountPage implements OnInit {

  id: any;
  auth: any;
  discount: any;
  discountSearch: any;
  source: any;


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

    this.route.params.subscribe((params: any) => {
      if(params['source'])
      {
        if(params['source'] != '')
        {
            this.source = params['source'];
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

      this.http.post(this.global.base_url+'auth/discount/list', null, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.discount = data.discount;
             this.discountSearch = this.discount;
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

    });
  }

  async filterList(evt) {
     this.discountSearch = this.discount;

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.discountSearch = this.discountSearch.filter(currentCustomer => {
      if (currentCustomer.name && searchTerm) {
        return (currentCustomer.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });

    console.log(this.discountSearch);
  }

  choose(discount)
  {
    this.storage.setObject('pos_discount',{id:discount.id,name:discount.name,amount:discount.amount,type:discount.type});

    if(this.source == 'payment-options')
    {
      this.router.navigate(['/'+this.source]);
    }
    else if(this.source == 'orders-edit')
    {
      this.global.loadingPresent('menyimpan diskon..');
      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  order_id: this.id,
                  discount_id: discount.id
                };

      this.http.post(this.global.base_url+'auth/order/edit_discount', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.storage.getObject('order').then((storageOrder: any) => {
               if(storageOrder != null)
               {
                 var orderIndex = storageOrder.findIndex(x => x.id === this.id);
                 storageOrder[orderIndex] = data.order;

                 this.storage.setObject('order',storageOrder);

                 this.global.toastPresent(data.message);
                 this.router.navigate(['/'+this.source+'/'+this.id+'/refresh']);
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
          this.global.loadingDismiss();
      });

    }
    else
    {
      this.router.navigate(['/'+this.source+'/'+this.id]);
    }
  }

}
