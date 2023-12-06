import { CommonModule } from '@angular/common';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonMenu,
  IonToolbar,
  IonButton,
  IonInput,
  IonMenuButton,
  IonList,
  IonItem,
  IonCheckbox,
  IonButtons,
  IonItemDivider,
  IonLabel,
  IonItemGroup,
  IonIcon,
  IonText,
  IonPopover,
  ToastController,
  IonCard,
} from '@ionic/angular/standalone';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonMenu,
    IonToolbar,
    IonInput,
    IonButton,
    IonMenuButton,
    IonList,
    IonItem,
    IonCheckbox,
    CommonModule,
    IonButtons,
    IonItemDivider,
    IonLabel,
    IonItemGroup,
    IonIcon,
    FormsModule,
    IonText,
    IonCard,
    IonPopover,
  ],
})
export class TasklistComponent implements DoCheck, OnInit {
  id: string = '';
  task: string = '';
  qty: number = 1;

  toastMessage: string = '';

  items: Array<{
    id: string;
    name: string;
    qty: number;
  }> = [];

  private previousItems: Array<{
    id: string;
    name: string;
    qty: number;
  }> = this.items.slice();

  showOption: boolean = false;
  editingTask: boolean = false;
  showCard: boolean = false;
  showDropdown: boolean = false;

  constructor(private toastCotroller: ToastController) {}

  // inicialização e modificação de eventos
  ngOnInit(): void {
    if (localStorage.getItem('tasks')) {
      this.items = JSON.parse(String(localStorage.getItem('tasks')));
    }
  }

  ngDoCheck() {
    if (this.items !== this.previousItems) {
      localStorage.setItem('tasks', JSON.stringify(this.items));
      this.previousItems = this.items.slice();
    }
  }

  countChanges(event: any) {
    this.qty = event.target.value.replace('/[^0-9*/g]', '');
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCotroller.create({
      message: this.toastMessage,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  // funções de manipulação de controles

  showCardOptions() {
    this.showOption = !this.showOption;
  }

  incrementPomodoro() {
    this.qty < 10 && this.qty++;
  }

  decrementPodoro() {
    this.qty > 1 && this.qty--;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  //funções de manipulação de tasks

  addTask() {
    if (this.task.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        name: this.task,
        qty: this.qty,
      };

      this.showCard = false;

      this.items.push(newTask);

      this.toastMessage = `Task salva com sucesso ${newTask.id}: ${newTask.name}`;
      this.presentToast('middle');
      this.resetForm();
    } else {
      this.toastMessage = 'Insira uma descrição para a task';
      this.presentToast('middle');  
    }
  }

  deleteTask(idTask: string) {
    const taskIndex = this.items.findIndex((item) => item.id === idTask);

    if (taskIndex !== -1) {
      const deletedTask = this.items.splice(taskIndex, 1)[0];

      this.toastMessage = `Task de id: ${deletedTask.id} removida: ${deletedTask.name}`;
      this.presentToast('middle');
    } else {
      this.toastMessage = `Task de id: ${idTask} não encontrada`;
      this.presentToast('middle');
    }
  }

  updateTask(idTask: string) {
    const editedTaskIndex = this.items.findIndex((item) => item.id === idTask);
    if (editedTaskIndex !== -1) {
      this.items[editedTaskIndex].name = this.task;
      this.items[editedTaskIndex].qty = this.qty;

      this.toastMessage = `Task de id: ${this.items[editedTaskIndex].id} atualizada com sucesso`;
      this.presentToast('middle');

      this.resetForm();
    } else {
      this.toastMessage = `Erro ao atualizar task`;
      this.presentToast('middle');
    }
  }

  setFormEdit(idTask: string) {
    const currentTask = this.items.filter((item) => {
      return item.id === idTask;
    })[0];

    this.id = currentTask.id;
    this.task = currentTask.name;
    this.qty = currentTask.qty;

    this.showCardOptions();
  }

  private resetForm() {
    this.id = '';
    this.task = '';
    this.qty = 1;
    this.showCardOptions();
  }
}


