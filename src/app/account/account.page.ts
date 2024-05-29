import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  account = {
    name: '',
    age: null,
    height: null,
    profilePicture: '',
    notes: ''
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

  uploadPicture() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.account.profilePicture = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigateByUrl('/login');
  }
}
