import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceModel } from '../../model/service.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  single: ServiceModel = {
    img: 'assets/imgs/mask.jpg',
    title: 'Jonathan Smith',
    place: 'Palestine',
    price: '30$/hr'
  };

  public data: ServiceModel[] = []

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 14; i++) {
      this.data.push(this.single);
    }

  }

}
