import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//各サンプルのページ
import { Example1Page } from '../pages/example1/example1';
import { Example2Page } from '../pages/example2/example2';
import { Example3Page } from '../pages/example3/example3';
import { Example4Page } from '../pages/example4/example4';
import { Example5Page } from '../pages/example5/example5';
import { Example6Page } from '../pages/example6/example6';

//追加部品
import { GitHubUsersServiceProvider } from '../providers/git-hub-users-service/git-hub-users-service';
import { HttpClientModule } from '@angular/common/http'; 
import { GoogleMaps } from "@ionic-native/google-maps";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    //各サンプルのページ宣言
    Example1Page,
    Example2Page,
    Example3Page,
    Example4Page,
    Example5Page,
    Example6Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    //各サンプルのページエントリ
    Example1Page,
    Example2Page,
    Example3Page,
    Example4Page,
    Example5Page,
    Example6Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    //追加したプロバイダ
    GitHubUsersServiceProvider,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}