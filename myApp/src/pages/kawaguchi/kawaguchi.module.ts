import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KawaguchiPage } from './kawaguchi';

@NgModule({
  declarations: [
    KawaguchiPage,
  ],
  imports: [
    IonicPageModule.forChild(KawaguchiPage),
  ],
})
export class KawaguchiPageModule {}
