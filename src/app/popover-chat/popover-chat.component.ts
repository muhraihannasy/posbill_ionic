import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  template: `
    <ion-list>
      <ion-item (click)="closePopover()">Pilihan 1</ion-item>
      <ion-item (click)="closePopover()">Pilihan 2</ion-item>
      <ion-item (click)="closePopover()">Pilihan 3</ion-item>
    </ion-list>
  `,
})
export class PopoverChatComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  closePopover() {
    this.popoverController.dismiss();
  }
}
