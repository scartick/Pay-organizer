import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewPayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-pay',
  templateUrl: 'new-pay.html',
})

export class NewPayPage {
  payCost  : string = '';
  payName : string = '';
  result : string = '';
  items : string[];
  totalItems : string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.totalItems = [];
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad NewPayPage');
  }
addNewPay() {
  console.log(String(this.payCost));
  this.result = String(Number(this.result) + Number(this.payCost));
  this.items.push(this.payName + '          ' + this.payCost);
  this.totalItems = ['Total' + '     ' + this.result];
  console.log(this.items);
}
itemSelected(item) {

}
totalItemSelected(totalItem) {

}
savePays() {
  
}
}
