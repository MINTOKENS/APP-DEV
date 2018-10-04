import { Component } from '@angular/core';

import { PaymentPage } from '../payment/payment';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BalancePage } from '../balance/balance';
import { TransactionPage } from '../transaction/transaction';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  paymentRoot = PaymentPage;
  tab3Root = ContactPage;
  balanceRoot = BalancePage;
  transactionRoot = TransactionPage;
  profileRoot = ProfilePage;

  constructor() {

  }
}
