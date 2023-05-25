import { Component } from '@angular/core';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { GlobalService } from '../global.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import { ToastController,Platform } from '@ionic/angular';

import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab-setting',
  templateUrl: 'tab-setting.page.html',
  styleUrls: ['tab-setting.page.scss']
})
export class TabSettingPage {

  user: any = {name:'',level:''};
  company:any = {name:'',package:''};

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private http: HttpClient,
    private global: GlobalService,
    private router: Router,
    private toastController: ToastController,
    private storage: StorageService,
    private alertController: AlertController,
    private platform: Platform
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this.router.navigate(['/tabs/tab1']);
    // });

  }

  ionViewWillEnter()
  {
    this.storage.getObject('company').then((company:any) => {
      this.company = company;
      this.storage.getObject('user').then((user:any) => {
        this.user = user;

      })
    })
  }

  clickToPage(page)
  {

    if(this.company.package == 'Lite' && page == '/setting-olshop')
    {
      this.global.toastPresent('Fitur toko online tersedia dalam versi Premium');
      return false;
    }

    if(this.company.package == 'Lite' && page == '/user')
    {
      this.global.toastPresent('Fitur pengguna tersedia dalam versi Premium');
      return false;
    }

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

    this.router.navigate([page]);
  }

  ionViewWillLeave()
  {

  }

  async confirmLogout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Konfirmasi',
      message: 'Yakin untuk keluar dari akun Anda?   <br/> <br/> Perhatian : <br/> <span style="color:red">harap lakukan sinkronisasi data order terlebih dahulu, data offline akan dihapus saat Anda keluar akun!</span>',
      buttons: [
        {
          text: 'Sinkronkan data!',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['/tabs/tab-order']);
          }
        }, {
          text: 'Keluar',
          handler: () => {
            this.logout();
            console.log('Confirm logout');
          }
        }
      ]
    });

    await alert.present();
  }

  logout()
  {
    this.storage.clear().then(() => {
        this.storage.removeItem('auth');
        this.storage.removeItem('user');
        this.storage.removeItem('company');
        this.storage.removeItem('outlet_active');
        this.storage.removeItem('outlet');
        this.storage.removeItem('product');
        this.router.navigate(['/login']);
    })
  }

}
