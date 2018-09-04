import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaguchiPage } from './taguchi';

@NgModule({
  declarations: [
    TaguchiPage,
  ],
  imports: [
    IonicPageModule.forChild(TaguchiPage),
  ],
})
export class TaguchiPageModule {}
