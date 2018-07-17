import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GeneralPage } from '../pages/general/general';
import { General2Page } from '../pages/general2/general2';
import { FoodPage } from '../pages/food/food';
import { SportsPage }from '../pages/sports/sports';
import { SciencePage }from '../pages/science/science';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeneralPage,
    General2Page,
    FoodPage,
    SportsPage,
    SciencePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeneralPage,
    General2Page,
    FoodPage,
    SportsPage,
    SciencePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
