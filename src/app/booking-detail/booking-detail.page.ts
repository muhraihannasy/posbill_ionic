import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform , AlertController} from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
  styleUrls: ['./booking-detail.page.scss'],
})
export class BookingDetailPage implements OnInit {

  auth: any;
  id: any;
  source: any;
  booking: any;
  storageBooking: any = [];
  showContent: any=false;
  disabledAnimation: any = false;
  content: any = '';
  contentWA: any = '';
  printer: any;

  company: any;
  outlet: any;
  user : any;

  bookingOffline: any = [];

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
    private alertController: AlertController
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

       this.storage.getObject('booking_offline').then((offline: any) => {

         if(offline != null)
         {
           this.bookingOffline = offline;
           this.checkThisOrderSync();
         }
       });

       this.storage.getObject('company').then((company: any) => {
         this.company = company;
       });

       this.storage.getObject('outlet_active').then((outlet: any) => {
         this.outlet = outlet;
       });

       this.storage.getObject('user').then((user: any) => {
         this.user = user;
       });

       this.storage.getObject('auth').then((auth: any) => {
           this.auth = auth;
       });

       this.storage.getObject('booking').then((data: any) => {
         if(data != null)
         {
           this.storageBooking = data;
           console.log(this.storageBooking);
           var orderIndex = this.storageBooking.findIndex(x => x.id === this.id);
           this.booking = this.storageBooking[orderIndex];
           console.log(this.booking);
           if(this.booking.customer == null)
           {
             this.booking.customer = {id:'Walk-in',name:'Walk-in'};
           }
           console.log("data all",data);
           console.log(orderIndex);
           this.showContent = true;

           var content = "\n"+this.center(this.company.name);
           content += "\n"+this.center(this.outlet.phone)+" \n \n";
           content += "================================\n";
           content += "No book   : BOOK-"+this.booking.book_number+"\n";
           content += "Tanggal   : "+this.booking.book_time+"\n";
           content += "Outlet    : "+this.outlet.name+"\n";
           content += "Kasir     : "+this.user.name+"\n";
           content += "Pelanggan : "+this.booking.customer.name+" \n";
           content += "--------------------------------\n";

           for (let item of this.booking.booking_item)
           {
             content += item.product.name+" \n";
             content += this.leftRight(item.price+"x"+item.qty,this.global.currency(this.subtotalItem(item.price,item.qty)))+" \n";
           }
           content += "--------------------------------\n";
           content += this.leftRight("Subtotal",this.global.currency(this.booking.subtotal))+" \n";
           content += "--------------------------------\n";
           content += this.center('No meja / referensi :')+' \n';
           content += this.center(this.booking.book_ref)+' \n';
           content += "--------------------------------\n \n";
           content += this.center(this.company.format_receipt1)+" \n";
           content += this.center(this.company.format_receipt2)+" \n";
           content += "\n \n \n";

           this.content = content;

           var contentWA = "*"+this.company.name+"* %0a %0a";
           // contentWA += "================================%0a";
           contentWA += "No booking *BOOK-"+this.booking.book_number+"* ("+this.booking.book_time+")%0a";
           contentWA += "Pelanggan : "+this.booking.customer.name+" %0a";
           contentWA += "--------------------------------%0a";

           for (let item of this.booking.booking_item)
           {
             contentWA += item.product.name+" %0a";
             contentWA += item.price+"x"+item.qty+"="+this.global.currency(this.subtotalItem(item.price,item.qty))+" %0a";
           }
           contentWA += "--------------------------------%0a";
           contentWA += "Subtotal : "+this.global.currency(this.booking.subtotal)+" %0a";
           contentWA += "--------------------------------%0a";
           contentWA += "No meja / referensi : %0a";
           contentWA += this.booking.book_ref+' %0a';
           contentWA += "--------------------------------%0a";
           contentWA += this.company.format_receipt1+"%0a";
           contentWA += this.company.format_receipt2+"%0a";
           // contentWA += "\n \n \n";

           this.contentWA = contentWA;
         }
       });
     });
   }

   subtotalItem(price,qty)
   {
     var subtotal = parseFloat(price) * parseFloat(qty);

     return subtotal;
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

   center(text)
   {
     var textString = String(text);
     var paperWidthChar = 31;
     var countSpace = (paperWidthChar - textString.length) / 2;

     var textResult = '';
     for(var i=1;i<=Math.floor(countSpace);i++)
     {
       textResult +=" ";
     }

     textResult += textString;

     return textResult;

   }

   leftRight(leftText,rightText)
   {
     var leftTextString = String(leftText);
     var rightTextString = String(rightText);

     var paperWidthChar = 31;
     var countChar = leftTextString.length + rightTextString.length;
     var countSpace = paperWidthChar - countChar;

     console.log('L',leftTextString.length);
     console.log('R',rightTextString.length);
     console.log('countChar',countChar);
     console.log('countSpace', countSpace);

     var textResult = leftTextString;

     for(var i=1;i<=countSpace;i++)
     {
       textResult += " ";
     }

     textResult += rightTextString;
     return textResult;
   }

   printReceipt()
   {

      this.connectToBluetoothPrinter()
      .subscribe(_=>{
         //2. Connected successfully
         this.bluetoothSerial.write(this.content)
         .then(_=>{
          //3. Print successful
          //If you want to tell user print is successful,
          //handle it here
          //4. IMPORTANT! Disconnect bluetooth after printing
          console.log(_);
          this.disconnectBluetoothPrinter()
          },err=>{
            //If there is an error printing to bluetooth printer
            //handle it here
            console.log(err);
          })
      },err=>{

        //If there is an error connecting to bluetooth printer
        //handle it here
      })
   }

   async sendWAPrompt() {
     const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Kirim nota ke Whatsapp',
       inputs: [
         {
           name: 'phone_number',
           type: 'tel',
           placeholder: 'Nomor WA tujuan',
           value: this.booking.customer.phone
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
           text: 'Kirim',
           handler: (data: any) => {

             var numberStr = String(data.phone_number);
             if(numberStr.charAt(0) == '0')
             {
               var numberStr = numberStr.substring(0);
               var numberStr = '62'+numberStr;
             }

             window.open("https://wa.me/"+numberStr+"?text="+this.contentWA);
             console.log('Confirm Ok');

           }
         }
       ]
     });

     await alert.present();
   }

   process()
   {
     let cart = [];
     let subtotal = 0;
     let totalQty = 0;
     for(let item of this.booking.booking_item)
     {
       cart.push({id:item.product.id,name:item.product.name,cost:item.cost,price:item.price,qty:item.qty,note: item.note});

       subtotal += (item.price * item.qty);
       totalQty += item.qty;
     }

     this.storage.setObject('pos_cart',cart);

     var pos_subtotal = {amount: subtotal, qty: totalQty};
     var pos_order_type = {order_type: this.booking.order_type};

     let pos_customer:any = {id:'Walk-in',name:'Walk-in'};

     if(this.booking.customer_id != null)
     {
       let pos_customer:any = {id:this.booking.customer_id,name:this.booking.customer.name};
     }

     this.storage.setObject('pos_booking',{booking_id:this.id,book_number: this.booking.book_number,book_ref: this.booking.book_ref});
     this.storage.setObject('pos_subtotal',pos_subtotal);
     this.storage.setObject('pos_order_type',pos_order_type);
     this.storage.setObject('pos_customer',pos_customer);

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

     this.router.navigate(['/payment-options']);

   }


   gotoPOS()
   {
     this.disabledAnimation = true;
     this.router.navigate(['/tabs/blank']).then(() => {
       this.router.navigate(['/tabs/tab-pos']);
     });
   }

   ionViewWillLeave()
   {
     let options: NativeTransitionOptions = {
        direction: 'right',
        duration: 300,
        slowdownfactor: 3,
        slidePixels: 0,
        iosdelay: 0,
        androiddelay: 0,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 0
       }

     if(this.disabledAnimation == false)
     {
       this.nativePageTransitions.slide(options);
     }
   }

   checkThisOrderSync()
   {
     var offlineIndex = this.bookingOffline.findIndex(y => y === this.id);
     if(offlineIndex > -1)
     {
       return true;
     }
   }

   async infoOffline() {
     const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Info',
       message: 'Transaksi ini belum tersinkronisasi!',
       buttons: ['OK']
     });

     await alert.present();
   }

   async cancelConfirm() {
     const alert = await this.alertController.create({
       cssClass: 'my-custom-class',
       header: 'Konfirmasi hapus!',
       message: 'Anda yakin menghapus booking ini?',
       buttons: [
         {
           text: 'Tidak',
           role: 'cancel',
           cssClass: 'secondary',
           handler: (blah) => {
             console.log('Confirm Cancel: blah');
           }
         }, {
           text: 'Ya',
           handler: () => {
             this.cancel();
           }
         }
       ]
     });

     await alert.present();
   }

   cancel()
   {
     this.global.loadingPresent('menghapus booking...');

     this.storage.getObject('booking').then((data: any) => {
       if(data != null)
       {
         var bookingIndex = data.findIndex(x => x.id === this.id);
         data.splice(bookingIndex,1);

         this.storage.setObject('booking',data);

         var reqHeader = new HttpHeaders({
             'Content-Type': 'application/json',
             'Authorization': 'Bearer '+this.auth.token
          });

         let options = {headers: reqHeader};
         let postData = {
                     id: this.id
                   };

         this.http.post(this.global.base_url+'auth/booking/delete', postData, options)
            .subscribe((data: any) => {
              console.log(data);

              if(data.status == 0)
              {
                this.global.toastPresent(data.message);
                this.router.navigate(['/tabs/blank']).then(() => {
                  this.router.navigate(['/booking']);
                });
                // this.ionViewWillEnter();
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
     });

   }

}
