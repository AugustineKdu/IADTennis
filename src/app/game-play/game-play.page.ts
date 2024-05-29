import { Component } from '@angular/core';
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

  constructor(private modalController: ModalController) { }

  async pauseGame() {
    const modal = await this.modalController.create({
      component: PauseModalPage,
      cssClass: 'pause-modal'
    });
    return await modal.present();
  }

  playerAPoint() {
    if (this.playerAScore < 40) {
      this.playerAScore = this.scores[this.scores.indexOf(this.playerAScore) + 1];
      this.scoreHistory.push(`Player A scored: ${this.playerAScore}`);
    } else if (this.playerAScore === 40 && this.playerBScore < 40) {
      this.scoreHistory.push('Player A wins the game');
      this.resetScores();
    } else if (this.playerAScore === 40 && this.playerBScore === 40) {
      this.playerAScore++;
      this.scoreHistory.push('Player A has advantage');
    } else if (this.playerAScore === 41) {
      this.scoreHistory.push('Player A wins the game');
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
      this.resetScores();
    } else if (this.playerBScore === 40 && this.playerAScore === 40) {
      this.playerBScore++;
      this.scoreHistory.push('Player B has advantage');
    } else if (this.playerBScore === 41) {
      this.scoreHistory.push('Player B wins the game');
      this.resetScores();
    } else if (this.playerBScore === 40 && this.playerAScore === 41) {
      this.playerAScore = 40;
      this.scoreHistory.push('Deuce');
    }
  }

  draw() {
    this.scoreHistory.push('Draw');
  }

  // pauseGame() {
  //   console.log('Game paused');
  // }

  finishGame() {
    console.log('Game finished');
  }

  resetScores() {
    this.playerAScore = 0;
    this.playerBScore = 0;
  }
}
