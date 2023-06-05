import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-image-modal-component",
  templateUrl: "./image-modal-component.component.html",
  styleUrls: ["./image-modal-component.component.scss"],
})
export class ImageModalComponentComponent implements OnInit {
  @Input() title: string;
  @Input() imageUrl: string;

  constructor(private modalController: ModalController) {}
  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
