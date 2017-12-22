import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-into',
  templateUrl: 'into.html',
})
export class IntoPage {

  nextPage = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
