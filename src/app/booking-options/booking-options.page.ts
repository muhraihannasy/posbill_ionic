import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-booking-options',
  templateUrl: './booking-options.page.html',
  styleUrls: ['./booking-options.page.scss'],
})
export class BookingOptionsPage implements OnInit {

  auth: any;
  company: any = {payment_cash:1};

  activeOutlet: any;
  activeUser: any;

  bookRef: any = '';

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
  booking: any = [];
  storageBooking: any = [];

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.platform.ready().then(() => {

      this.storage.getObject('auth').then((auth) => {
        this.auth = auth;
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

  process()
  {
    this.global.loadingPresent('menyimpan booking...');
    this.storage.getObject('booking').then((data: any) => {
      if(data != null)
      {
        this.storageBooking = data;
        this.booking = this.storageBooking;
      }
      this.storage.getObject('outlet_active').then((outlet: any) => {
        this.activeOutlet = outlet;
        this.storage.getObject('user').then((user: any) => {
          this.activeUser = user;

          this.processBooking();

        });
      });
    });
  }

  processBooking()
  {
    var booking_id = uuidv4();
    var book_number = this.company.seq+this.global.getYear()+this.global.getMonth()+this.global.getDate()+this.global.getMathRandom();

    var booking_item = [];
    var orderSubtotal = 0;
    for (let item of this.cart)
    {
      var subtotal = item.price * item.qty;
      var product = {id:item.id,name:item.name};
      var tempItem = {id: uuidv4(), booking_id: booking_id, book_number: book_number, book_time: this.global.getDateNow(), product_id: item.id, name: item.name, cost: item.cost, price: item.price, qty: item.qty, note:item.note, subtotal: subtotal, product:product};
      booking_item.push(tempItem);

      orderSubtotal += subtotal;
    }

    var booking = {
                  id: booking_id,
                  book_number: book_number,
                  book_ref: this.bookRef,
                  book_time: this.global.getDateNow(),
                  outlet_id: this.activeOutlet.id,
                  customer: {id:this.customer.id,name:this.customer.name,phone:this.customer.phone},
                  customer_id: this.customer.id,
                  user_id: this.activeUser.id,
                  order_type: this.orderType,
                  order_type_label: this.orderTypeLabel,
                  booking_item: booking_item,
                  subtotal: orderSubtotal
                };

    this.booking.unshift(booking);
    this.storage.setObject('booking',this.booking);

    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};
    this.http.post(this.global.base_url+'auth/booking/store', booking, options)
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

         this.global.loadingDismiss();
         this.router.navigate(['/booking-detail/'+booking.id+'/pos']);

        }, error => {

        this.storage.getObject('booking_offline').then((data: any) => {

          console.log("bookingoffline",data);
          if(data == null)
          {
            let tempBookingOffline:any = [];
            tempBookingOffline.push(booking.id);
            this.storage.setObject('booking_offline',tempBookingOffline);
          }
          else
          {
            let tempBookingOffline = data;
            tempBookingOffline.push(booking.id);
            this.storage.setObject('booking_offline',tempBookingOffline);
          }

          this.global.loadingDismiss();
        this.router.navigate(['/booking-detail/'+booking.id+'/pos']);

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
