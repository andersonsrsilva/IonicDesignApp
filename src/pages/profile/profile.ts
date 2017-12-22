import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  public showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Hmmm, I think I like it',
      duration: 2000,
      position: position
    })

    toast.present(toast)
  }

}
