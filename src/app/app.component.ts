import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { addIcons } from 'ionicons';
import { addOutline, caretUp, ellipsisVertical } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, SideBarComponent],
})
export class AppComponent {
  constructor() {
    addIcons({
      addOutline,
      caretUp,
      ellipsisVertical
    })
  }
}
