import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.component.html',
  styleUrls: ['./dressing.component.css']
})
export class DressingComponent implements OnInit {


  disabledFav = false;

  disabledFavFunction(){
    this.disabledFav = !this.disabledFav;
    this.sortFavElement();


  }

  sortFavElement(){
     this.listClothes.forEach(element => {
      if(element.fav == true && !this.listClothesFav.includes(element) ){
        this.listClothesFav.push(element);
      }

      this.listClothesFav.forEach(element => {
        if(element.fav == false){
          this.listClothesFav.splice(element, 1)
        }
      })

    });
  }

  constructor(){}
  ngOnInit(): void {
    this.sortFavElement()
  }
  listClothesFav: any[] = []

  listClothes: any[] = [
    {
      id : 1,
      img: "../assets/img/dressing/t-shirt-nike.png",
      fav: true
    },
    {
      id : 2,
      img: "../assets/img/dressing/pantalon-beige.png",
      fav: true
    },
    {
      id : 3,
      img: "../assets/img/dressing/doudoune-cuivre.png",
      fav: false
    },
    {
      id : 4,
      img: "../assets/img/dressing/t-shirt-nike.png",
      fav: true
    },
    {
      id : 4,
      img: "../assets/img/dressing/chemise-bordeaux.png",
      fav: false
    },
    {
      id : 5,
      img: "../assets/img/dressing/t-shirt-nike.png",
      fav: false
    },
    {
      id : 6,
      img: "../assets/img/dressing/t-shirt-nike.png",
      fav: false
    },
    {
      id : 7,
      img: "../assets/img/dressing/jean-blanc.png",
      fav: false
    },
    {
      id : 7,
      img: "../assets/img/dressing/jean-bleu.png",
      fav: false
    }

  ]



}
