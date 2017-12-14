import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component ({
  selector: 'page-vimeo',
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Youtube Video</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>
    <iframe src="https://www.youtube.com/embed/eiJ-9wg5W9g" width="100%" height="100%" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
  </ion-content>`
})
export class YoutubeVideo {
  constructor(public navCtrl: NavController) {

  }

}
