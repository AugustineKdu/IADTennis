import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.page.html',
  styleUrls: ['./game-results.page.scss'],
})
export class GameResultsPage implements AfterViewInit {
  game: any;
  gameRecords: string[] = [];

  constructor(private router: Router) { }

  // Method that runs when the view is about to enter
  ionViewWillEnter() {
    this.loadGameData();
  }

  // Lifecycle hook that runs after the view has been initialized
  ngAfterViewInit() {
    this.createChart();
  }

  // Method to load game data from local storage
  loadGameData() {
    const selectedGame = localStorage.getItem('selectedGame');
    if (selectedGame) {
      this.game = JSON.parse(selectedGame);
      this.gameRecords = this.game.records || [];
    }
  }

  // Method to create a chart with the game data
  createChart() {
    if (!this.game.chartData) {
      return;
    }

    const ctx = document.getElementById('scoreChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: this.game.chartData,
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Points'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Score'
            }
          }
        }
      }
    });
  }

  // Method to navigate back to the game list
  goBack() {
    this.router.navigateByUrl('/tabs/game-list');
  }
}
