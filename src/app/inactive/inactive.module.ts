import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InactivePageRoutingModule } from './inactive-routing.module';

import { InactivePage } from './inactive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InactivePageRoutingModule
  ],
  declarations: [InactivePage]
})
export class InactivePageModule {}
