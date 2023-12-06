import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { TasklistComponent } from 'src/app/components/tasklist/tasklist.component';
import { TimerComponent } from 'src/app/components/timer/timer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, SideBarComponent, TasklistComponent, TimerComponent]
})
export class HomePage {
  constructor() {}
}
