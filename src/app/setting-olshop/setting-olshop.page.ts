import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-setting-olshop',
  templateUrl: './setting-olshop.page.html',
  styleUrls: ['./setting-olshop.page.scss'],
})
export class SettingOlshopPage implements OnInit {

  auth: any;
  setting:any = {
    site_enabled:false,
    site_name:'',
    site_logo:'assets/no-logo.png',
    site_banner:'assets/no-banner.png'
  };

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private route: ActivatedRoute,
    private transfer: FileTransfer,
    private file: File
  ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.getObject('auth').then((auth) => {
      this.auth = auth;
      this.getData();
    });
  }

  getData()
  {
    this.global.loadingPresent('mengambil data...');

    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    this.http.post(this.global.base_url+'auth/setting/data', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.setting = data.company;
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
  }

  async takePictureLogo() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      let imageUrl:any = image.webPath;
      // Can be set to the src of an image now
      //this.setting.site_logo = imageUrl;

      const fileTransfer: FileTransferObject = this.transfer.create();

      let options: FileUploadOptions = {
         fileKey: 'image',
         chunkedMode: false,
         headers:{Connection: 'close'}
      }

      this.global.loadingPresent('Mengupload file...');
      fileTransfer.upload(image.path, this.global.base_url+'auth/upload', options)
       .then((data) => {
         // success
         this.global.loadingDismiss();
         this.setting.site_logo = data.response;
         console.log(data);
       }, (err) => {
         // error
         console.log(err);
     })

    }

    async takePictureBanner() {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri
        });
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        let imageUrl:any = image.webPath;
        // Can be set to the src of an image now
        this.setting.site_banner = imageUrl;

        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
           fileKey: 'image',
           chunkedMode: false,
           headers:{Connection: 'close'}
        }

        console.log(image);

        this.global.loadingPresent('Mengupload file...');
        fileTransfer.upload(image.path, this.global.base_url+'auth/upload', options)
         .then((data) => {
           // success
           this.global.loadingDismiss();
           this.setting.site_banner = data.response;
           console.log(data);
         }, (err) => {
           // error
           console.log(err);
       });


      }

      process()
      {
        if(this.setting.format_receipt1 == '')
        {
          this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
          return false;
        }

        this.global.loadingPresent('menyimpan perubahan... ');
        this.storage.getObject('auth').then((auth) => {

          var reqHeader = new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+this.auth.token
           });

          let options = {headers: reqHeader};

          let postData = {
                      site_enabled: this.setting.site_enabled,
                      site_name: this.setting.site_name,
                      site_logo: this.setting.site_logo,
                      site_banner: this.setting.site_banner
                    };

          this.http.post(this.global.base_url+'auth/setting/online_shop', postData, options)
             .subscribe((data: any) => {
               console.log(data);

               if(data.status == 0)
               {
                 this.global.toastPresent(data.message);
                 this.router.navigate(['/tabs/tab-catalog']);
               }
               else
               {
                 this.global.toastPresent(data.message);
                 console.log(data);
               }
               this.global.loadingDismiss();
              }, error => {
               console.log(error);
          });

        });
      }

}
