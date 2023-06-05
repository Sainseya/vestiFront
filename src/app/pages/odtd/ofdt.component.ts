import { Component, OnInit } from '@angular/core';
import Iitem from 'src/app/models/item.model';
import IUsers from 'src/app/models/user.model';
import { ClotheInventoryService } from 'src/app/services/clothe-inventory.service';
import { state, trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-ofdt',
  templateUrl: './ofdt.component.html',
  styleUrls: ['./ofdt.component.css'],
  animations: [
    trigger('generateOutfit', [
      state(
        'notHere',
        style({


          transform: 'translate(200%,0%) ',
        })
      ),
      state(
        'here',
        style({
          opacity: 1,
          transform: 'translate(-300%,0%) ',
        })
      ),
      transition('* => here', [animate('1s')]),
    ])
  ]
})

export class OfdtComponent implements OnInit {

  usersList: IUsers[] = [];
  itemInventory: Iitem[] = [];
  itemTopList: Iitem[] = [];

  itemBottomList: Iitem[] = [
    {
      "id": "3",
      "name": "jean bleu",
      "label": "mon dressing",
      "season": "Hiver",
      "type": "bas",
      "color": "bleu",
      "size": "M",
      "favorite": true,
      "linkImage": "../assets/img/dressing/jean-bleu.png",
      "fit": "Serré"
    },
    {
      "id": "4",
      "name": "jean blanc",
      "label": "mon dressing",
      "season": "Hiver",
      "type": "bas",
      "color": "blanc",
      "size": "M",
      "favorite": false,
      "linkImage": "../assets/img/dressing/jean-blanc.png",
      "fit": "large"
    },
    {
      "id": "5",
      "name": "pantalon beige",
      "label": "mon dressing",
      "season": "Hiver",
      "type": "bas",
      "color": "blanc",
      "size": "M",
      "favorite": false,
      "linkImage": "../assets/img/dressing/pantalon-beige.png",
      "fit": "large"
    },
    {
      "id": "10",
      "name": "short gris",
      "label": "mon dressing",
      "season": "Hiver",
      "type": "bas",
      "color": "gris",
      "size": "M",
      "favorite": false,
      "linkImage": "../assets/img/dressing/short-gris.png",
      "fit": "fit"
    }
  ];
  itemBottomListClone: Iitem[] = this.itemBottomList
  itemOutfitTop!: Iitem;
  itemOutfitBottom!: Iitem;
  animateTrigger = false;
  i = 0;


  toggle() {
    this.animateTrigger = !this.animateTrigger;

    setInterval(() => {

      this.animateTrigger = !this.animateTrigger;


    }, 700);






  }
  constructor(private clotheInventoryService: ClotheInventoryService) { }
  ngOnInit(): void {

    this.getClotheInventory()

    // setInterval(() => {
    //   if(this.i > 3){
    //     this.i = 0;
    //   }
    //   this.itemBottomList.push(this.itemBottomListClone[this.i])
    //   this.itemBottomList.splice(this.i, 1)
    //   this.i++;
    // }, 500);
  }

  ngOnChanges(changes: any) {

    this.toggle();
    setInterval(() => {

      this.animateTrigger = !this.animateTrigger;


    }, 300);



  }

  //Fonction qui recupere tous les habits et les mets dans clothe Inventory
  getClotheInventory = () => {
    this.clotheInventoryService.getAll().subscribe({
      next: (data: IUsers[]) => {
        this.usersList = data
        console.log(this.usersList[0].wardrobes[0])
        this.itemInventory = this.usersList[0].wardrobes[0].tops.concat(this.usersList[0].wardrobes[0].bottoms)

        this.itemInventory.forEach(element => {
          if (element.type == "bas") {
            this.itemBottomList.push(element)
          } else {
            this.itemTopList.push(element)
          }

        });
      },
      error: (data) => {
        console.error("error get all")
      },
      complete() {}
    })
  }

  getRandomTopBottom(){
    var topRandom = Math.floor(Math.random() * 4);
    var bottomRandom = Math.floor(Math.random() * 4);

    this.itemOutfitTop = this.itemTopList[topRandom];
    this.itemOutfitBottom = this.itemBottomList[bottomRandom]


  }

}
