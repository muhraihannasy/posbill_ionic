import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-catalog-category-add',
  templateUrl: './catalog-category-add.page.html',
  styleUrls: ['./catalog-category-add.page.scss'],
})
export class CatalogCategoryAddPage implements OnInit {

  auth: any;
  category:any = {name: ''};

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    public navController: NavController
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter()
  {
    this.storage.getObject('auth').then((auth) => {
      this.auth = auth;
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
                  name: this.category.name
                };

      this.http.post(this.global.base_url+'auth/category/add', postData, options)
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
