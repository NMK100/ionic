import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonLabel,
  IonToolbar,
  IonItem,
  IonCard,
  IonList,
  IonAvatar,
  IonContent,
  IonTitle,
  IonButtons,
  IonHeader,
  IonIcon,
  IonBackButton
} from "@ionic/angular/standalone";

interface Rapport {
  titre: string;
  annee: string;
}

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.page.html',
  styleUrls: ['./bulletin.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonLabel,
    IonIcon,
    IonToolbar,
    IonItem,
    IonCard,
    IonList,
    IonAvatar,
    IonContent,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonHeader
  ],
})
export class BulletinPage {
  eleve = {
    nom: 'Moussa Keita',
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  };

  rapports: Rapport[] = [
    { titre: 'Bulletin de mi-session', annee: 'Année académique 2020-2021' },
    { titre: 'Bulletin trimestre 1', annee: 'Année académique 2020-2021' },
    { titre: 'Rapport trimestre 2', annee: 'Année académique 2020-2021' },
    { titre: 'Bulletin final', annee: 'Année académique 2020-2021' },
  ];

  ouvrirRapport(rapport: Rapport) {
    console.log('Ouverture du:', rapport.titre);
    // Ici tu peux ajouter une navigation vers une autre page ou afficher un PDF
  }
}
