import {NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { SignupComponent } from './signup.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [SignupComponent],
    entryComponents: [SignupComponent],
    exports: [SignupComponent]
})
export class SignupComponentModule{}