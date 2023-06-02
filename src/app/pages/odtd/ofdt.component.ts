import { Component, OnInit } from '@angular/core';
import Iitem from 'src/app/models/item.model';
import IUsers from 'src/app/models/user.model';
import { ClotheInventoryService } from 'src/app/services/clothe-inventory.service';

@Component({
  selector: 'app-ofdt',
  templateUrl: './ofdt.component.html',
  styleUrls: ['./ofdt.component.css'],
})

export class OfdtComponent implements OnInit {

  usersList: IUsers[] = [];
  itemInventory: Iitem[] = [];
  itemTopList: Iitem[] = [];
  itemBottomList: Iitem[] = [];
  itemOutfitTop!: Iitem;
  itemOutfitBottom!: Iitem;
  constructor(private clotheInventoryService: ClotheInventoryService) { }
  ngOnInit(): void {

    this.getClotheInventory()
  }

  //Fonction qui recupere tous les habits et les mets dans clothe Inventory
  getClotheInventory = () => {
    this.clotheInventoryService.getAll().subscribe({
      next: (data: IUsers[]) => {
        this.usersList = data
        console.log(this.usersList[0].wardrobes[0].items)
        this.itemInventory = this.usersList[0].wardrobes[0].items

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
