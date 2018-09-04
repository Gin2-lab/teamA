import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Example1Page } from './example1';

@NgModule({
  declarations: [
    Example1Page,
  ],
  imports: [
    IonicPageModule.forChild(Example1Page),
  ],
})
export class Example1PageModule {}
