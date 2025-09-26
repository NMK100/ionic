import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 


import {
  IonContent,
  IonIcon,
  IonInput,
  IonButton,
  IonItem,
  NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mdp-oublie',
  templateUrl: './mdp-oublie.page.html',
  styleUrls: ['./mdp-oublie.page.scss'],
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
export class MdpOubliePage {

  email: string = '';

  constructor(private navCtrl: NavController) { }

  
  reinitialiserMotDePasse() {
    this.navCtrl.navigateForward('/mdpoublie2')
  }
  goBack() {
    this.navCtrl.back();
  }
  
}