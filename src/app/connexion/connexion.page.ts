import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular'; 
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonCheckbox,
  IonLabel,
  IonIcon
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    CommonModule,
    FormsModule,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonCheckbox,
    IonLabel,
  ],
})
export class ConnexionPage {
  email: string = '';
  motDePasse: string = '';
  seSouvenir: boolean = false;

  connexion (){
    this.navCtrl.navigateRoot('/accueil');
    
  }

  constructor(private navCtrl: NavController) {

   }

   goToForgotPassword() {
  this.navCtrl.navigateForward('/mdp-oublie');
  }
}