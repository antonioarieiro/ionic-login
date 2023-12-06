import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonMenu, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonMenu, IonToolbar, IonButtons, IonMenuButton, CommonModule]
})

export class TimerComponent  implements OnInit {

  status: number = 1;
  started: boolean = false;
  minutes: number = 1;
  seconds: number = 0;
  progress: number = 0;
  progressIncrement: number = 0;
  interval: any;
  minutesDom: any;
  secondsDom: any;
  fillerDom: any;

  currentAction: string = "";

  constructor() { }

  ngOnInit() {
    this.minutesDom = document.querySelector("#minutes");
    this.secondsDom = document.querySelector("#seconds");
    this.fillerDom = document.querySelector("#timer");
    this.interval = setInterval(() => {
      this.intervalCallback();
    }, 1000);

    this.updateDom()
   }

  //  ngDoCheck() {
  //   if (this.currentAction === 'work' && this.) {
  //     localStorage.setItem('tasks', JSON.stringify(this.items));
  //     this.previousItems = this.items.slice();
  //   } else if (this.currentAction === 'sBreak') {

  //   } else {

  //   }
  // }

   setStatus() {
    if(this.status === 1){
      this.status = 2;
      this.startWork();
    } else{
      this.status=1;
      this.pauseTimer();
    }
  };

  setVariables(mins: number, secs: number, started: boolean): void {
    this.minutes = mins;
    this.seconds = secs;
    this.started = started;
    this.progressIncrement = 100 / (this.minutes * 60);
    this.progress = (this.minutes > 0 || this.seconds) ? this.progress : 0;
  }

  startWork(): void {
    if (this.started !== false) {
      this.setVariables(1, 0, true);
    } else {
      this.setVariables(this.minutes, this.seconds, true);
    }
  }

  setWork(): void {
    this.setVariables(5, 0, false);
  }


  setShortBreak(): void {
    this.setVariables(5, 0, false);
  }

  setLongBreak(): void {
    this.setVariables(15, 0, false);
  }

  pauseTimer(): void {
    this.setVariables(this.minutes, this.seconds, false);
  }

  stopTimer(): void {
    this.setVariables(25, 0, false);
    this.updateDom();
  }

  toDoubleDigit(num: any): string {
    if (num < 10) {
      return '0' + parseInt(num, 10);
    }
    return num.toString();
  }

  updateDom(): void {
    this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
    this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
    this.progress = this.progress + this.progressIncrement;
    this.fillerDom.style.background = `conic-gradient(#000 ${this.progress * 3.6}deg, #ededed 0deg)`;
  }

  intervalCallback(): void {
    if (!this.started) return;
    if (this.seconds === 0) {
      if (this.minutes === 0) {
        this.timerComplete();
        return;
      }
      this.seconds = 59;
      this.minutes--;
    } else {
      this.seconds--;
    }
    this.updateDom();
  }

  timerComplete(): void {
    this.started = false;
    this.progressIncrement = 0;
  }
}