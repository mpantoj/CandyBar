import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sweettable',
  templateUrl: 'sweettable.html',
})
export class SweettablePage {
data:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=navParams.get('data')
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SweettablePage');
  }

}
