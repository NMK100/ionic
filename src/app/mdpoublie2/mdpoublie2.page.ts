import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {
  IonContent,
  IonIcon,
  IonInput,
  IonButton,
  IonItem,
  NavController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-nouveau-mdp',
  templateUrl: './mdpoublie2.page.html',
  styleUrls: ['./mdpoublie2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonIcon,
    IonButton,
    IonItem,
    IonInput
  ]
})
export class Mdpoublie2Page {

  
  nouveauMotDePasse: string = '';
  confirmationMotDePasse: string = '';

  constructor(private navCtrl: NavController) { 

  }

  
  confirmerMotDePasse() {
    
    if (!this.nouveauMotDePasse || !this.confirmationMotDePasse) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    
    if (this.nouveauMotDePasse !== this.confirmationMotDePasse) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
     this.navCtrl.navigateForward('/mdpoublie3')

  }

  goBack() {
    this.navCtrl.back();
  }
}