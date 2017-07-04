import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPayPage } from '../new-pay/new-pay';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  createPay() {
    console.log('crap');
    this.navCtrl.push(NewPayPage);
  }
}
