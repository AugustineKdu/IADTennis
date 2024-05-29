import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';  // 초기값 할당
  password: string = '';  // 초기값 할당

  constructor(private router: Router, private storageService: StorageService) { }

  async login() {
    // 임시 로그인 로직
    if (this.username === 'test' && this.password === 'password') {
      await this.storageService.set('isLoggedIn', true);
      this.router.navigateByUrl('/tabs');
    } else {
      alert('Invalid credentials');
    }
  }
}
