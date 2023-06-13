import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


//Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderHomeComponent } from './commons/header-home/header-home.component';
import { DressingComponent } from './commons/dressing/dressing.component';
import { CardClotheComponent } from './commons/card-clothe/card-clothe.component';
import { OfdtComponent } from './pages/odtd/ofdt.component';
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
import { CardPresentationTextComponent } from './commons/card-presentation-text/card-presentation-text.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ModalWelcomePageComponent } from './commons/modal-welcome-page/modal-welcome-page.component';
import { MatDialogModule } from '@angular/material/dialog';



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
    CardPresentationTextComponent,
    ModalWelcomePageComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        //Angular Material
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatIconModule,
        MatSlideToggleModule,
        MatBadgeModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatDialogModule

        //Css Animation
    ],
  schemas :[
    CUSTOM_ELEMENTS_SCHEMA,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
