import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.page.html',
  styleUrls: ['./game-setup.page.scss'],
})
export class GameSetupPage {
  game = {
    dateTime: '',
    playerName: '',
    description: '',
    location: '',
    preset: '',
    sets: 1
  };

  constructor(private router: Router) { }

  goBack() {
    this.router.navigateByUrl('/tabs/home');
  }

  startGame() {
    // 게임 시작 로직 구현
    console.log(this.game);
    this.router.navigateByUrl('/tabs/game-play');
  }
}
