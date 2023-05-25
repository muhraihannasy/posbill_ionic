import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.page.html',
  styleUrls: ['./account-edit.page.scss'],
})
export class AccountEditPage implements OnInit {

  user: any = {name:'',email:'',phone:'',level:''};
  auth: any;
  company: any = {name: '',address:''};
  showContent: any = false;
  password : any;
  repassword: any;

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private route: ActivatedRoute
  ) { }

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


    this.http.post(this.global.base_url+'auth/me', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.user = data;
           this.company = data.company;

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

  process()
  {
    if((this.password != '') || (this.password != null))
    {
      if(this.password != this.repassword)
      {
        this.global.toastPresent('password tidak sama!');
        return false;
      }
    }
    this.global.loadingPresent('menyimpan data...');

    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    let postData = {
                    name: this.user.name,
                    email: this.user.email,
                    phone: this.user.phone,
                    password: this.password,
                    company_name: this.company.name,
                    company_address: this.company.address
                  };


    this.http.post(this.global.base_url+'auth/edit_account', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.user = data;

           console.log(data);
         }
         else
         {
           console.log(data);
         }
          this.showContent = true;
          this.global.loadingDismiss();
          this.router.navigate(['/account']);
        }, error => {
         console.log(error);
    });
  }

}
