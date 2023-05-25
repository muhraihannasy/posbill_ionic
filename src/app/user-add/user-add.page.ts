import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})
export class UserAddPage implements OnInit {

  auth: any;
  user: any = {name:'',level:'Admin',email:'',password:''};
  outlet: any;

  showResult: any = false;
  dataResult: any;

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private clipboard: Clipboard
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this.router.navigate(['/user']);
    // });

    this.user.level = 'Admin';
  }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.storage.getObject('auth').then((auth) => {
      this.auth = auth;
      this.getDataOutlet();
    });

  }

  copy(text)
  {
    this.clipboard.copy(text);
    this.global.toastPresent('Text telah disalin!');
  }

  getDataOutlet()
  {
    this.outlet = [];


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
             for(let itemOutlet of data.outlet)
             {
                var thisOutlet = {id:itemOutlet.outlet.id,name:itemOutlet.outlet.name,select:false};
                this.outlet.push(thisOutlet);
             }

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

  process()
  {
    if(this.user.level == 'Admin')
    {
      if((this.user.name == '') || (this.user.level == '') || (this.user.email =='') || (this.user.password == ''))
      {
        this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
        return false;
      }
    }
    else
    {
      if((this.user.name == '') || (this.user.level == ''))
      {
        this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
        return false;
      }
    }

    var accessOutlet = this.outlet.filter(x => x.select === true);

    if(accessOutlet.length < 1)
    {
      this.global.toastPresent('Mohon pilih minimal 1 outlet!');
      return false;
    }

    console.log(this.outlet.length);

    this.global.loadingPresent('menambah pengguna...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  name: this.user.name,
                  level: this.user.level,
                  email: this.user.email,
                  password: this.user.password,
                  outlet: this.outlet
                };

      this.http.post(this.global.base_url+'auth/user/add', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.dataResult = data;
             this.showResult = true;

            this.global.toastPresent(data.message);

             // this.router.navigate(['/user-edit/'+data.id]);
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
