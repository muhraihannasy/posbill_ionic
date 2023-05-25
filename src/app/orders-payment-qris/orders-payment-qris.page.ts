import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform , AlertController} from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import EscPosEncoder from 'esc-pos-encoder-ionic';

import { DatecsprinterService } from '../datecsprinter.service';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';


@Component({
  selector: 'app-orders-payment-qris',
  templateUrl: './orders-payment-qris.page.html',
  styleUrls: ['./orders-payment-qris.page.scss'],
})
export class OrdersPaymentQrisPage implements OnInit {

  title = 'app';
  elementType = 'img';
  qrvalue = '';

  id: any;
  auth: any;
  source: any;
  order: any;
  storageOrder: any = [];
  showContent: any=false;
  disabledAnimation: any = false;
  content: any = '';
  contentWA: any = '';
  printer: any;

  company: any;
  outlet: any;
  user : any;

  orderOffline: any = [];

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private route: ActivatedRoute,
    private bluetoothSerial: BluetoothSerial,
    private nativePageTransitions: NativePageTransitions,
    private alertController: AlertController,
    private DatecsPrinter: DatecsprinterService,
    private base64ToGallery: Base64ToGallery
  ) {
    this.route.params.subscribe((params: any) => {
     if(params['id'])
     {
       this.id = params['id'];
       this.source = params['source'];
     }
   });

   this.bluetoothSerial
     .isEnabled()
     .then((response) => {
       const message = response.enabled ? 'enabled' : 'disabled';
       console.log(`Bluetooth is ${message}`);
     })
     .catch(() => {
       console.log('Error checking bluetooth status');
     });
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.showContent = false;
    this.platform.ready().then(() => {

      this.storage.getObject('printer').then((printer: any) => {
        if(printer!=null)
        {
          this.printer = printer.address;
        }
      });

      this.storage.getObject('company').then((company: any) => {
        this.company = company;
      });

      this.storage.getObject('outlet_active').then((outlet: any) => {
        this.outlet = outlet;
      });

      this.storage.getObject('auth').then((auth) => {

        this.auth = auth;

        this.storage.getObject('user').then((user) => {
          this.user = user;
          this.getDataOrder();
        });

      });

    });
  }

  getDataOrder()
  {
    this.global.loadingPresent('mengambil kode QRIS');
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    let postData = {
                id: this.id
              };

    this.http.post(this.global.base_url+'auth/order/get_detail', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.order = data.order;
           this.qrvalue = data.order.payment_ref2;
           if(data.order.payment_ref2 == null)
           {
             this.getQRIS();
           }
           else
           {
             this.global.loadingDismiss();
             this.showContent = true;

             setTimeout(() => {
               this.toPrint();
             }, 2000);

             setInterval(() => {
                this.checkPaymentSilent();
             }, 2000);

           }
         }
         else
         {
           console.log(data);
         }
        }, error => {
         console.log(error);
         this.global.loadingDismiss();
    });
  }

  getQRIS()
  {
    this.storage.getObject('auth').then((auth:any) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  id: this.id
                };

      this.http.post(this.global.base_url+'auth/order/get_qris', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             // this.printQRIS();
             this.qrvalue = data.xendit.qr_string;
             setTimeout(() => {
               this.toPrint();
             }, 2000);

             setInterval(() => {
                this.checkPaymentSilent();
             }, 2000);
           }
           else
           {
             console.log(data);
           }

           this.showContent = true;
           this.global.loadingDismiss();
          }, error => {
           console.log(error);
           this.global.loadingDismiss();
      });

    });
  }

  toPrint(): void
  {
    this.global.loadingPresent('mencetak kode QRIS..');
    const imgPath:HTMLImageElement = document.querySelector(".aclass img");
    let base64qr = imgPath.src;
    this.printQRIS(base64qr);
    console.log(base64qr);
  }

  printQRIS(base64qr)
  {
    let img = new Image();
    img.src = base64qr;

    img.onload = () => {

      const encoder = new EscPosEncoder();
      const result = encoder.initialize();

      // result.qrcode(qr_string, 2, 8, 'l');
      result.align('left')
      .bold(true)
      .line('TRX-'+this.order.order_number)
      .bold(false)
      .line('Scan kode QRIS untuk pembayaran ke '+this.company.name)
      .newline()
      .align('left')
      .image(img, 256, 256, 'atkinson')
      .line('Total : '+this.global.currency(this.order.total))
      .newline().newline();

      const resultByte = result.encode();
      console.log(resultByte);
      // const resultQr = this.content;

      this.connectToBluetoothPrinter()
        .subscribe(_=>{
           //2. Connected successfully
           this.bluetoothSerial.write(resultByte)
           .then(_=>{
            //3. Print successful
            //If you want to tell user print is successful,
            //handle it here
            //4. IMPORTANT! Disconnect bluetooth after printing
            console.log(_);
            this.global.loadingDismiss();
            this.disconnectBluetoothPrinter()
            },err=>{
              //If there is an error printing to bluetooth printer
              //handle it here
              this.global.loadingDismiss();
              console.log(err);
            })
        },err=>{
          this.global.loadingDismiss();
          //If there is an error connecting to bluetooth printer
          //handle it here
        });

    }

  }

  checkPayment()
  {
    this.global.loadingPresent('mengecek pembayaran...');
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    let postData = {
                id: this.id
              };

    this.http.post(this.global.base_url+'auth/order/get_qris_payment', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           console.log(data);
           if(data.paid == 1)
           {
             this.global.toastPresent('Pembayaran telah diterima!');
             this.storage.getObject('order').then((data: any) => {
               if(data != null)
               {
                 var orderIndex = data.findIndex(x => x.id === this.id);
                 data[orderIndex].status = 'Completed';

                 this.storage.setObject('order',data);
                 this.router.navigate(['/orders-detail/'+this.id+'/list']);

               }
             });
           }
           else
           {
             this.global.toastPresent('Belum ada pembayaran pada QRIS ini!');
           }
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

  checkPaymentSilent()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    let postData = {
                id: this.id
              };

    this.http.post(this.global.base_url+'auth/order/get_qris_payment', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           console.log(data);
           if(data.paid == 1)
           {
             this.global.toastPresent('Pembayaran telah diterima!');
             this.storage.getObject('order').then((data: any) => {
               if(data != null)
               {
                 var orderIndex = data.findIndex(x => x.id === this.id);
                 data[orderIndex].status = 'Completed';

                 this.storage.setObject('order',data);
                 this.router.navigate(['/orders-detail/'+this.id+'/list']);

               }
             });
           }
         }
         else
         {
           console.log(data);
         }

        }, error => {
         console.log(error);
    });
  }

  connectToBluetoothPrinter()
  {
  //This will connect to bluetooth printer via the mac address provided
    var a = this.bluetoothSerial.connect(this.printer);
    console.log(a);
     return a;
  }

  disconnectBluetoothPrinter()
  {
  //This will disconnect the current bluetooth connection
     return this.bluetoothSerial.disconnect();
  }


}
