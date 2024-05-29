import { Component, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pause-modal',
  templateUrl: './pause-modal.page.html',
  styleUrls: ['./pause-modal.page.scss'],
})
export class PauseModalPage implements OnDestroy {
  minutes: number = 0;
  seconds: number = 0;
  minutesDisplay: number = 0;
  secondsDisplay: number = 0;
  interval: any;

  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  startTimer() {
    this.minutesDisplay = this.minutes;
    this.secondsDisplay = this.seconds;
    this.interval = setInterval(() => {
      if (this.secondsDisplay === 0) {
        if (this.minutesDisplay === 0) {
          this.stopTimer();
          return;
        }
        this.minutesDisplay--;
        this.secondsDisplay = 59;
      } else {
        this.secondsDisplay--;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    this.stopTimer();
  }
}
