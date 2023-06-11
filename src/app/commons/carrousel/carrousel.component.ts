import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {

   slides = [
     {img: "../assets/img/dressing/veste-noire.png"},
     {img: "../assets/img/dressing/pantalon-noir.png"},
     {img: "../assets/img/dressing/veste-noire.png"},
     {img: "../assets/img/dressing/pantalon-noir.png"},
     {img: "../assets/img/dressing/veste-noire.png"},
     {img: "../assets/img/dressing/pantalon-noir.png"},
     {img: "../assets/img/dressing/veste-noire.png"},
     {img: "../assets/img/dressing/pantalon-noir.png"}
   ];

   slideConfig = {
    "slidesToShow":1,
    "slidesToScroll":1,
    "autoplay": false,
    "autoplaySpeed":5000,
    "pauseOneHover": true,
    "infinite": true,
    "responsive" : [
      {
        "breakpoint" : 992,
        "settings" : {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "slideToScroll":1
        }
      },
      {
        "breakpoint" : 768,
        "settings" : {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "slideToScroll":1
      }
     }
    ]
   }


}
