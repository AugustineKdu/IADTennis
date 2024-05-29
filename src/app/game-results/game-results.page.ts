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

  ionViewWillEnter() {
    this.loadGameData();
  }

  ngAfterViewInit() {
    this.createChart();
  }

  loadGameData() {
    const selectedGame = localStorage.getItem('selectedGame');
    if (selectedGame) {
      this.game = JSON.parse(selectedGame);
      this.gameRecords = this.game.records || [];
    }
  }

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

  goBack() {
    this.router.navigateByUrl('/tabs/game-list');
  }
}
