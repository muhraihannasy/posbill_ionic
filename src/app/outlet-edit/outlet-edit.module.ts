import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutletEditPageRoutingModule } from './outlet-edit-routing.module';

import { OutletEditPage } from './outlet-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutletEditPageRoutingModule
  ],
  declarations: [OutletEditPage]
})
export class OutletEditPageModule {}
