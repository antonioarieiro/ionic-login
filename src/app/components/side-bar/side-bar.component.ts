import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonMenu,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonIcon,
  IonList,
  IonItem,
  IonAvatar,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Included here
    IonContent,
    IonHeader,
    IonTitle,
    IonMenu,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonLabel,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonButton
  ]
})
export class SideBarComponent implements OnInit {
  showSettings: boolean = false;
  showStatistics: boolean = false;
  finishedPomodoros: number = 0; // You would update this with the actual finished Pomodoro count.

  constructor() { }

  ngOnInit() { }

  toggleStatistics() {
    this.showStatistics = !this.showStatistics;
  }

  toggleSettings() { 
    this.showSettings = !this.showSettings; 
  }
  
}