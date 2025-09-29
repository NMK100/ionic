import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationModalComponent } from '../notification-modal/notification-modal.component';
import { IonContent, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  imports: [IonButton, IonContent]
})
export class NotificationsPage {

  constructor(private modalCtrl: ModalController) {}

  async openNotificationPopup() {
    const modal = await this.modalCtrl.create({
      component: NotificationModalComponent,
      cssClass: 'custom-notification-modal'
    });
    await modal.present();
  }
}
