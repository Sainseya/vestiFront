import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


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
import { ButtonComponent } from './commons/button/button.component';
import { InputComponent } from './commons/form/input/input.component';
import { SelectInMenuComponent } from './commons/form/select-in-menu/select-in-menu.component';
import { LabelComponent } from './commons/form/label/label.component';
import { ColorPickerComponent } from './commons/form/color-picker/color-picker.component';
import { UploadImageComponent } from './commons/upload-image/upload-image.component';

//Services
import { WardrobeService} from "./services/wardrobe.service";

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
    ButtonComponent,
    InputComponent,
    SelectInMenuComponent,
    LabelComponent,
    ColorPickerComponent,
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

  ],
  schemas :[
    CUSTOM_ELEMENTS_SCHEMA

  ],
  providers: [WardrobeService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
