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

 toggleDarkmode(){


    this.element = document.body.querySelector('.container-header');
    this.element2 = document.body.querySelector('.input-recherche');
    this.element3 = document.body.querySelector('.burger-menu-button');
    this.element4 = document.body.querySelector('.logo-header');

    if(!this.darkmodeChecked){
    this.element.classList.add('dark-theme')
    this.element2.classList.add('dark-theme')
    this.element3.classList.add('dark-theme')
    this.element4.classList.add('logo-header-dark')

    this.darkmodeChecked = !this.darkmodeChecked
    }
    else{
      this.element.classList.remove('dark-theme')
      this.element2.classList.remove('dark-theme')
      this.element3.classList.remove('dark-theme')
      this.element4.classList.remove('logo-header-dark')
      this.darkmodeChecked = !this.darkmodeChecked
    }



  //  document.body.classList.toggle("light-mode");
 }


}
