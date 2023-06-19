
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import Outfit from 'src/app/models/outfit.model';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent implements OnInit {
  ngOnInit(): void {
    this.addSlide();
  }

  @Input() outfitListInput!: Outfit[];

  @Output() outfitIndexChoosed = new EventEmitter<number>();

  slides = [
    {
      img: '../assets/img/dressing/veste-noire.png',
      img2: '../assets/img/dressing/pantalon-noir.png',
    },
  ];

  addSlide() {
    this.slides.shift();
    for (let index = 0; index < this.outfitListInput.length; index++) {
      this.slides.push({
        img: this.outfitListInput[index].itemTop.linkImage,
        img2: this.outfitListInput[index].itemBottom.linkImage,
      });
    }
  }

  afterChange(e: any) {
    this.outfitIndexChoosed.emit(e.currentSlide);
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOneHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
}
