import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController} from '@ionic/angular';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonHeader,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonHeader,
  ]
})
export class AccueilPage {
  afficherNotifications: boolean = false;
  segment: string = 'list';
  deleteAll: boolean = false;
  theme: string = 'light';

  constructor(private navCtrl: NavController) {}

  
  parrainage() {
    this.navCtrl.navigateRoot('/tabs/depenses');
  }

  deconnexion() {
    this.navCtrl.navigateRoot('/tabs/connexion');
  }

  bulletin() {
    this.navCtrl.navigateRoot('/bulletin');
  }

}
