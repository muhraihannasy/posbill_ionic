import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersEditPageRoutingModule } from './orders-edit-routing.module';

import { OrdersEditPage } from './orders-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersEditPageRoutingModule
  ],
  declarations: [OrdersEditPage]
})
export class OrdersEditPageModule {}
