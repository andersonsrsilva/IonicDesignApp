import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { VideoPage } from '../video/video';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VideoPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
