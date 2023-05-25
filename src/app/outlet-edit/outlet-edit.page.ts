import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-outlet-edit',
  templateUrl: './outlet-edit.page.html',
  styleUrls: ['./outlet-edit.page.scss'],
})
export class OutletEditPage implements OnInit {

  id: any;
  auth: any;
  outlet: any = {name:'',address:'',phone:''};

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
    //   this.router.navigate(['/outlet']);
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

    let postData = {id: this.id};

    this.http.post(this.global.base_url+'auth/outlet/detail', postData, options)
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
  }

  process()
  {
    if((this.outlet.name == '') || (this.outlet.address == ''))
    {
      this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
      return false;
    }

    if((this.outlet.name == null) || (this.outlet.address == null))
    {
      this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
      return false;
    }

    this.global.loadingPresent('menambah outlet...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  id: this.id,
                  name: this.outlet.name,
                  address: this.outlet.address,
                  phone: this.outlet.phone
                };

      this.http.post(this.global.base_url+'auth/outlet/edit', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/outlet']);
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

      this.http.post(this.global.base_url+'auth/outlet/delete', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/outlet']);
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
