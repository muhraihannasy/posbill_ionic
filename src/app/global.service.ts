import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { ToastController, LoadingController } from "@ionic/angular";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  // base_url = 'http://localhost/Tokomobile-admin/public/api/';
  // public base_url = "http://127.0.0.1:8000/api/";
  public appname = "Posbill";
  // public domain = "https://app.posbill.id/";
  public domain = "https://app.posbill.dev/";
  public base_url = "http://127.0.0.1:8000/api/";
  public basic_key =
    "6EDE2F267F8A7439B62CAA95A56A25D47B05E16B0D9FEC79676DD0E7E96E884A";
  public topicName = "posbill";

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private storage: StorageService
  ) {
    this.base_url = this.domain + "api/";
  }

  getHeader() {
    var headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    return headers;
  }

  currency(angka, prefix = "Rp") {
    if (angka == null) {
      angka = 0;
    }
    angka = angka.toString();
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      var separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp" + rupiah : "";
  }

  public getFirstImage(image) {
    return image.split(",")[0];
  }

  saleStatus(status) {
    if (status == 1) return "Pending";
    if (status == 2) return "Diproses";
    if (status == 3) return "Selesai";
    if (status == 4) return "Dibatalkan";
  }

  paymentStatus(status) {
    if (status == 1) return "Pending";
    if (status == 2) return "Lunas";
  }

  getDateNow() {
    var d = new Date();
    var dString =
      this.getFullYear() +
      "-" +
      this.getMonth() +
      "-" +
      this.getDate() +
      " " +
      this.getHour() +
      ":" +
      this.getMinute() +
      ":" +
      this.getSecond();

    return dString;
  }

  getDateOnlyNow() {
    var d = new Date();
    var dString =
      this.getFullYear() + "-" + this.getMonth() + "-" + this.getDate();

    return dString;
  }

  getFullYear() {
    var year = new Date();
    var yearString = String(year.getFullYear());

    return yearString;
  }

  getFullYear2Ago() {
    var year = new Date();
    year.setMonth(year.getMonth() - 2);
    var yearString = String(year.getFullYear());

    return yearString;
  }

  getYear() {
    var year = new Date();
    var yearString = String(year.getFullYear().toString().substr(-2));

    return yearString;
  }

  getMonth() {
    var dateStr = new Date();
    var month = String(dateStr.getMonth() + 1);
    var monthStr = String(month);
    if (monthStr.length == 1) {
      var monthStr = "0" + monthStr;
    }

    return monthStr;
  }

  getNameDate(date, option: any) {
    const dateFormatter = new Intl.DateTimeFormat("id-ID", option);
    const formattedDate = dateFormatter.format(date);

    return formattedDate;
  }

  getMonth2Ago() {
    var dateStr = new Date();
    dateStr.setMonth(dateStr.getMonth() - 2);
    var month = String(dateStr.getMonth() + 1);
    var monthStr = String(month);
    if (monthStr.length == 1) {
      var monthStr = "0" + monthStr;
    }

    return monthStr;
  }

  getDate() {
    var dateStr = new Date();
    var dateDay = dateStr.getDate();
    var dateDayStr = String(dateDay);
    if (dateDayStr.length == 1) {
      var dateDayStr = "0" + dateDayStr;
    }

    return dateDayStr;
  }

  getHour() {
    var hour = new Date();
    var hourString = String(hour.getHours());

    return hourString;
  }

  getMinute() {
    var minute = new Date();
    var minuteString = String(minute.getMinutes());

    return minuteString;
  }

  getSecond() {
    var second = new Date();
    var secondString = String(second.getSeconds());

    return secondString;
  }

  getMathRandom() {
    var a = Math.random() * 100000;
    var aString = String(a);
    var randomString = aString.split(".");

    return randomString[0];
  }

  parsingDate(date) {
    var dateStr = new Date(date);

    var dateDay = dateStr.getDate();
    var dateDayStr = String(dateDay);
    if (dateDayStr.length == 1) {
      var dateDayStr = "0" + dateDayStr;
    }

    var month = dateStr.getMonth() + 1;
    var monthStr = String(month);
    if (monthStr.length == 1) {
      var monthStr = "0" + monthStr;
    }

    return dateStr.getFullYear() + "-" + monthStr + "-" + dateDayStr;
  }

  checkAuth(token) {}

  newDate(date) {
    var newDate = new Date(date);

    return newDate;
  }

  async loadingPresent(message) {
    const loading = await this.loadingController.create({
      spinner: "dots",
      cssClass: "my-custom-class",
      message: message,
      duration: 10000,
      mode: "ios",
    });
    await loading.present();
  }

  loadingDismiss() {
    this.loadingController.dismiss();
  }

  async toastPresent(message, color = "dark") {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: "bottom",
    });
    toast.present();
  }

  async toastPresentNoDuration(message, color = "dark") {
    const toast = await this.toastController.create({
      message: message,
      color: color,
      position: "bottom",
      buttons: [
        {
          side: "end",
          text: "Tutup",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
            this.toastController.dismiss();
          },
        },
      ],
    });
    toast.present();
  }

  async toastPresentTop(message, color = "dark") {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: "top",
    });
    toast.present();
  }
}
