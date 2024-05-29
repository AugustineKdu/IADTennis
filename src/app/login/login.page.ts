import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router, private storageService: StorageService) { }

  ionViewWillEnter() {
    this.loadLoginData();
  }

  async loadLoginData() {
    const savedUsername = await this.storageService.get('username');
    const savedPassword = await this.storageService.get('password');
    const savedRememberMe = await this.storageService.get('rememberMe');

    if (savedRememberMe) {
      this.username = savedUsername;
      this.password = savedPassword;
      this.rememberMe = savedRememberMe;
    }
  }

  async login() {

    if (this.username === 'test' && this.password === 'password') {
      if (this.rememberMe) {
        await this.storageService.set('username', this.username);
        await this.storageService.set('password', this.password);
        await this.storageService.set('rememberMe', this.rememberMe);
      } else {
        await this.storageService.remove('username');
        await this.storageService.remove('password');
        await this.storageService.set('rememberMe', false);
      }
      await this.storageService.set('isLoggedIn', true);
      this.router.navigateByUrl('/tabs');
    } else {
      alert('Invalid credentials');
    }
  }
}
