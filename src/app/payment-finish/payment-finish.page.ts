import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-payment-finish',
  templateUrl: './payment-finish.page.html',
  styleUrls: ['./payment-finish.page.scss'],
})
export class PaymentFinishPage implements OnInit {

  constructor(
    private platform: Platform,
    private bluetoothSerial: BluetoothSerial,
    private nativePageTransitions: NativePageTransitions
  ) {
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

  connectToBluetoothPrinter()
  {
  //This will connect to bluetooth printer via the mac address provided
    var a = this.bluetoothSerial.connect("0F:02:17:51:8D:85");
    console.log(a);
     return a;
  }

  disconnectBluetoothPrinter()
  {
  //This will disconnect the current bluetooth connection
     return this.bluetoothSerial.disconnect();
  }

  printReceipt()
  {
     //1. Try connecting to bluetooth printer


     var content = " TOKO ABC \n";
     content += "==============================\n";
     content += "No order  : 21010001\n";
     content += "Tanggal   : 20-01-2021 08:08\n";
     content += "Pelanggan : Walk-in \n";
     content += "------------------------------\n";
     content += "Chocolate Cheese \n";
     content += "2 x 50.000 \n";
     content += "Chocolate Cheese \n";
     content += "2 x 50.000 \n";
     content += "Chocolate Cheese \n";
     content += "2 x 50.000 \n";
     content += "Chocolate Cheese \n";
     content += "2 x 50.000 \n";
     content += "------------------------------\n";
     content += "Subtotal  : Rp320.000 \n";
     content += "Diskon    : Rp320.000 \n";
     content += "Service Ch: Rp320.000 \n";
     content += "Pajak     : Rp320.000 \n";
     content += "------------------------------\n";
     content += "         Terima kasih \n";
     content += "------------------------------\n";
     content += "\n \n \n";


     this.connectToBluetoothPrinter()
     .subscribe(_=>{
        //2. Connected successfully
        this.bluetoothSerial.write(content)
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

    this.nativePageTransitions.slide(options);
  }

}
