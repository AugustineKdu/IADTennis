import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  // Object to hold account information
  account = {
    name: '',
    age: null,
    height: null,
    profilePicture: '',
    notes: ''
  };

  constructor(private router: Router) { }

  // Method that runs when the view is about to enter
  ionViewWillEnter() {
    this.loadAccount();
  }

  // Method to load account information from local storage
  loadAccount() {
    const accountData = localStorage.getItem('account');
    if (accountData) {
      this.account = JSON.parse(accountData);
    }
  }

  // Method to save account information to local storage
  saveAccount() {
    localStorage.setItem('account', JSON.stringify(this.account));
    this.router.navigateByUrl('/tabs/home');
  }

  // Method to trigger the file input click event for uploading a picture
  uploadPicture() {
    this.fileInput.nativeElement.click();
  }

  // Method to handle file selection and read the selected file as a data URL
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

  // Method to logout the user by removing the 'isLoggedIn' item from local storage and navigating to the login page
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigateByUrl('/login');
  }
}
