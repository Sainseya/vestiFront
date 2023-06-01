import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'



//Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderHomeComponent } from './commons/header-home/header-home.component';
import { DressingComponent } from './commons/dressing/dressing.component';
import { CardClotheComponent } from './commons/card-clothe/card-clothe.component';
import { OfdtComponent } from './commons/odtd/ofdt.component';
import { FooterHomeComponent } from './commons/footer-home/footer-home.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { IphoneComponent } from './commons/iphone/iphone.component';
import { BoxComponent } from './commons/box/box.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';

//Angular Material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import { ViewOneItemComponent } from './commons/view-one-item/view-one-item.component';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderHomeComponent,
    DressingComponent,
    CardClotheComponent,
    OfdtComponent,
    FooterHomeComponent,
    ViewOneItemComponent,
    WelcomePageComponent,
    IphoneComponent,
    BoxComponent,
    NavBarComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

   //Angular Material
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    MatBadgeModule


  ],
  schemas :[
    CUSTOM_ELEMENTS_SCHEMA

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
