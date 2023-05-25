import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

  id: any;
  user: any = {name:'',level:'',email:'',changepassword:''};
  outlet: any;
  auth: any;

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this.router.navigate(['/user']);
    // });

    this.route.params.subscribe((params: any) => {
      if(params['id'])
      {
        this.id = params['id'];
      }
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
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

    let postData = {id:this.id};

    this.http.post(this.global.base_url+'auth/user/detail', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.user = data.user;
           this.getDataOutlet();
           console.log(data);
         }
         else
         {
           console.log(data);
         }

        }, error => {
         console.log(error);
    });
  }

  getDataOutlet()
  {
    this.outlet = [];

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
              var checkAccOutlet = this.user.outlet.findIndex(x => x.outlet_id === itemOutlet.outlet.id);

              if(checkAccOutlet > -1)
              {
                  var thisOutlet = {id:itemOutlet.outlet.id,name:itemOutlet.outlet.name,select:true};
              }
              else
              {
                var thisOutlet = {id:itemOutlet.outlet.id,name:itemOutlet.outlet.name,select:false};
              }

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
  }

  process()
  {
    if((this.user.name == '') || (this.user.level == '') || (this.user.email =='') || (this.user.password == ''))
    {
      this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
      return false;
    }



    var accessOutlet = this.outlet.filter(x => x.select === true);

    if(accessOutlet.length < 1)
    {
      this.global.toastPresent('Mohon pilih minimal 1 outlet!');
      return false;
    }

      this.global.loadingPresent('menyimpan perubahan...');

    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  id: this.id,
                  name: this.user.name,
                  level: this.user.level,
                  email: this.user.email,
                  password: this.user.changepassword,
                  outlet: this.outlet
                };

      this.http.post(this.global.base_url+'auth/user/edit', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/user']);
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

  async deleteConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Konfirmasi hapus!',
      message: 'Anda yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Hapus',
          handler: () => {
            this.delete();
          }
        }
      ]
    });

    await alert.present();
  }

  delete()
  {
    this.global.loadingPresent('menghapus outlet...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  id: this.id
                };

      this.http.post(this.global.base_url+'auth/user/delete', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/user']);
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
