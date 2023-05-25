import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ToastController, AlertController} from '@ionic/angular';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-catalog-category-edit',
  templateUrl: './catalog-category-edit.page.html',
  styleUrls: ['./catalog-category-edit.page.scss'],
})
export class CatalogCategoryEditPage implements OnInit {

  auth: any;
  id: any;
  category:any = {id:'',name:''};

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    public navController: NavController,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
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

    this.http.post(this.global.base_url+'auth/category/detail', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.category = data.category;
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
    if(this.category.name == '')
    {
      this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
      return false;
    }
    this.global.loadingPresent('menambah kategori...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  id: this.id,
                  name: this.category.name
                };

      this.http.post(this.global.base_url+'auth/category/edit', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/catalog-category']);
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
    this.global.loadingPresent('menghapus kategori...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  id: this.id
                };

      this.http.post(this.global.base_url+'auth/category/delete', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/catalog-category']);
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
