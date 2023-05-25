import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../global.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { StorageService } from '../storage.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // showForm: any = true;
  // email: any = 'test1@posbill.id';

  showForm: any = false;
  email: any = '';

  name: any = '';
  companyName: any = '';
  phone: any = '';

  password: any = '';
  repassword: any = '';

  terms: any = false;
  privacy: any = false;

  businessType: any;
  business_type_id: any;

  outlet: any = {name:'',address:'',province_id:'',city:'',subdistrict_id:'',phone:''};
  province: any = [];
  city: any = [];
  subdistrict: any = [];

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private router: Router,
    private toastController: ToastController,
    private storage: StorageService,
    private googlePlus: GooglePlus
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.global.loadingPresent('menyiapkan form registrasi..');
    this.getBusinessType();
  }

  getBusinessType()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
     });

    let options = {headers: reqHeader};

    this.http.post(this.global.base_url+'auth/business_type', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.businessType = data.type;
         }

         this.getProvince();



        }, error => {
         console.log(error);
    });
  }

  getProvince()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
     });

    let options = {headers: reqHeader};

    this.http.post(this.global.base_url+'auth/outlet/province', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.province = data.province;
         }

          this.global.loadingDismiss();
        }, error => {
         console.log(error);
          this.global.loadingDismiss();
    });
  }

  getCity()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
     });

    let options = {headers: reqHeader};

    let postData = {province_id: this.outlet.province_id};

    this.http.post(this.global.base_url+'auth/outlet/city', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.city = data.city;
           this.outlet.city_id = data.city[0].id;
           this.subdistrict = [];
           this.outlet.subdistrict_id = '';

           console.log(this.outlet.city_id);
         }

        }, error => {
         console.log(error);
    });
  }

  getSubdistrict()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
     });

    let options = {headers: reqHeader};

    let postData = {city_id: this.outlet.city_id};

    this.http.post(this.global.base_url+'auth/outlet/subdistrict', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.subdistrict = data.subdistrict;
           this.outlet.subdistrict_id = data.subdistrict[0].id;
         }

        }, error => {
         console.log(error);
    });
  }

  process(plan)
  {
    if((this.name == '') || (this.companyName == '') || (this.business_type_id == '') || (this.phone == '') || (this.email == '') || (this.password == '') ||  (this.repassword == '') || (this.outlet.name == '') || (this.outlet.address == '') || (this.outlet.province_id == '') || (this.outlet.city_id == '') || (this.outlet.subdistrict_id == ''))
    {
      this.global.toastPresent('Silahkan lengkapi semua kolom pendaftaran!');
      return false;
    }
    if(this.password != this.repassword)
    {
      this.global.toastPresent('Password dan konfirmasi password tidak sama!');
      return false;
    }

    this.global.loadingPresent('registrasi akun...');

    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
     });

    let options = {headers: reqHeader};

    let postData = {
             "name":this.name,
             "phone": this.phone,
             "email":this.email,
             "company_name":this.companyName,
             "business_type_id": this.business_type_id,
             "password":this.password,
             "outlet": this.outlet,
             "package": plan
    };

    this.http.post(this.global.base_url+'auth/register', postData, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           //---
           var reqHeader = new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': 'Bearer '+data.token
            });

           let options = {headers: reqHeader};

           this.http.post(this.global.base_url+'auth/me', null, options)
              .subscribe((data2: any) => {

                if(data2.id)
                {
                  var auth = {token:data.token};
                  var user = {id: data2.id, name: data2.name, email: data2.email,level:data2.level};

                  this.storage.clear().then(() => {
                    this.storage.setObject('auth',auth);
                    this.storage.setObject('user',user);
                    this.global.toastPresent(data.message);
                    this.router.navigate(['/tabs/tab-pos/register']);
                  });

                }
                else
                {
                  console.log("Unathorized");
                }

                this.global.loadingDismiss();
               }, error => {

              console.log(error);
           });

           this.presentToast(data.message);
         }
         else
         {
           this.presentToast(data.message);
         }

         this.global.loadingDismiss();

        }, error => {
         console.log(error);
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  openForm(res)
  {
    this.showForm = true;
    this.email = res.email;
  }

  loginByGoogle()
  {
    this.googlePlus.login({})
    .then(res =>
      this.openForm(res)
    )
    .catch(err => console.error(err));
  }

}
