import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderHomeComponent } from './commons/header-home/header-home.component';
import { DressingComponent } from './commons/dressing/dressing.component';
import { CardClotheComponent } from './commons/card-clothe/card-clothe.component';
//Angular
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderHomeComponent,
    DressingComponent,
    CardClotheComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Angular Material
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule


  ],
  schemas :[
    CUSTOM_ELEMENTS_SCHEMA

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
