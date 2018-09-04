import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YaguchiPage } from './yaguchi';

@NgModule({
  declarations: [
    YaguchiPage,
  ],
  imports: [
    IonicPageModule.forChild(YaguchiPage),
  ],
})
export class YaguchiPageModule {}
