import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS} from '@angular-material-components/color-picker';7
import { NgxColorsModule } from 'ngx-colors';


//Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderHomeComponent } from './commons/header-home/header-home.component';
import { DressingComponent } from './commons/dressing/dressing.component';
import { CardClotheComponent } from './commons/card-clothe/card-clothe.component';
import { OfdtComponent } from './commons/odtd/ofdt.component';
import { FooterHomeComponent } from './commons/footer-home/footer-home.component';
import { ViewOneItemComponent } from './commons/view-one-item/view-one-item.component';
import { ModalComponent } from './commons/modal/modal.component';
import { FormComponent } from './commons/form/form.component';
import { UploadImageComponent } from './commons/upload-image/upload-image.component';


//Angular Material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ItemFormService} from "./services/item-form.service";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatLineModule} from "@angular/material/core";






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
    ModalComponent,
    FormComponent,
    UploadImageComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    //Angular Material
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatInputModule,
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
  schemas :[
    CUSTOM_ELEMENTS_SCHEMA

  ],
  providers: [ItemFormService,
    {provide:
    MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS} ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
