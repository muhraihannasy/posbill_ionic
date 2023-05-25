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
  selector: 'app-orders-edit',
  templateUrl: './orders-edit.page.html',
  styleUrls: ['./orders-edit.page.scss'],
})
export class OrdersEditPage implements OnInit {

  title = 'app';
  elementType = 'img';
  value = 'Techiediaries';

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

  printHeader: any;
  printItem: any;
  printTotal: any;
  printFooter: any;

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

     if(params['action'])
     {
       if(params['action'] == 'refresh')
       {
         this.ionViewWillEnter();
       }
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

      this.storage.getObject('order_offline').then((offline: any) => {

        if(offline != null)
        {
          this.orderOffline = offline;
          this.checkThisOrderSync();
        }
      });

      this.storage.getObject('company').then((company: any) => {
        this.company = company;
      });

      this.storage.getObject('outlet_active').then((outlet: any) => {
        this.outlet = outlet;
      });

      this.storage.getObject('auth').then((auth: any) => {
        this.auth = auth;
      });

      this.storage.getObject('user').then((user: any) => {
        this.user = user;
      });

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
          console.log("data all",data);
          console.log(orderIndex);
          this.showContent = true;

          // content receipt
          var content = "\n"+this.center(this.company.name);
          content += "\n"+this.center(this.outlet.phone)+" \n \n";
          content += "================================\n";
          content += "No order  : TRX-"+this.order.order_number+"\n";
          content += "Tipe order: "+this.order.order_type+"\n";
          content += "Tanggal   : "+this.order.order_time+"\n";
          content += "Outlet    : "+this.outlet.name+"\n";
          content += "Kasir     : "+this.user.name+"\n";
          content += "Pelanggan : "+this.order.customer.name+" \n";
          content += "--------------------------------\n";

          for (let item of this.order.order_item)
          {
            content += item.product.name+" \n";
            content += this.leftRight(item.price+"x"+item.qty,this.global.currency(this.subtotalItem(item.price,item.qty)))+" \n";
          }

          content += "--------------------------------\n";
          content += this.leftRight("Subtotal",this.global.currency(this.order.subtotal))+" \n";
          content += this.leftRight("Diskon","("+this.global.currency(this.order.discount)+")")+" \n";
          content += this.leftRight("Service Charge",this.global.currency(this.order.service_charge))+" \n";
          content += this.leftRight("Pajak",this.global.currency(this.order.tax))+" \n";
          content += "--------------------------------\n";
          content += this.leftRight("Grand Total",this.global.currency(this.order.total))+" \n";
          content += "--------------------------------\n";
          content += this.leftRight("Pembayaran "+this.order.payment_channel,this.global.currency(this.order.cash_collected))+" \n";
          if(this.order.payment_channel == 'Cash')
          {
            content += this.leftRight("Uang kembali ",this.global.currency(this.order.cash_collected - this.order.total))+" \n";
          }

          content += "--------------------------------\n \n";
          content += this.center(this.company.format_receipt1)+" \n";
          content += this.center(this.company.format_receipt2)+" \n";
          content += "\n \n \n";

          this.content = content;

          // content wa

          var contentWA = "*"+this.company.name+"* %0a %0a";
          // contentWA += "================================%0a";
          contentWA += "No order *TRX-"+this.order.order_number+"* ("+this.order.order_time+")%0a";
          contentWA += "Tipe order: "+this.order.order_type+"%0a";
          contentWA += "Pelanggan : "+this.order.customer.name+" %0a";
          contentWA += "--------------------------------%0a";

          for (let item of this.order.order_item)
          {
            contentWA += item.product.name+" %0a";
            contentWA += item.price+"x"+item.qty+"="+this.global.currency(this.subtotalItem(item.price,item.qty))+" %0a";
          }

          contentWA += "--------------------------------%0a";
          contentWA += "Subtotal : "+this.global.currency(this.order.subtotal)+" %0a";
          contentWA += "Diskon : "+this.global.currency(this.order.discount)+" %0a";
          contentWA += "Service Charge : "+this.global.currency(this.order.service_charge)+" %0a";
          contentWA += "Pajak : "+this.global.currency(this.order.tax)+" %0a %0a";
          contentWA += "*Grand Total* : "+this.global.currency(this.order.total)+" %0a";
          contentWA += "Pembayaran "+this.order.payment_channel+" : "+this.global.currency(this.order.cash_collected)+" %0a";
          if(this.order.payment_channel == 'Cash')
          {
            contentWA += "Uang kembali : "+this.global.currency(this.order.cash_collected - this.order.total)+" %0a";
          }
          contentWA += "%0a %0a";
          contentWA += this.company.format_receipt1+"%0a";
          contentWA += this.company.format_receipt2+"%0a";
          // contentWA += "\n \n \n";

          this.contentWA = contentWA;


          // modify content print
          var printHeader = "\n"+this.center(this.company.name);
          printHeader += "\n"+this.center(this.outlet.phone)+" \n \n";
          printHeader += "================================\n";
          printHeader += "No order  : TRX-"+this.order.order_number+"\n";
          printHeader += "Tipe order: "+this.order.order_type+"\n";
          printHeader += "Tanggal   : "+this.order.order_time+"\n";
          printHeader += "Outlet    : "+this.outlet.name+"\n";
          printHeader += "Kasir     : "+this.user.name+"\n";
          printHeader += "Pelanggan : "+this.order.customer.name+" \n";
          printHeader += "--------------------------------\n";

          this.printHeader = printHeader;

          var printItem = '';
          for (let item of this.order.order_item)
          {
            printItem += item.product.name+" \n";
            printItem += this.leftRight(item.price+"x"+item.qty+" ",this.global.currency(this.subtotalItem(item.price,item.qty)))+" \n";
          }

          this.printItem = printItem;

          var printFooter = '';

          printFooter += "--------------------------------\n";
          printFooter += this.leftRight("Subtotal",this.global.currency(this.order.subtotal))+" \n";
          printFooter += this.leftRight("Diskon","("+this.global.currency(this.order.discount)+")")+" \n";
          printFooter += this.leftRight("Service Charge",this.global.currency(this.order.service_charge))+" \n";
          printFooter += this.leftRight("Pajak",this.global.currency(this.order.tax))+" \n";
          printFooter += "--------------------------------\n";
          printFooter += this.leftRight("Grand Total",this.global.currency(this.order.total))+" \n";
          printFooter += "--------------------------------\n";
          printFooter += this.leftRight("Pembayaran "+this.order.payment_channel,this.global.currency(this.order.cash_collected))+" \n";
          if(this.order.payment_channel == 'Cash')
          {
            printFooter += this.leftRight("Uang kembali ",this.global.currency(this.order.cash_collected - this.order.total))+" \n";
          }

          printFooter += "--------------------------------\n \n";
          printFooter += this.center(this.company.format_receipt1)+" \n";
          printFooter += this.center(this.company.format_receipt2)+" \n";
          printFooter += "\n \n \n";

          this.printFooter = printFooter;
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

    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    if(this.order.payment_method == 'Cash')
    {
      result
        .align('left')
        .newline()
        .line(this.content)
        .newline()
        .newline()
        .raw([0x1b,0x70,0x00])
        .raw([0x1b,0x70,0x01])
        .cut();
    }
    else
    {
      result
        .align('left')
        .newline()
        .line(this.content)
        .newline()
        .newline()
        .cut();
    }

    const resultByte = result.encode();
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

  printReceipt2()
  {
    this.printReceiptHeader();
  }

  printReceiptHeader()
  {
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .align('left')
      .newline()
      .line(this.printHeader);

    const resultByte = result.encode();
     this.connectToBluetoothPrinter()
     .subscribe(_=>{
        this.bluetoothSerial.write(resultByte)
        .then(_=>{
         console.log(_);
         this.printReceiptItem();
         },err=>{
           console.log(err);
         })
     },err=>{
     })
  }

  printReceiptItem()
  {
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .align('left')
      .line(this.printItem);

    const resultByte = result.encode();
    this.bluetoothSerial.write(resultByte)
    .then(_=>{
     console.log(_);
     setTimeout(() => {
       this.printReceiptFooter();
     }, 1000);
     },err=>{
       console.log(err);
     });
  }

  printReceiptFooter()
  {
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    if(this.order.payment_method == 'Cash')
    {
      result
        .align('left')
        .line(this.printFooter)
        .newline()
        .raw([0x1b,0x70,0x00])
        .raw([0x1b,0x70,0x01])
        .cut();
    }
    else
    {
      result
        .align('left')
        .line(this.printFooter)
        .newline()
        .cut();
    }

    const resultByte = result.encode();
    this.bluetoothSerial.write(resultByte)
    .then(_=>{
     console.log(_);
     this.disconnectBluetoothPrinter()
     },err=>{
       console.log(err);
     });
  }

  async sendWAPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Kirim nota ke Whatsapp',
      inputs: [
        {
          name: 'phone_number',
          type: 'tel',
          placeholder: 'Nomor WA tujuan'
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

  async editDetail(item,i) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.order.order_item[i].product.name,
      inputs: [
        {
          name: 'qty',
          type: 'number',
          id: 'qty',
          value: this.order.order_item[i].qty,
          placeholder: 'Qty'
        },
        {
          name: 'note',
          id: 'note',
          value: this.order.order_item[i].note,
          type: 'textarea',
          placeholder: 'Catatan'
        },
      ],
      // message: '<ion-button (click)="deleteItem('+item.id+')"><ion-text color="danger">Hapus produk ini dari pesanan</ion-text></ion-button>',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Simpan',
          handler: (data) => {
            this.global.loadingPresent('mengubah item...');
            this.order.order_item[i].qty = data.qty;
            this.order.order_item[i].note = data.note;

            var reqHeader = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.auth.token
             });

            let options = {headers: reqHeader};

            let postData = {
                        order_id: this.id,
                        item_id: item.id,
                        qty: data.qty,
                        note: data.note
                      };

            this.http.post(this.global.base_url+'auth/order/edit_item', postData, options)
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

                       this.global.toastPresent('Item pesanan berhasil disimpan!');
                       this.ionViewWillEnter();
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

            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteItem(item,i) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Hapus item pesanan',
      message: 'Yakin menghapus '+item.product.name+' dari pesanan ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Hapus',
          handler: (dataHandler) => {

            this.global.loadingPresent('menghapus item...');

            var reqHeader = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.auth.token
            });

            let options = {headers: reqHeader};

            let postData = {
                        item_id: item.id,
                      };

            this.http.post(this.global.base_url+'auth/order/delete_item', postData, options)
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
                       this.global.toastPresent('Item pesanan berhasil dihapus!');
                       this.ionViewWillEnter();
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

            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
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
    var offlineIndex = this.orderOffline.findIndex(y => y === this.id);
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
      header: 'Konfirmasi pembatalan!',
      message: 'Anda yakin membatalkan order ini?',
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
    if(this.user.level == 'Cashier')
    {
      this.global.toastPresent('Anda tidak dapat membatalkan order, silahkan gunakan akses level Admin untuk membatalkan!');
      return false;
    }
    this.global.loadingPresent('membatalkan order...');

    this.storage.getObject('order').then((data: any) => {
      if(data != null)
      {
        var orderIndex = data.findIndex(x => x.id === this.id);
        data[orderIndex].status = 'Canceled';

        this.storage.setObject('order',data);

        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.auth.token
         });

        let options = {headers: reqHeader};
        let postData = {
                    id: this.id
                  };

        this.http.post(this.global.base_url+'auth/order/cancel', postData, options)
           .subscribe((data: any) => {
             console.log(data);

             if(data.status == 0)
             {
               this.global.toastPresent(data.message);
               this.router.navigate(['/tabs/blank']).then(() => {
                 this.router.navigate(['/tabs/tab-order']);
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
