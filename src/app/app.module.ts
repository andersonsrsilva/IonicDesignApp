import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { IntoPage } from '../pages/into/into';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { VideoPage } from '../pages/video/video';
import { VimeoVideo } from '../pages/videos/vimeo';
import { YoutubeVideo } from '../pages/videos/youtube';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    IntoPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    VideoPage,
    VimeoVideo,
    YoutubeVideo,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    IntoPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    VideoPage,
    VimeoVideo,
    YoutubeVideo,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
