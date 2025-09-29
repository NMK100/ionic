import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, IonicModule } from '@ionic/angular';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonContent,
    IonicModule
]
})
export class AccueilPage {
  afficherNotifications: boolean = false;
  segment: string = 'list';
deleteAll: boolean = false;
theme: string = 'light';


  constructor(private navCtrl: NavController) { }

  parrainage() {
    this.navCtrl.navigateRoot('/depenses');
  }

  deconnexion() {
    this.navCtrl.navigateRoot('/connexion');
  }

  bulletin() {
    this.navCtrl.navigateRoot('/bulletin');
  }
  toggleNotifications() {
    this.afficherNotifications = !this.afficherNotifications;
  }
}