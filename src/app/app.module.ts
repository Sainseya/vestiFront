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
import { CardPresentationTextComponent } from './commons/card-presentation-text/card-presentation-text.component';
import { ModalComponent } from './commons/modal/modal.component';
import { FormComponent } from './commons/form/form.component';
import { UploadImageComponent } from './commons/upload-image/upload-image.component';


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
import {MatInputModule} from '@angular/material/input';
import { CarrouselComponent } from './commons/carrousel/carrousel.component';
import { DialogContentComponent } from './commons/dialog-content/dialog-content.component';
import { DialogSignupComponent } from './commons/dialog-signup/dialog-signup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ItemFormService} from "./services/item-form.service";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatLineModule} from "@angular/material/core";
import { NgxColorsModule } from 'ngx-colors';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';



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
    CardPresentationTextComponent,
    DialogContentComponent,
    DialogSignupComponent,
     ModalComponent,
    FormComponent,
    UploadImageComponent,



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
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
     MatSelectModule,
    NgxMatColorPickerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatListModule,
    MatToolbarModule,
    MatLineModule,
    NgxColorsModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe, ItemFormService,
    {provide:
    MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS}],
  bootstrap: [AppComponent],
})
export class AppModule {}

