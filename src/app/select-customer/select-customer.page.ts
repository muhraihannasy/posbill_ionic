import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { LoadingController, Platform, MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.page.html',
  styleUrls: ['./select-customer.page.scss'],
})
export class SelectCustomerPage implements OnInit {

  auth: any;

  id: any;
  customer: any;
  customerSearch: any;

  redirect: any;

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
      if(params['redirect'])
      {
        this.redirect = params['redirect'];
      }
      if(params['id'])
      {
        this.id = params['id'];
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

      this.http.post(this.global.base_url+'auth/customer/list', null, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.customer = data.customer;
             this.customerSearch = this.customer;
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
     this.customerSearch = this.customer;

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.customerSearch = this.customerSearch.filter(currentCustomer => {
      if (currentCustomer.name && searchTerm) {
        return (currentCustomer.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });

    console.log(this.customerSearch);
  }

  choose(customer)
  {
    if(this.redirect == 'orders-edit')
    {
      this.global.loadingPresent('menyimpan pelanggan..');
      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  order_id: this.id,
                  customer_id: customer.id
                };

      this.http.post(this.global.base_url+'auth/order/edit_customer', postData, options)
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
                 this.router.navigate(['/'+this.redirect+'/'+this.id+'/refresh']);
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
    else if(this.redirect == 'booking-edit')
    {
      this.global.loadingPresent('menyimpan pelanggan..');
      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  booking_id: this.id,
                  customer_id: customer.id
                };

      this.http.post(this.global.base_url+'auth/booking/edit_customer', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.storage.getObject('booking').then((storageBooking: any) => {
               if(storageBooking != null)
               {
                 var bookingIndex = storageBooking.findIndex(x => x.id === this.id);
                 storageBooking[bookingIndex] = data.booking;

                 this.storage.setObject('booking',storageBooking);

                 this.global.toastPresent(data.message);
                 this.router.navigate(['/'+this.redirect+'/'+this.id+'/refresh']);
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
      this.storage.setObject('pos_customer',{id:customer.id,name:customer.name,phone:customer.phone});
      this.router.navigate(['/'+this.redirect]);
    }

  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tambah pelanggan baru',
      inputs: [
        {
          name: 'name',
          type: 'text',
          id: 'name',
          value: '',
          placeholder: 'Nama'
        },
        {
          name: 'phone',
          type: 'tel',
          id: 'phone',
          value: '',
          placeholder: 'Telepon'
        },
        {
          name: 'email',
          type: 'email',
          id: 'email',
          value: '',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Tambah',
          handler: (data) => {
            this.process(data.name,data.phone,data.email);
            console.log('Confirm Ok',data);
          }
        }
      ]
    });

    await alert.present();
  }

  process(name,phone,email)
  {
    if((name == '') || (phone == ''))
    {
      this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
      return false;
    }

    this.global.loadingPresent('menambah pelanggan...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  name: name,
                  email: email,
                  phone: phone
                };

      this.http.post(this.global.base_url+'auth/customer/add', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.choose(data.customer);
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
