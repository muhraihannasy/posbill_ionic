import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { Printer } from "@ionic-native/printer/ngx";

import { BluetoothSerial } from "@ionic-native/bluetooth-serial/ngx";

import { NativePageTransitions } from "@ionic-native/native-page-transitions/ngx";
import { Ng2GoogleChartsModule } from "ng2-google-charts";

import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";

import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";

import { NativeAudio } from "@ionic-native/native-audio/ngx";
// import { PDFGenerator } from '@ionic-native/pdf-generator';
import { Clipboard } from "@ionic-native/clipboard/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    NgxQRCodeModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Printer,
    BluetoothSerial,
    NativePageTransitions,
    FileTransfer,
    FileTransferObject,
    File,
    GooglePlus,
    BarcodeScanner,
    Base64ToGallery,
    NativeAudio,
    Clipboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
