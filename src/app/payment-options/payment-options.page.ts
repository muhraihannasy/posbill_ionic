import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform, AlertController } from '@ionic/angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.page.html',
  styleUrls: ['./payment-options.page.scss'],
})
export class PaymentOptionsPage implements OnInit {

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
  note: any;
  paymentNote: any = '';

  orderType: any = "none";
  orderTypeLabel: any = "none";

  customer: any= {id:'Walk-in',name:'Walk-in',phone:''};

  paymentMethod: any = 'Cash';
  paymentMethodChannel: any = 'Cash';
  amountReceived: any = '';
  amountChange: any = 0;

  backButtonText: any = 'Kembali';
  backButtonIcon: any = 'arrow-back-outline';

  cash: any = true;

  // order
  order: any = [];
  storageOrder: any = [];

  booking: any = {id:''};

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.platform.ready().then(() => {
      this.booking = {id:''};
      this.storage.getObject('auth').then((auth) => {
        this.auth = auth;
      });

      this.storage.getObject('pos_booking').then((data: any) => {
        if(data != null)
        {
          this.booking = data;
        }
      });

      this.storage.getObject('pos_customer').then((data: any) => {
        if(data != null)
        {
          this.customer = data;
        }
      });

      this.storage.getObject('pos_cart').then((data: any) => {
        if(data != null)
        {
          this.cart = data;
        }
      });

      this.storage.getObject('pos_subtotal').then((data: any) => {
        this.totalAmount = data.amount;

        this.subtotal = this.totalAmount;
        this.totalQty = data.qty;
        console.log(data);
      });

      this.storage.getObject('pos_order_type').then((data: any) => {
        this.orderType = data.order_type;
        this.orderTypeLabel = data.order_type_label;
      });

      this.storage.getObject('pos_discount').then((data: any) => {

          if(data != null)
          {
            this.discount = data;
            if(data.type == 'Percentage')
            {
              this.discount.amount = this.subtotal * data.amount / 100;
              this.subtotalAfterDiscount = parseInt(this.subtotal) - parseInt(this.discount.amount);
            }
            else
            {
              this.discount.amount = data.amount;
              this.subtotalAfterDiscount = parseInt(this.subtotal) - parseInt(this.discount.amount);
            }
          }
          else
          {
            this.subtotalAfterDiscount = parseInt(this.subtotal) - parseInt(this.discount.amount);
          }


          this.storage.getObject('company').then((data: any) => {
            if(data != null)
            {
              this.company = data;
              this.serviceCharge = this.subtotalAfterDiscount * data.service_charge / 100;
              this.tax = this.subtotalAfterDiscount * data.tax / 100;

              if(data.payment_cash != 1)
              {
                this.cash == false;
                this.selectcashless();
              }
            }

            this.total = this.subtotalAfterDiscount + this.serviceCharge + this.tax;
          });

      });

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

          this.processOrder(status);


        });
      });
    });
  }

  processOrder(status)
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

    this.global.loadingPresent('memproses order...');

    if(status == 'Pending')
    {
      this.amountReceived = 0;
      this.amountChange = 0;

      var payment = {
        method: this.paymentMethod,
        amountReceived: this.amountReceived,
        amountChange: this.amountChange
      }
    }
    else
    {
      var payment = {
        method: this.paymentMethod,
        amountReceived: this.amountReceived,
        amountChange: this.amountChange
      }
    }


    this.storage.setObject('pos_payment',payment);

    var order_id = uuidv4();
    var order_number = this.company.seq+this.global.getYear()+this.global.getMonth()+this.global.getDate()+this.global.getMathRandom();

    var order_item = [];
    for (let item of this.cart)
    {
      var subtotal = item.price * item.qty;
      var product = {id:item.id,name:item.name};
      var tempItem = {id: uuidv4(), order_id: order_id, order_number: order_number, order_time: this.global.getDateNow(), product_id: item.id, name: item.name, cost: item.cost, price: item.price, qty: item.qty, note:item.note, subtotal: subtotal, status: 'Completed', product:product};
      order_item.push(tempItem);
    }

    let statusOrder: any = '';

    if(this.paymentMethodChannel == 'QRIS Online')
    {
       statusOrder = 'Pending';
    }
    else
    {
       statusOrder = status;
    }

    let order: any = {
                  id: order_id,
                  booking_id: this.booking.booking_id,
                  order_number: order_number,
                  order_time: this.global.getDateNow(),
                  outlet_id: this.activeOutlet.id,
                  customer: {id:this.customer.id,name:this.customer.name},
                  customer_name: this.customer.name,
                  customer_phone: this.customer.phone,
                  customer_id: this.customer.id,
                  user_id: this.activeUser.id,
                  subtotal: this.subtotal,
                  discount: this.discount.amount,
                  service_charge: this.serviceCharge,
                  tax:this.tax,
                  total: this.total,
                  order_type: this.orderType,
                  order_type_label: this.orderTypeLabel,
                  note: this.note,
                  status: statusOrder,
                  cash_collected: this.amountReceived,
                  payment_method: this.paymentMethod,
                  payment_channel: this.paymentMethodChannel,
                  payment_note: this.paymentNote,
                  order_item: order_item
                };

    this.order.unshift(order);
    this.storage.setObject('order',this.order);

    if(this.booking.booking_id != null)
    {
      this.storage.getObject('booking').then((booking: any) => {
          var bookIndex = booking.findIndex(x => x.id === this.booking.booking_id);

          if(bookIndex >= 0)
          {
            booking.splice(bookIndex,1);
            this.storage.setObject('booking',booking);
          }

            this.storage.getObject('booking_offline').then((bookingOffline:any) => {
              var bookOfflineIndex = bookingOffline.findIndex(x => x === this.booking.booking_id);
              if(bookOfflineIndex >= 0)
              {
                bookingOffline.splice(bookOfflineIndex,1);
                this.storage.setObject('booking_offline',bookingOffline);
              }
            });
      });
    }
    else
    {
      this.booking.booking_id = null;
    }

    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};
    this.http.post(this.global.base_url+'auth/order/store', order, options)
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
           this.router.navigate(['/orders-payment-qris/'+order_id]);
         }
         else
         {
           this.router.navigate(['/orders-detail/'+order_id+'/pos']);
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

          this.router.navigate(['/orders-detail/'+order_id+'/pos']);

          this.global.loadingDismiss();
        });

        console.log(error);
    });
  }

  async openPaymentNote(channel)
  {
    this.paymentNote = '';
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Catatan pembayaran '+channel,
      inputs: [
        {
          name: 'payment_note',
          id: 'payment_note',
          type: 'textarea',
          placeholder: 'Nomor kartu, nomor pembayaran'
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
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            this.paymentNote = data.payment_note;
          }
        }
      ]
    });

    await alert.present();
  }

  async openNote()
  {
    const alert = await this.alertController.create({
      cssClass: 'alertClass',
      header: 'Catatan order',
      inputs: [
        {
          name: 'note',
          id: 'note',
          type: 'textarea',
          placeholder: '',
          value: this.note
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
          text: 'Ok',
          handler: (data) => {
            this.note = data.note;
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmToProcess(status) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Konfirmasi order',
      message: 'Yakin memproses order ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.process(status);
          }
        }
      ]
    });

    await alert.present();
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
