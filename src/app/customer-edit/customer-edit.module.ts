import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerEditPageRoutingModule } from './customer-edit-routing.module';

import { CustomerEditPage } from './customer-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerEditPageRoutingModule
  ],
  declarations: [CustomerEditPage]
})
export class CustomerEditPageModule {}
