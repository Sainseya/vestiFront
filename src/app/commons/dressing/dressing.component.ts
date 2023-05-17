import { Component } from '@angular/core';

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.component.html',
  styleUrls: ['./dressing.component.css']
})
export class DressingComponent {

  listClothes: any[] = [
    {
      id : 1,
      img: "../assets/img/dressing/t-shirt-nike.png"
    },
    {
      id : 2,
      img: "../assets/img/dressing/pantalon-beige.png"
    },
    {
      id : 3,
      img: "../assets/img/dressing/doudoune-cuivre.png"
    },
    {
      id : 4,
      img: "../assets/img/dressing/t-shirt-nike.png"
    },
    {
      id : 4,
      img: "../assets/img/dressing/chemise-bordeaux.png"
    },
    {
      id : 5,
      img: "../assets/img/dressing/t-shirt-nike.png"
    },
    {
      id : 6,
      img: "../assets/img/dressing/t-shirt-nike.png"
    },
    {
      id : 7,
      img: "../assets/img/dressing/jean-blanc.png"
    },
    {
      id : 7,
      img: "../assets/img/dressing/jean-bleu.png"
    }

  ]

 constructor(){}

}
