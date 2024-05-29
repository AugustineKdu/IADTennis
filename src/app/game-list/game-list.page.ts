import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})
export class GameListPage {
  gameRecords: any[] = [];

  constructor(private router: Router) { }

  ionViewWillEnter() {
    this.loadGameRecords();
  }

  loadGameRecords() {
    const gameRecords = localStorage.getItem('gameRecords');
    if (gameRecords) {
      this.gameRecords = JSON.parse(gameRecords);
    } else {
      this.gameRecords = [];
    }
  }

  viewGameDetail(index: number) {
    localStorage.setItem('selectedGame', JSON.stringify(this.gameRecords[index]));
    this.router.navigateByUrl('/tabs/game-results');
  }

  goHome() {
    this.router.navigateByUrl('/tabs/home');
  }
}
