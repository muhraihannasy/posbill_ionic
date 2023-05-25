import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineShopPageRoutingModule } from './online-shop-routing.module';

import { OnlineShopPage } from './online-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineShopPageRoutingModule
  ],
  declarations: [OnlineShopPage]
})
export class OnlineShopPageModule {}
