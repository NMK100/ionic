import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
 import { IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonIcon, 
  IonCard, 
  IonCardContent, IonAvatar } from "@ionic/angular/standalone";

interface Depense {
  id?: string;
  titre: string;
  montant: number;
  date: string;    
  categorie?: string;
}

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.page.html',
  styleUrls: ['./depenses.page.scss'],
  standalone: true,

  imports: [IonAvatar, 
    IonCardContent, 
    IonCard, 
    IonIcon, 
    IonButton, 
    IonContent, 
    IonToolbar, 
    IonHeader,
    CommonModule,
    FormsModule],

})
export class DepensesPage implements OnInit {

  
  depenses: Depense[] = [
    { titre: 'Frais de scolarité', montant: 40000, date: '2024-09-06', categorie: 'scolarite' },
    { titre: 'Cantine', montant: 4000, date: '2024-04-06', categorie: 'cantine' },
    { titre: 'Uniforme', montant: 10000, date: '2024-04-06', categorie: 'uniforme' },
  ];

  private toutesDepenses: Depense[] = [];
  categorieSelectionnee = 'toutes';
  filtreDateSelectionne = 'toutes'; 

  constructor(
    private controleAlerte: AlertController,
    private controleToast: ToastController
  ) {}

  ngOnInit(): void {
    this.toutesDepenses = [...this.depenses];
  }

  get total(): number {
    return this.depenses.reduce((somme, d) => somme + (d.montant || 0), 0);
  }

  
  private convertirDate(chaineDate: string): Date | null {
    if (!chaineDate) { return null; }

    if (/\d{4}-\d{2}-\d{2}/.test(chaineDate)) {
      return new Date(chaineDate + 'T00:00:00');
    }
    if (/\d{2}\/\d{2}\/\d{4}/.test(chaineDate)) {
      const morceaux = chaineDate.split('/');
      const jour = Number(morceaux[0]), mois = Number(morceaux[1]) - 1, annee = Number(morceaux[2]);
      return new Date(annee, mois, jour);
    }

    const d = new Date(chaineDate);
    return isNaN(d.getTime()) ? null : d;
  }

  formaterDate(chaineDate: string): string {
    const d = this.convertirDate(chaineDate);
    return d ? d.toLocaleDateString('fr-FR') : chaineDate;
  }


  async ouvrirFiltreCategorie() {
    const alerte = await this.controleAlerte.create({
      header: 'Filtrer par catégorie',
      inputs: [
        { name: 'toutes', type: 'radio', label: 'Toutes', value: 'toutes', checked: this.categorieSelectionnee === 'toutes' },
        { name: 'scolarite', type: 'radio', label: 'Frais de scolarité', value: 'scolarite', checked: this.categorieSelectionnee === 'scolarite' },
        { name: 'cantine', type: 'radio', label: 'Cantine', value: 'cantine', checked: this.categorieSelectionnee === 'cantine' },
        { name: 'uniforme', type: 'radio', label: 'Uniforme', value: 'uniforme', checked: this.categorieSelectionnee === 'uniforme' },
      ],
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'OK',
          handler: (valeur: string) => {
            this.categorieSelectionnee = valeur || 'toutes';
            this.appliquerFiltres();
            return true;
          }
        }
      ]
    });
    await alerte.present();
  }

  async ouvrirFiltreDate() {
    const alerte = await this.controleAlerte.create({
      header: 'Filtrer par date',
      inputs: [
        { name: '30', type: 'radio', label: '30 derniers jours', value: '30', checked: this.filtreDateSelectionne === '30' },
        { name: '90', type: 'radio', label: '90 derniers jours', value: '90', checked: this.filtreDateSelectionne === '90' },
        { name: 'toutes', type: 'radio', label: 'Toutes', value: 'toutes', checked: this.filtreDateSelectionne === 'toutes' },
      ],
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'OK',
          handler: (valeur: string) => {
            this.filtreDateSelectionne = valeur || 'toutes';
            this.appliquerFiltres();
            return true;
          }
        }
      ]
    });
    await alerte.present();
  }

  private appliquerFiltres() {
    const maintenant = new Date();
    const limiteJours = this.filtreDateSelectionne === '30' ? 30 :
                        this.filtreDateSelectionne === '90' ? 90 : null;

    this.depenses = this.toutesDepenses.filter(d => {
      const categorieOK = (this.categorieSelectionnee === 'toutes') || (d.categorie === this.categorieSelectionnee);

      if (!limiteJours) return categorieOK;

      const dd = this.convertirDate(d.date);
      if (!dd) return false;

      const diffJours = Math.floor((maintenant.getTime() - dd.getTime()) / (1000 * 60 * 60 * 24));
      return categorieOK && diffJours <= limiteJours;
    });
  }

 
  async signalerDepense() {
    const alerte = await this.controleAlerte.create({
      header: 'Signaler une dépense',
      inputs: [
        { name: 'titre', type: 'text', placeholder: 'Titre (ex: Cantine)' },
        { name: 'montant', type: 'number', placeholder: 'Montant en FCFA' },
        { name: 'date', type: 'date', placeholder: 'Date' },
        { name: 'categorie', type: 'text', placeholder: 'Catégorie (ex: cantine)' }
      ],
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Envoyer',
          handler: (donnees: any) => {
            if (!donnees.titre || !donnees.montant) {
              this.afficherToast('Veuillez renseigner le titre et le montant.');
              return false;
            }

            const nouvelle: Depense = {
              id: String(new Date().getTime()),
              titre: donnees.titre,
              montant: Number(donnees.montant),
              date: donnees.date ? donnees.date : new Date().toISOString().slice(0,10),
              categorie: donnees.categorie ? donnees.categorie.toLowerCase() : 'autre'
            };

            this.toutesDepenses = [nouvelle, ...this.toutesDepenses];
            this.appliquerFiltres();
            this.afficherToast('Dépense signalée.');
            return true;
          }
        }
      ]
    });

    await alerte.present();
  }

  private async afficherToast(message: string) {
    const t = await this.controleToast.create({
      message,
      duration: 1600,
      position: 'bottom'
    });
    await t.present();
  }
}
