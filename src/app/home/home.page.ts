import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async showModal() {
    const modal = await this.modalController.create({
      component: SignupComponent,
      componentProps:{
        data: 6
      }
    })
    await modal.present();
    modal.onDidDismiss()
    .then(res => alert(JSON.stringify(res)))
  }
}
