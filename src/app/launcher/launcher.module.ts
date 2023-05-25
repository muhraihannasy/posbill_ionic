import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LauncherPageRoutingModule } from './launcher-routing.module';

import { LauncherPage } from './launcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LauncherPageRoutingModule
  ],
  declarations: [LauncherPage]
})
export class LauncherPageModule {}
