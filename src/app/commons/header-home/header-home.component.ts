import { Component, Input, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {

  @Input() drawer:any;

  darkmodeChecked :boolean = false;
  element:any
  element2:any
  element3:any
  element4:any
  elementButtonWelcome:any
  elementButtonDressing:any
  elementBurgerImage:any
  elementButtonFavorite:any
  elementAdd:any
  elementContainerPage:any
  elementBody:any
  elementList:any
  elementMatDrawer:any


  //#region darmode
 toggleDarkmode(){


    this.element = document.body.querySelector('.container-header');
    this.element2 = document.body.querySelector('.input-recherche');
    this.element3 = document.body.querySelector('.burger-menu-button');
    this.element4 = document.body.querySelector('.logo-header');
    this.elementButtonWelcome = document.body.querySelector('.button-welcome');
    this.elementButtonDressing = document.body.querySelector('.button-dressing');
    this.elementBurgerImage = document.body.querySelector('.burger-menu-button-image');
    // this.elementButtonFavorite = document.body.querySelector('.favorite-button');
    // this.elementContainerPage = document.body.querySelector('.container');
    // this.elementAdd = document.body.querySelector('.add-clothe-button');

    // this.elementList = document.body.querySelector('.list');
    // this.elementMatDrawer = document.body.querySelector('.mat-drawer-content');



    if(!this.darkmodeChecked){
    this.element.classList.add('dark-theme')
    this.element2.classList.add('dark-theme')
    this.element3.classList.add('dark-theme')
    this.element4.classList.add('logo-header-dark')
    this.elementButtonWelcome.classList.add('dark-theme')
    this.elementButtonDressing.classList.add('dark-theme')
    this.elementBurgerImage.classList.add('logo-header-dark')
    // this.elementButtonFavorite.classList.add('dark-theme')
    // this.elementContainerPage.classList.add('dark-theme')
    // this.elementAdd.classList.add('dark-theme')
    // this.elementList.classList.add('dark-theme')
    // this.elementMatDrawer.classList.add('dark-theme')







    this.darkmodeChecked = !this.darkmodeChecked
    }
    else{
      this.element.classList.remove('dark-theme')
      this.element2.classList.remove('dark-theme')
      this.element3.classList.remove('dark-theme')
      this.element4.classList.remove('logo-header-dark')
      this.elementButtonWelcome.classList.remove('dark-theme')
      this.elementButtonDressing.classList.remove('dark-theme')
      this.elementBurgerImage.classList.remove('logo-header-dark')
      // this.elementButtonFavorite.classList.remove('dark-theme')
      // this.elementContainerPage.classList.remove('dark-theme')
      // this.elementAdd.classList.remove('dark-theme')
      // this.elementList.classList.remove('dark-theme')
      // this.elementMatDrawer.remove('dark-theme')



      this.darkmodeChecked = !this.darkmodeChecked
    }



  //  document.body.classList.toggle("light-mode");
 }
 //#endregion


}
