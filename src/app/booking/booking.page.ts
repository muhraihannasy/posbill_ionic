import { Component, OnInit } from '@angular/core';

import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { LoadingController, Platform, MenuController, AlertController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  auth: any;
  user: any;
  name: any;
  level: any;

  booking: any;
  storageBooking: any;
  bookingSearch: any;
  outlet: any;
  storageOutlet: any;

  company: any = {name:''};
  storageCompany: any;

  activeOutlet: any = {id:'',name:''};
  bookingOffline: any = [];
  totalBookingOffline: any;

  start_date: any;
  end_date:any;

  showContent: any = false;
  showUser: any = false;

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router:Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private route: ActivatedRoute,
    private nativePageTransitions: NativePageTransitions,
    private menu: MenuController,
    private alertController: AlertController
  ) {

    this.start_date = this.global.parsingDate(this.global.getFullYear()+'-'+this.global.getMonth()+'-01');
    this.end_date = this.global.getDateOnlyNow();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initialize();
  }

  initialize()
  {
    this.showContent = false;
    this.platform.ready().then(() => {

      this.storage.getObject('auth').then((data: any) => {
          this.auth =  data;
          this.storage.getObject('user').then((user) => {
              let thisUser: any = user;
              this.user = user;
              this.name = thisUser.name;
              this.level = thisUser.level;
              this.showUser = true;
            });
      });

      this.storage.getObject('outlet_active').then((data: any) => {
          this.outlet =  data;
      });

      this.getOfflineCompany();
      this.getOfflineOutlet();

      this.storage.getObject('booking_offline').then((data: any) => {

          if(data != null)
          {
            this.bookingOffline =  data;
            this.totalBookingOffline = this.bookingOffline.length;
          }

          this.storage.getObject('booking').then((data: any) => {
            if(data != null)
            {
              this.storageBooking = data;
              this.syncUpOfflineData();
            }
            else
            {
              this.syncUpOfflineData();
            }
          });

      });
    });
  }

  getOfflineOutlet()
  {
    this.storage.getObject('outlet').then((data: any) => {
      if(data != null)
      {
        this.storageOutlet = data;
        this.outlet = this.storageOutlet.filter(outlet => outlet.outlet.status === 'Active');
      }
      console.log("Offline outlet",data);


      this.getActiveOutlet();

    });
  }

  getOfflineCompany()
  {
    this.storage.getObject('company').then((data: any) => {
      if(data != null)
      {
        this.storageCompany = data;
        this.company = this.storageCompany;
        this.checkExpiredAccount();
      }
      console.log(data);
    });
  }

  checkExpiredAccount()
  {

      this.storage.getObject('user').then((data: any) => {
        if(data != null)
        {
          this.user = data.user;
          if(this.company.expired_at < this.global.getDateOnlyNow())
          {
            if(data.level == 'Owner')
            {
              this.router.navigate(['/subscription']);
              this.global.toastPresent('masa berlaku paket sudah habis, silahkan lakukan pembelian paket berlangganan!');
            }
            else
            {
              this.router.navigate(['/inactive']);
            }
          }
        }
        console.log(data);
      });

  }

  getDataOutlet()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};
    this.http.post(this.global.base_url+'auth/booking/list', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.storage.setObject('outlet',data.outlet);
           this.outlet = data.outlet.filter(outlet => outlet.outlet.status === 'Active');
           this.getActiveOutlet();

           console.log(data);
         }
         else
         {
           console.log(data);
         }

         this.showContent = true;

        }, error => {

         console.log(error);
    });
  }

  getActiveOutlet()
  {
    this.storage.getObject('outlet_active').then((data) => {
      if(data != null)
      {
        this.activeOutlet = data;
        console.log('A',data);
      }
      else
      {
        this.activeOutlet = this.outlet[0].outlet;
        this.storage.setObject('outlet_active',this.activeOutlet);
        console.log('B',data);
      }
    });
  }

  changeOutlet(outlet)
  {
    this.activeOutlet = outlet;
    this.storage.setObject('outlet_active',this.activeOutlet);
    this.global.toastPresent('Outlet <strong>'+outlet.name+ '</strong> aktif!');
    this.initialize();
    this.menu.close('orderleft');
  }

  syncUpOfflineData()
  {
    this.showContent = false;
    if(this.bookingOffline.length > 0)
    {
      for(let orderId of this.bookingOffline)
      {
        var order = this.storageBooking.find(x => x.id === orderId);

        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.auth.token
         });

        let options = {headers: reqHeader};
        this.http.post(this.global.base_url+'auth/booking/store', order, options)
           .subscribe((data: any) => {
             console.log(data);

             if(data.status == 0)
             {
               var offlineIndex = this.bookingOffline.findIndex(y => y === orderId);

               this.bookingOffline.splice(offlineIndex,1);
               this.totalBookingOffline =  this.bookingOffline.length;
               this.storage.setObject('booking_offline',this.bookingOffline);

               if(this.bookingOffline.length == 0)
               {
                  this.global.toastPresentTop('Semua data transaksi berhasil disinkronisasi!','success');
                  this.getData('online');
               }

               console.log(data);
             }
             else
             {
               console.log(data);
             }
            }, error => {
              console.log(error);
              this.global.toastPresentTop('<ion-icon name="sync-outline" color="light"></ion-icon> '+this.bookingOffline.length+' transaksi belum disinkronisasi!','danger');
              this.getData('offline');
            });
      }
    }
    else
    {
        this.getData('online');
    }

  }

  checkThisOrderSync(id)
  {
    var offlineIndex = this.bookingOffline.findIndex(y => y === id);
    if(offlineIndex > -1)
    {
      return true;
    }
  }

  getData(mode)
  {
    if(mode == 'online')
    {
        this.storage.getObject('auth').then((auth) => {

          var reqHeader = new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+this.auth.token
           });

          let options = {headers: reqHeader};

          let postdata = {
                outlet_id: this.activeOutlet.id,
                start_date: this.global.parsingDate(this.start_date),
                end_date: this.global.parsingDate(this.end_date)
              };

          this.http.post(this.global.base_url+'auth/booking/last_per_outlet', postdata, options)
             .subscribe((data: any) => {
               console.log(data);

               if(data.status == 0)
               {
                 this.booking = data.booking;
                 this.bookingSearch = this.booking;
                 this.storage.setObject('booking',this.booking);
                 console.log(data);

               }
               else
               {
                 console.log(data);
               }

               this.showContent = true;

              }, error => {
               console.log(error);
               this.booking = this.storageBooking;
               this.bookingSearch = this.booking;
               this.showContent = true;

          });
        });

    }
    else
    {
      this.booking = this.storageBooking;
      this.bookingSearch = this.booking;
      this.showContent = true;
    }

  }

  detail(id)
  {
    let options: NativeTransitionOptions = {
       direction: 'left',
       duration: 300,
       slowdownfactor: 0,
       slidePixels: 0,
       iosdelay: 0,
       androiddelay: 0,
       fixedPixelsTop: 0,
       fixedPixelsBottom: 0
      }

    this.nativePageTransitions.slide(options);

    this.router.navigate(['/booking-detail/'+id+'/list']);
  }

  async filterList(evt) {
     this.bookingSearch = this.booking;

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.bookingSearch = this.bookingSearch.filter(current => {
      if (current.book_number && searchTerm) {
        return (current.book_number.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });

    console.log(this.bookingSearch);
  }

  async confirmLogout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Konfirmasi',
      message: 'Yakin untuk keluar dari akun Anda?   <br/> <br/> Perhatian : <br/> <span style="color:red">harap lakukan sinkronisasi data order terlebih dahulu, data offline akan dihapus saat Anda keluar akun!</span>',
      buttons: [
        {
          text: 'Sinkronkan data!',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['/tabs/tab-order']);
          }
        }, {
          text: 'Keluar',
          handler: () => {
            this.logout();
            console.log('Confirm logout');
          }
        }
      ]
    });

    await alert.present();
  }
  logout()
  {
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  openMenuLeft()
  {
    this.menu.enable(true, 'bookingleft');
    this.menu.open('bookingleft');
  }

  ionViewWillLeave()
  {

  }

}
