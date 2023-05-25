import { Component, OnInit } from '@angular/core';

import { ToastController, Platform } from '@ionic/angular';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-catalog-category',
  templateUrl: './catalog-category.page.html',
  styleUrls: ['./catalog-category.page.scss'],
})
export class CatalogCategoryPage implements OnInit {

  auth: any;
  category: any;

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private platform: Platform
  ) {

  }

  ngOnInit()
  {

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

}
