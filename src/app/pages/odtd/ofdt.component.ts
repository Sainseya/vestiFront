import { Component, OnInit } from '@angular/core';
import Iitem from 'src/app/models/item.model';
import IUsers from 'src/app/models/user.model';
import { ClotheInventoryService } from 'src/app/services/clothe-inventory.service';
import {
  state,
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-ofdt',
  templateUrl: './ofdt.component.html',
  styleUrls: ['./ofdt.component.css']

})
export class OfdtComponent implements OnInit {
  usersList: IUsers[] = [];
  itemInventory: Iitem[] = [];
  itemTopList: Iitem[] = [];
  itemBottomList: Iitem[] = []
  itemBottomListClone: Iitem[] = this.itemBottomList;
  itemOutfitTop!: Iitem;
  itemOutfitBottom!: Iitem;
  router:any;

  //   {
  //     id: '3',
  //     name: 'chemise bordeaux',
  //     label: 'mon dressing',
  //     season: 'Eté',
  //     type: 'haut',
  //     color: 'rouge',
  //     size: 'XS',
  //     favorite: true,
  //     linkImage: '../assets/img/dressing/chemise-bordeaux.png',
  //     fit: 'Serré',
  //   },
  //   {
  //     id: '6',
  //     name: 'doudoune cuivre',
  //     label: 'mon dressing',
  //     season: 'Hiver',
  //     type: 'haut',
  //     color: 'orange',
  //     size: 'M',
  //     favorite: false,
  //     linkImage: '../assets/img/dressing/doudoune-cuivre.png',
  //     fit: 'large',
  //   },
  //   {
  //     id: '7',
  //     name: 'chemise velours',
  //     label: 'mon dressing',
  //     season: 'Hiver',
  //     type: 'haut',
  //     color: 'orange',
  //     size: 'M',
  //     favorite: false,
  //     linkImage: '../assets/img/dressing/chemise-velours.png',
  //     fit: 'large',
  //   },
  //   {
  //     id: '8',
  //     name: 'veste polaire',
  //     label: 'mon dressing',
  //     season: 'Hiver',
  //     type: 'haut',
  //     color: 'vert',
  //     size: 'M',
  //     favorite: false,
  //     linkImage: '../assets/img/dressing/veste-polaire.png',
  //     fit: 'large',
  //   },
  //   {
  //     id: '9',
  //     name: 'sweat vert',
  //     label: 'mon dressing',
  //     season: 'Hiver',
  //     type: 'haut',
  //     color: 'vert',
  //     size: 'M',
  //     favorite: false,
  //     linkImage: '../assets/img/dressing/sweat-vert.png',
  //     fit: 'large',
  //   },
  // ];


  //   {
  //     id: '3',
  //     name: 'jean bleu',
  //     label: 'mon dressing',
  //     season: 'Hiver',
  //     type: 'bas',
  //     color: 'bleu',
  //     size: 'M',
  //     favorite: true,
  //     linkImage: '../assets/img/dressing/jean-bleu.png',
  //     fit: 'Serré',
  //   },
  //   {
  //     id: '4',
  //     name: 'jean blanc',
  //     label: 'mon dressing',
  //     season: 'Hiver',
  //     type: 'bas',
  //     color: 'blanc',
  //     size: 'M',
  //     favorite: false,
  //     linkImage: '../assets/img/dressing/jean-blanc.png',
  //     fit: 'large',
  //   },
  //   {
  //     id: '5',
  //     name: 'pantalon beige',
  //     label: 'mon dressing',
  //     season: 'Hiver',
  //     type: 'bas',
  //     color: 'blanc',
  //     size: 'M',
  //     favorite: false,
  //     linkImage: '../assets/img/dressing/pantalon-beige.png',
  //     fit: 'large',
  //   },
  //   {
  //     id: '10',
  //     name: 'short gris',
  //     label: 'mon dressing',
  //     season: 'Hiver',
  //     type: 'bas',
  //     color: 'gris',
  //     size: 'M',
  //     favorite: false,
  //     linkImage: '../assets/img/dressing/short-gris.png',
  //     fit: 'fit',
  //   },
  // ];





  constructor(private clotheInventoryService: ClotheInventoryService) {}
  ngOnInit(): void {
    this.getClotheInventory();
  }



  //Fonction qui recupere tous les habits et les mets dans clothe Inventory
  getClotheInventory = () => {
    this.clotheInventoryService.getAll().subscribe({
      next: (data: IUsers[]) => {
        this.usersList = data;

        this.itemInventory = this.usersList[0].wardrobes[0].tops.concat(
          this.usersList[0].wardrobes[0].bottoms
        );

        this.itemInventory.forEach((element) => {
          if (element.type == 'bas') {
            this.itemBottomList.push(element);
          } else {
            this.itemTopList.push(element);

          }
        });
        console.log(this.itemTopList)
      },
      error: (data) => {
        console.error('error get all');
      },
      complete() {},
    });
  };

  getRandomTopBottom() {
    var topRandom = Math.floor(Math.random() * 4);
    var bottomRandom = Math.floor(Math.random() * 4);

    this.itemOutfitTop = this.itemTopList[topRandom];
    this.itemOutfitBottom = this.itemBottomList[bottomRandom];
  }
}
