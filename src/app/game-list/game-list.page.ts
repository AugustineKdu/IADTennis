import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})
export class GameListPage {
  gameRecords: any[] = [];

  constructor(private router: Router, private alertController: AlertController) { }

  // Method that runs when the view is about to enter
  ionViewWillEnter() {
    this.loadGameRecords();
  }

  // Method to load game records from local storage
  loadGameRecords() {
    const gameRecords = localStorage.getItem('gameRecords');
    if (gameRecords) {
      this.gameRecords = JSON.parse(gameRecords);
    } else {
      this.gameRecords = [];
    }
  }

  // Method to view game details and navigate to the game results page
  viewGameDetail(index: number) {
    localStorage.setItem('selectedGame', JSON.stringify(this.gameRecords[index]));
    this.router.navigateByUrl('/tabs/game-results');
  }

  // Method to edit the name of a game record
  async editGameName(index: number) {
    const alert = await this.alertController.create({
      header: 'Edit Game Name',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: this.gameRecords[index].name || `Game ${index + 1}`,
          placeholder: 'Enter game name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.gameRecords[index].name = data.name;
            this.saveGameRecords();
          }
        }
      ]
    });

    await alert.present();
  }

  // Method to delete a game record with confirmation
  async deleteGame(index: number) {
    const alert = await this.alertController.create({
      header: 'Delete Game',
      message: 'Are you sure you want to delete this game?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.gameRecords.splice(index, 1);
            this.saveGameRecords();
          }
        }
      ]
    });

    await alert.present();
  }

  // Method to save game records to local storage
  saveGameRecords() {
    localStorage.setItem('gameRecords', JSON.stringify(this.gameRecords));
  }

  // Method to navigate to the home page
  goHome() {
    this.router.navigateByUrl('/tabs/home');
  }
}
