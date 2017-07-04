import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Deploy} from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TodayPage } from '../pages/today/today';
import { WeekPage } from '../pages/week/week';
import { MonthPage } from '../pages/month/month';
import { NewPayPage } from '../pages/new-pay/new-pay';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public deploy: Deploy, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Today', component: TodayPage },
      { title: 'Week', component: WeekPage },
      { title: 'Month', component: MonthPage }
    ];

  }
  watchDeploy(){
// check for update once then with a delay
  this.checkNewVersion().then(()=> {
  setTimeout(()=>this.watchDeploy(), 20 * 1000);
})
}
checkNewVersion():Promise<any> {
 return new Promise<any>((resolve, reject)=> {
  return this.deploy.check().then((snapshotAvailable: boolean) => {
   if (snapshotAvailable) {
    return this.deploy.download().then(() => {
      return this.deploy.extract().then( () => {
       this.deploy.load();
       console.log('Extract Succesful');
       resolve();
     });
    });
   } else {
       resolve();
   }
  })
 })
}
  initializeApp() {

    this.platform.ready().then(() => {
      console.log(this.platform.platforms());
      if (this.platform.is('mobileweb')) {
      // This will only print when on iOS

      console.log('I am an mobileWeb device!');
    } else {
      this.watchDeploy();
    }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
