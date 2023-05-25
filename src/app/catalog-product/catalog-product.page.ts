import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.page.html',
  styleUrls: ['./catalog-product.page.scss'],
})
export class CatalogProductPage implements OnInit {

  auth: any;
  product: any;
  category: any;
  showContent: any = false;

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    private alertController: AlertController
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this.router.navigate(['/tabs/tab3']);
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

      this.http.post(this.global.base_url+'auth/category/list', null, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.category = data.category;
             this.getDataProduct();
             console.log(data);
           }
           else
           {
             console.log(data);
           }
          }, error => {
           console.log(error);
      });
    });
  }

  getDataProduct()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};
    this.http.post(this.global.base_url+'auth/product/list', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.product = data.product;
           console.log(data);
         }
         else
         {
           console.log(data);
         }

         this.showContent = true;
         this.global.loadingDismiss();

        }, error => {
         console.log(error);
    });
  }

  getProductByCategory(category_id)
  {
    var filterArray = this.product.filter(x => x.category_id === category_id);
    return filterArray;
  }

  async deleteConfirm(id) {
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
            this.delete(id);
          }
        }
      ]
    });

    await alert.present();
  }

  delete(id)
  {
    this.global.loadingPresent('menghapus produk...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  id: id
                };

      this.http.post(this.global.base_url+'auth/product/delete', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.getDataProduct();
           }
           else
           {
             console.log(data);
           }
           // this.global.loadingDismiss();
          }, error => {
           console.log(error);
           this.global.loadingDismiss();
      });

    });
  }

}
