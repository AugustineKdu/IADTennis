import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.page.html',
  styleUrls: ['./game-results.page.scss'],
})
export class GameResultsPage {
  game: any;
  gameRecords: string[] = [];

  constructor(private router: Router) { }

  ionViewWillEnter() {
    this.loadGameData();
  }

  loadGameData() {
    const selectedGame = localStorage.getItem('selectedGame');
    if (selectedGame) {
      this.game = JSON.parse(selectedGame);
      this.gameRecords = this.game.records || [];
    }
  }

  goBack() {
    this.router.navigateByUrl('/tabs/game-list');
  }
}
