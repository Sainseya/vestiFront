import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderHomeComponent } from './commons/header-home/header-home.component';
import { DressingComponent } from './commons/dressing/dressing.component';
import { CardClotheComponent } from './commons/card-clothe/card-clothe.component';
import { OotdComponent } from './pages/ootd-page/ootd.component';
import { FooterHomeComponent } from './commons/footer-home/footer-home.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { IphoneComponent } from './commons/iphone/iphone.component';
import { BoxComponent } from './commons/box/box.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { ViewOneItemComponent } from './commons/view-one-item/view-one-item.component';
import { EventPageComponent } from './pages/event-page/event-page.component';

//Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { SideNavComponent } from './commons/side-nav/side-nav.component';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CarrouselComponent } from './commons/carrousel/carrousel.component';
``


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderHomeComponent,
    DressingComponent,
    CardClotheComponent,
    OotdComponent,
    FooterHomeComponent,
    ViewOneItemComponent,
    WelcomePageComponent,
    IphoneComponent,
    BoxComponent,
    NavBarComponent,
    EventPageComponent,
    SideNavComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarrouselComponent,

    //Angular Material
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
