import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPayPage } from './new-pay';

@NgModule({
  declarations: [
    NewPayPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPayPage),
  ],
  exports: [
    NewPayPage
  ]
})
export class NewPayPageModule {}
