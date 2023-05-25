import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-setting-printer',
  templateUrl: './setting-printer.page.html',
  styleUrls: ['./setting-printer.page.scss'],
})
export class SettingPrinterPage implements OnInit {

  device: any;
  deviceChoose: any = '';
  device2Choose: any = '';
  company: any = {name:'',package:''};

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private bluetoothSerial: BluetoothSerial
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this.router.navigate(['/tabs/tab4']);
    // });
  }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.storage.getObject('devices').then((data) => {

      if(data != null)
      {
        this.device = data;
        this.storage.getObject('printer').then((printer) => {
          if(printer != null)
          {
            let dataPrinter: any = printer;
            this.deviceChoose = dataPrinter.address;
          }

        });
      }
    });

    this.storage.getObject('devices').then((data) => {

      if(data != null)
      {
        this.device = data;
        this.storage.getObject('printer').then((printer) => {
          if(printer != null)
          {
            let dataPrinter: any = printer;
            this.deviceChoose = dataPrinter.address;
          }

        });
      }

      if(data != null)
      {
        this.device = data;
        this.storage.getObject('printer2').then((printer2) => {
          if(printer2 != null)
          {
            let dataPrinter2: any = printer2;
            this.device2Choose = dataPrinter2.address;
          }

        });
      }
    });

    this.storage.getObject('company').then((company:any) => {
      this.company = company;
    })
  }

  scan()
  {
    this.bluetoothSerial.list().then(success => {
      this.device = success;
      this.storage.setObject('devices',this.device);
    },
      error => {
      console.log(error);
    });
  }

  process()
  {
    if(this.deviceChoose == '')
    {
      this.global.toastPresent('Printer Kasir belum dipilih!');
      return false;
    }
    this.storage.setObject('printer',{address:this.deviceChoose});
    this.storage.setObject('printer2',{address:this.device2Choose});
    this.global.toastPresent('Printer aktif dipilih!');
    this.router.navigate(['/tabs/tab-setting']);
    console.log(this.deviceChoose);
  }

}
