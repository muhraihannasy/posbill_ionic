import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-setting-format',
  templateUrl: './setting-format.page.html',
  styleUrls: ['./setting-format.page.scss'],
})
export class SettingFormatPage implements OnInit {

  auth: any;
  setting:any = {
    format_receipt1:'',
    format_receipt2: '',
  };

  company:any = {name:'',package:''};

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
      private route: ActivatedRoute
  ) {

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
                      format_receipt1: this.setting.format_receipt1,
                      format_receipt2: this.setting.format_receipt2,
                    };

          this.http.post(this.global.base_url+'auth/setting/format_receipt', postData, options)
             .subscribe((data: any) => {
               console.log(data);

               if(data.status == 0)
               {
                 this.global.toastPresent(data.message);
                 this.router.navigate(['/tabs/tab-setting']);
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

}
