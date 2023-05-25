import { Component, OnInit } from '@angular/core';import { v4 as uuidv4 } from 'uuid';

import { NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { GlobalService } from '../global.service';

import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-catalog-product-add',
  templateUrl: './catalog-product-add.page.html',
  styleUrls: ['./catalog-product-add.page.scss'],
})
export class CatalogProductAddPage implements OnInit {

  auth: any;
  product: any = {
              id:uuidv4(),
              sku: '',
              category_id:'',
              name: '',
              description: '',
              cost: '',
              price: '',
              unit_id: '',
              price_type1: '',
              price_type2: '',
              price_type3: '',
              price_type4: '',
              price_type5: '',
              image:'assets/no-image.png',
              track_stock: false
            };

  storageProduct: any = [];

  unit: any = [];

  category: any;
  storageCategory: any = [];
  company: any = {
                    order_type1: 0,
                    order_type2: 0,
                    order_type3: 0,
                    order_type4: 0,
                    order_type5: 0,
                    order_type_label1: '',
                    order_type_label2: '',
                    order_type_label3: '',
                    order_type_label4: '',
                    order_type_label5: '',
                    package: '',
                  };

  outlet: any;
  storageOutlet : any = [];

  stockOutlet: any = [];

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    public navController: NavController,
    private transfer: FileTransfer,
    private file: File,
    private barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.getObject('auth').then((auth) => {
      this.auth = auth;
      this.getOfflineOutlet();
      this.getDataCategory();
      this.getDataUnit();
      this.getDataCompany();
    });
  }
  scanBarcode()
  {
    this.barcodeScanner.scan().then(barcodeData => {
          this.product.sku = barcodeData.text;
          console.log(barcodeData);
      }).catch(err => {
          console.log('Error', err);
      });
  }

  getOfflineOutlet()
  {
    this.storage.getObject('outlet').then((data: any) => {
      if(data != null)
      {
        this.storageOutlet = data;
        this.outlet = this.storageOutlet.filter(outlet => outlet.outlet.status === 'Active');
        var pushOutlet = [];

        for(let item of this.outlet)
        {
          pushOutlet.push({id:item.outlet.id,name:item.outlet.name,enabled:true,stock:0});
        }

        this.stockOutlet = pushOutlet;
      }
      console.log("Offline outlet",data);

    });
  }

  getDataCompany()
  {
    this.global.loadingPresent('mengambil data...');

    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};


    this.http.post(this.global.base_url+'auth/setting/data', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.company = data.company;
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

  getDataCategory()
  {
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
           this.product.category_id = data.category[0].id;
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

  getDataUnit()
  {
    var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.auth.token
     });

    let options = {headers: reqHeader};

    this.http.post(this.global.base_url+'auth/unit/list', null, options)
       .subscribe((data: any) => {
         console.log(data);

         if(data.status == 0)
         {
           this.unit = data.unit;
           this.product.unit_id = data.unit[0].id;
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

  process()
  {
    if((this.product.name == '') || (this.product.category_id == '') || (this.product.price < 1))
    {
      this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
      return false;
    }

    this.global.loadingPresent('menambah produk...');
    this.storage.getObject('auth').then((auth) => {

      var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.auth.token
       });

      let options = {headers: reqHeader};

      let postData = {
                  sku: this.product.sku,
                  name: this.product.name,
                  category_id:this.product.category_id,
                  description: this.product.description,
                  cost: this.product.cost,
                  price: this.product.price,
                  unit_id: this.product.unit_id,
                  image: this.product.image,
                  track_stock: this.product.track_stock,
                  price_type1: this.product.price_type1,
                  price_type2: this.product.price_type2,
                  price_type3: this.product.price_type3,
                  price_type4: this.product.price_type4,
                  price_type5: this.product.price_type5,
                  stock_outlet: this.stockOutlet
                };

      this.http.post(this.global.base_url+'auth/product/add', postData, options)
         .subscribe((data: any) => {
           console.log(data);

           if(data.status == 0)
           {
             this.global.toastPresent(data.message);
             this.router.navigate(['/catalog-product']);
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

  async takePicture() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      let imageUrl:any = image.webPath;
      // Can be set to the src of an image now
      this.product.image = imageUrl;

      const fileTransfer: FileTransferObject = this.transfer.create();

      let options: FileUploadOptions = {
         fileKey: 'image',
         chunkedMode: false,
         headers:{Connection: 'close'}
      }

      this.global.loadingPresent('Mengupload file...');
      fileTransfer.upload(image.path, this.global.base_url+'auth/product/upload', options)
       .then((data) => {
         // success
         this.global.loadingDismiss();
         this.product.image = data.response;
         console.log(data);
       }, (err) => {
         // error
         console.log(err);
     })

    }

    setDefaultPrice()
    {
      this.product.price_type1 = this.product.price;
      this.product.price_type2 = this.product.price;
      this.product.price_type3 = this.product.price;
      this.product.price_type4 = this.product.price;
      this.product.price_type5 = this.product.price;
    }
}
