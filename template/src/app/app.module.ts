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

//各メンバーのページ
import { MikiPage } from '../pages/miki/miki';
import { KawaguchiPage } from '../pages/kawaguchi/kawaguchi';
import { HasegawaPage } from '../pages/hasegawa/hasegawa';
import { YaguchiPage } from '../pages/yaguchi/yaguchi';
import { TaguchiPage } from '../pages/taguchi/taguchi';
import { NishimuraPage } from '../pages/nishimura/nishimura';
import { RyuPage } from '../pages/ryu/ryu';

//HTTP接続部品
import { GitHubUsersServiceProvider } from '../providers/git-hub-users-service/git-hub-users-service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    //各メンバーのページ宣言
    MikiPage,
    KawaguchiPage,
    HasegawaPage,
    YaguchiPage,
    TaguchiPage,
    NishimuraPage,
    RyuPage
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

    //各人のページエントリ
    MikiPage,
    KawaguchiPage,
    HasegawaPage,
    YaguchiPage,
    TaguchiPage,
    NishimuraPage,
    RyuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GitHubUsersServiceProvider
  ]
})
export class AppModule {}
