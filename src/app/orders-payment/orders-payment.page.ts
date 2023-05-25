import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { v4 as uuidv4 } from 'uuid';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-payment',
  templateUrl: './orders-payment.page.html',
  styleUrls: ['./orders-payment.page.scss'],
})
export class OrdersPaymentPage implements OnInit {

  id: any;
  auth: any;
  company: any = {payment_cash:1};

  activeOutlet: any;
  activeUser: any;

  cart: any;
  subtotal : any;
  subtotalAfterDiscount: any;
  totalAmount: any;
  totalQty: any;
  discount: any = {id:'',name:'',amount:0,type:'Fixed'};
  serviceCharge: any;
  tax: any;
  total: any;

  orderType: any = "none";

  customer: any= {id:'Walk-in',name:'Walk-in'};

  paymentMethod: any = 'Cash';
  paymentMethodChannel: any = 'Cash';
  amountReceived: any = '';
  amountChange: any = 0;

  backButtonText: any = 'Kembali';
  backButtonIcon: any = 'arrow-back-outline';

  cash: any = true;

  order: any;

  storageOrder: any = [];

  booking: any = {id:''};
  showContent: any = false;

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private route: ActivatedRoute,
  ) {

    this.route.params.subscribe((params: any) => {
      if(params['id'])
      {
        if(params['id'] != '')
        {
            this.id = params['id'];
            this.initialize();
        }
      }
    });
  }

  ngOnInit() {
  }

  initialize() {
    this.platform.ready().then(() => {

      this.storage.getObject('auth').then((auth) => {
        this.auth = auth;
        this.storage.getObject('order').then((data: any) => {
          if(data != null)
          {
            this.storageOrder = data;
            var orderIndex = this.storageOrder.findIndex(x => x.id === this.id);
            this.order = this.storageOrder[orderIndex];
            if(this.order.customer == null)
            {
              this.order.customer = {id:'Walk-in',name:'Walk-in'};
            }

            this.subtotal = this.order.subtotal;
            this.serviceCharge = this.order.service_charge;
            this.tax = this.order.tax;
            this.total = this.order.total;

            console.log("data all",data);
            console.log(orderIndex);
            this.showContent = true;
          }
        });

        this.storage.getObject('company').then((company: any) => {
          this.company = company;
        });
      });

      // this.storage.getObject('pos_booking').then((data: any) => {
      //   if(data != null)
      //   {
      //     this.booking = data;
      //   }
      // });
      //
      // this.storage.getObject('pos_customer').then((data: any) => {
      //   if(data != null)
      //   {
      //     this.customer = data;
      //   }
      // });
      //
      // this.storage.getObject('pos_cart').then((data: any) => {
      //   if(data != null)
      //   {
      //     this.cart = data;
      //   }
      // });
      //
      // this.storage.getObject('pos_subtotal').then((data: any) => {
      //   this.totalAmount = data.amount;
      //
      //   this.subtotal = this.totalAmount;
      //   this.totalQty = data.qty;
      //   console.log(data);
      // });
      //
      // this.storage.getObject('pos_order_type').then((data: any) => {
      //   this.orderType = data.order_type_label;
      // });
      //
      // this.storage.getObject('pos_discount').then((data: any) => {
      //
      //     if(data != null)
      //     {
      //       this.discount = data;
      //       if(data.type == 'Percentage')
      //       {
      //         this.discount.amount = this.subtotal * data.amount / 100;
      //         this.subtotalAfterDiscount = parseInt(this.subtotal) - parseInt(this.discount.amount);
      //       }
      //       else
      //       {
      //         this.discount.amount = data.amount;
      //         this.subtotalAfterDiscount = parseInt(this.subtotal) - parseInt(this.discount.amount);
      //       }
      //     }
      //     else
      //     {
      //       this.subtotalAfterDiscount = parseInt(this.subtotal) - parseInt(this.discount.amount);
      //     }
      //
      //
      //     this.storage.getObject('company').then((data: any) => {
      //       if(data != null)
      //       {
      //         this.company = data;
      //         this.serviceCharge = this.subtotalAfterDiscount * data.service_charge / 100;
      //         this.tax = this.subtotalAfterDiscount * data.tax / 100;
      //
      //         if(data.payment_cash != 1)
      //         {
      //           this.cash == false;
      //           this.selectcashless();
      //         }
      //       }
      //
      //       this.total = this.subtotalAfterDiscount + this.serviceCharge + this.tax;
      //     });
      //
      // });

    });
    // this.loadingController.dismiss();
  }

  selectcash()
  {
    this.cash = true;
    this.paymentMethod = 'Cash';
    this.paymentMethodChannel = 'Cash';
  }

  selectcashless()
  {
    this.cash = false;
    this.paymentMethod = 'Cashless';
    this.paymentMethodChannel = '';
    this.amountReceived = this.total;
  }

  shortcutAmount(amount)
  {
    this.amountReceived = parseFloat(amount);
    this.amountReceivedChange();
  }

  amountReceivedChange()
  {
    this.amountReceived = parseFloat(this.amountReceived);
    this.amountChange = this.amountReceived - this.totalAmount;
  }

  checkIfAmountMatch(amount)
  {
    if(parseFloat(this.amountReceived) == amount)
    {
      return "primary";
    }
    else
    {
      return "light";
    }
  }

  process(status)
  {
    this.storage.getObject('order').then((data: any) => {
      if(data != null)
      {
        this.storageOrder = data;
        this.order = this.storageOrder;
      }
      this.storage.getObject('outlet_active').then((outlet: any) => {
        this.activeOutlet = outlet;
        this.storage.getObject('user').then((user: any) => {
          this.activeUser = user;

          this.processPayment(status);


        });
      });
    });
  }

  processPayment(status)
  {
    if(status == 'Completed')
    {
      if(this.paymentMethodChannel == '')
      {
        this.global.toastPresent('Silahkan pilih channel pembayaran!');
        return false;
      }

      if(this.paymentMethod == 'Cash')
      {
        if(this.amountReceived < this.total)
        {
          this.global.toastPresent('Uang yang diterima tidak kurang dari total transaksi!');
          return false;
        }
      }
      else
      {
        this.amountReceived = this.total;
      }
    }

    this.global.loadingPresent('memproses pembayaran...');

    var payment = {
      method: this.paymentMethod,
      amountReceived: this.amountReceived,
      amountChange: this.amountChange
    };

    this.storage.setObject('pos_payment',payment);

    // update to local storage
    var orderIndex = this.storageOrder.findIndex(x => x.id === this.id);

    let statusOrder:any = '';

    if(this.paymentMethodChannel == 'QRIS Online')
    {
       statusOrder = 'Pending';
    }
    else
    {
       statusOrder = status;
    }

    this.storageOrder[orderIndex].cash_collected = this.amountReceived;
    this.storageOrder[orderIndex].payment_channel = this.paymentMethodChannel;
    this.storageOrder[orderIndex].payment_method = this.paymentMethod;
    this.storageOrder[orderIndex].status = statusOrder;


    var order= {
                  id: this.id,
                  status: statusOrder,
                  cash_collected: this.amountReceived,
                  payment_method: this.paymentMethod,
                  payment_channel: this.paymentMethodChannel
                };

    this.storage.setObject('order',this.storageOrder);

    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};
    this.http.post(this.global.base_url+'auth/order/payment', order, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           console.log(data);
         }
         else
         {
           console.log(data);
         }

         if(this.paymentMethodChannel == 'QRIS Online')
         {
           this.router.navigate(['/orders-payment-qris/'+this.id]);
         }
         else
         {
           this.router.navigate(['/orders-detail/'+this.id+'/payment']);
         }

         this.global.loadingDismiss();

        }, error => {

        this.storage.getObject('order_offline').then((data: any) => {

          console.log("orderoffline",data);
          if(data == null)
          {
            let tempOrderOffline:any = [];
            tempOrderOffline.push(order.id);
            this.storage.setObject('order_offline',tempOrderOffline);
          }
          else
          {
            let tempOrderOffline = data;
            tempOrderOffline.push(order.id);
            this.storage.setObject('order_offline',tempOrderOffline);
          }

          this.router.navigate(['/orders-detail/'+this.id+'/payment']);

          this.global.loadingDismiss();
        });

        console.log(error);
    });
  }

  ionViewWillLeave() {

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

    }

}
