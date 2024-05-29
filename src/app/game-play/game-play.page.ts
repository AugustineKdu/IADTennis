import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PauseModalPage } from '../pause-modal/pause-modal.page';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.page.html',
  styleUrls: ['./game-play.page.scss'],
})
export class GamePlayPage {
  scoreHistory: string[] = [];
  playerAScore: number = 0;
  playerBScore: number = 0;
  scores = [0, 15, 30, 40];
  playerAWins: boolean = false;

  constructor(private modalController: ModalController, private router: Router) { }

  ionViewWillEnter() {
    this.resetGame();
  }

  resetGame() {
    this.scoreHistory = [];
    this.playerAScore = 0;
    this.playerBScore = 0;
    this.playerAWins = false;
  }

  async pauseGame() {
    const modal = await this.modalController.create({
      component: PauseModalPage,
      cssClass: 'pause-modal'
    });
    return await modal.present();
  }

  finishGame() {
    const currentGame = JSON.parse(localStorage.getItem('currentGame') || '{}');
    const gameRecords = JSON.parse(localStorage.getItem('gameRecords') || '[]');

    currentGame.records = this.scoreHistory;
    currentGame.playerAWins = this.playerAWins;
    currentGame.name = currentGame.name || `Game ${gameRecords.length + 1}`;

    // 차트 데이터 생성
    const playerAScores: number[] = [];
    const playerBScores: number[] = [];
    const labels: string[] = [];
    let playerAScore = 0;
    let playerBScore = 0;

    this.scoreHistory.forEach((record, index) => {
      if (record.includes('Player A scored')) {
        playerAScore++;
      } else if (record.includes('Player B scored')) {
        playerBScore++;
      }

      playerAScores.push(playerAScore);
      playerBScores.push(playerBScore);
      labels.push(`Point ${index + 1}`);
    });

    currentGame.chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Player A',
          data: playerAScores,
          borderColor: 'blue',
          fill: false,
        },
        {
          label: 'Player B',
          data: playerBScores,
          borderColor: 'red',
          fill: false,
        }
      ]
    };

    gameRecords.push(currentGame);

    localStorage.setItem('gameRecords', JSON.stringify(gameRecords));
    localStorage.setItem('selectedGame', JSON.stringify(currentGame)); // 결과 페이지로 전달할 데이터 저장
    this.router.navigateByUrl('/tabs/game-results'); // 게임 리스트가 아니라 결과 페이지로 이동
  }

  playerAPoint() {
    if (this.playerAScore < 40) {
      this.playerAScore = this.scores[this.scores.indexOf(this.playerAScore) + 1];
      this.scoreHistory.push(`Player A scored: ${this.playerAScore}`);
    } else if (this.playerAScore === 40 && this.playerBScore < 40) {
      this.scoreHistory.push('Player A wins the game');
      this.playerAWins = true;
      this.resetScores();
    } else if (this.playerAScore === 40 && this.playerBScore === 40) {
      this.playerAScore++;
      this.scoreHistory.push('Player A has advantage');
    } else if (this.playerAScore === 41) {
      this.scoreHistory.push('Player A wins the game');
      this.playerAWins = true;
      this.resetScores();
    } else if (this.playerAScore === 40 && this.playerBScore === 41) {
      this.playerBScore = 40;
      this.scoreHistory.push('Deuce');
    }
  }

  playerBPoint() {
    if (this.playerBScore < 40) {
      this.playerBScore = this.scores[this.scores.indexOf(this.playerBScore) + 1];
      this.scoreHistory.push(`Player B scored: ${this.playerBScore}`);
    } else if (this.playerBScore === 40 && this.playerAScore < 40) {
      this.scoreHistory.push('Player B wins the game');
      this.playerAWins = false;
      this.resetScores();
    } else if (this.playerBScore === 40 && this.playerAScore === 40) {
      this.playerBScore++;
      this.scoreHistory.push('Player B has advantage');
    } else if (this.playerBScore === 41) {
      this.scoreHistory.push('Player B wins the game');
      this.playerAWins = false;
      this.resetScores();
    } else if (this.playerBScore === 40 && this.playerAScore === 41) {
      this.playerAScore = 40;
      this.scoreHistory.push('Deuce');
    }
  }

  draw() {
    this.scoreHistory.push('Draw');
  }

  resetScores() {
    this.playerAScore = 0;
    this.playerBScore = 0;
  }
}
