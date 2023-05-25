import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutletAddPageRoutingModule } from './outlet-add-routing.module';

import { OutletAddPage } from './outlet-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutletAddPageRoutingModule
  ],
  declarations: [OutletAddPage]
})
export class OutletAddPageModule {}
