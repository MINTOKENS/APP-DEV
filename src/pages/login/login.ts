import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: { email: string, password: string };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.account = { email: '', password: '' };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.navCtrl.setRoot(TabsPage);
  }

  goToRegister() {
    this.navCtrl.setRoot(RegisterPage);
  }
}
