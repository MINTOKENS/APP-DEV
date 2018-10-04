import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  account: { fullname: string, email: string, password: string };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.account = { fullname: '', email: '', password: '' };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.setRoot(TabsPage);
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }
}
