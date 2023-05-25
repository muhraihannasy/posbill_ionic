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
  selector: 'app-outlet',
  templateUrl: './outlet.page.html',
  styleUrls: ['./outlet.page.scss'],
})
export class OutletPage implements OnInit {

  auth: any;
  outlet: any;
  company: any = {name: '',package:''};

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
    // this.platform.backButton.subscribeWithPriority(5, () => {
    //   this.router.navigate(['/tabs/tab4']);
    // });
   }

  ngOnInit() {

  }

  ionViewWillEnter()
  {
    this.storage.getObject('auth').then((auth) => {
      this.auth = auth;
      this.getData();
    });

    this.storage.getObject('company').then((company:any) => {
      this.company = company;
    })

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

      this.http.post(this.global.base_url+'auth/outlet/list', null, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.outlet = data.outlet;
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

  pay(url)
  {
    window.open(url);
  }

  async showBetaAlert() {
   const alert = await this.alertController.create({
     cssClass: 'my-custom-class',
     header: 'Informasi',
     message: 'Versi Beta belum dapat menambahkan outlet lebih dari 1 outlet',
     buttons: ['OK']
   });

   await alert.present();
 }

 async showToastLite()
 {
   const alert = await this.alertController.create({
     cssClass: 'my-custom-class',
     header: 'Tidak dapat menambahkan outlet, Upgrade Premium',
     message: 'Anda harus berlangganan 1 outlet premium untuk dapat menambahkan berlangganan outlet berikutnya',
     buttons: ['OK']
   });
   await alert.present();
 }

}
