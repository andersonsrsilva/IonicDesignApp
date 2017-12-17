import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { VideoPage } from '../video/video';
import { MusicPage } from '../music/music';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VideoPage;
  tab2Root = MusicPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
