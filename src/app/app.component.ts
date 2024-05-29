import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      const isLoggedIn = await this.storageService.get('isLoggedIn');
      if (isLoggedIn) {
        this.router.navigateByUrl('/tabs');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
