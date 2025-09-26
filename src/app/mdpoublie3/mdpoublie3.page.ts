import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
   IonButton, 
   NavController
   } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mdpoublie3',
  templateUrl: './mdpoublie3.page.html',
  styleUrls: ['./mdpoublie3.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule]
})
export class Mdpoublie3Page implements OnInit {

  constructor(private navCtrl: NavController) {

   }

  ngOnInit() {
  }
  goToConnexion() {
    this.navCtrl.navigateRoot('/connexion');
  }

}
