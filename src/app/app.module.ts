import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { TodayPage } from '../pages/today/today';
import { WeekPage } from '../pages/week/week';
import { MonthPage } from '../pages/month/month';
import { NewPayPage } from '../pages/new-pay/new-pay';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'db133b85'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TodayPage,
    WeekPage,
    MonthPage,
    NewPayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TodayPage,
    WeekPage,
    MonthPage,
    NewPayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
