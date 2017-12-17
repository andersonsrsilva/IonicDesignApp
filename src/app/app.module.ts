import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IntoPage } from '../pages/into/into';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { VideoPage } from '../pages/video/video';
import { VimeoVideo } from '../pages/videos/vimeo';
import { YoutubeVideo } from '../pages/videos/youtube';
import { MusicPage } from '../pages/music/music';
import { ParallaxHeader } from '../directives/parallax-header/parallax-header';
import { NewsPage } from '../pages/news/news';

@NgModule({
  declarations: [
    MyApp,
    IntoPage,
    HomePage,
    TabsPage,
    LoginPage,
    VideoPage,
    VimeoVideo,
    YoutubeVideo,
    MusicPage,
    ParallaxHeader,
    NewsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntoPage,
    HomePage,
    TabsPage,
    LoginPage,
    VideoPage,
    VimeoVideo,
    YoutubeVideo,
    MusicPage,
    NewsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
