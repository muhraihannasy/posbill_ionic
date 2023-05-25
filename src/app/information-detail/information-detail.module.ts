import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InformationDetailPageRoutingModule } from "./information-detail-routing.module";

import { InformationDetailPage } from "./information-detail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationDetailPageRoutingModule,
  ],
  declarations: [InformationDetailPage],
})
export class InformationDetailPageModule {}
