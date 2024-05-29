import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  account = {
    name: '',
    age: null,
    height: null
  };

  constructor(private router: Router) { }

  ionViewWillEnter() {
    this.loadAccount();
  }

  loadAccount() {
    const accountData = localStorage.getItem('account');
    if (accountData) {
      this.account = JSON.parse(accountData);
    }
  }

  saveAccount() {
    localStorage.setItem('account', JSON.stringify(this.account));
    this.router.navigateByUrl('/tabs/home');
  }
}
