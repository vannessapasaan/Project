import { Component, OnInit, Input } from '@angular/core';
import{ ModalController} from '@ionic/angular'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Input() data:any;
  constructor(private modalController: ModalController) { }

  async close(){
    await this.modalController.dismiss({userData: 4});
  }
  ngOnInit() {}

}
