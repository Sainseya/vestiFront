import { Component, OnInit } from '@angular/core';
import Item from 'src/app/models/item.model';
import Iitem from 'src/app/models/item.model';
import IUsers from 'src/app/models/user.model';
import { ClotheInventoryService } from 'src/app/services/clothe-inventory.service';
import {delay} from 'utils-decorators'

@Component({
  selector: 'app-ootd',
  templateUrl: './ootd.component.html',
  styleUrls: ['./ootd.component.css'],
})
export class OotdComponent implements OnInit {
  usersList: IUsers[] = [];
  itemInventory: Iitem[] = [];
  itemTopList: Iitem[] = [];
  itemBottomList: Iitem[] = [];
  itemShoesList: Iitem[] = [];
  itemBottomListClone: Iitem[] = this.itemBottomList;
  itemOutfitTop!: Iitem;
  itemOutfitBottom!: Iitem;
  itemOutfitShoes!: Iitem;
  router: any;

  /**
   * Creates an instance of OotdComponent.
   * @param {ClotheInventoryService} clotheInventoryService
   * @memberof OotdComponent
   */
  constructor(private clotheInventoryService: ClotheInventoryService) {}
  ngOnInit(): void {
    this.getClotheInventory();

    this.getTopList();
    this.getBottomList();
    this.getShoesList()
  }

  //Fonction qui recupere tous les habits et les mets dans clothe Inventory
  // getClotheInventory = () => {
  //   this.clotheInventoryService.getAll().subscribe({
  //     next: (data: IUsers[]) => {
  //       this.usersList = data;

  //       this.itemInventory = this.usersList[0].wardrobes[0].tops.concat(
  //         this.usersList[0].wardrobes[0].bottoms
  //       );
  getClotheInventory = () => {
    this.clotheInventoryService.getAll().subscribe({
      next: (data: IUsers[]) => {
        this.usersList = data;

        // console.log(this.usersList[0].userId)
        this.clotheInventoryService.setId(this.usersList[0].userId);

      },
      error: (data) => {
        console.error('error get all');
      },
      complete() {},
    });
  };


  getTopList = () => {
    this.clotheInventoryService.getByTypeTop().subscribe({
      next: (data: Item[]) => {
        this.getClotheInventory()
        this.itemTopList = data;

      },
      error: (data) => {
        console.error('error get tops');
      },
      complete() {},
    });
  };

  getBottomList = () => {
    this.clotheInventoryService.getByTypeBottom().subscribe({
      next: (data: Item[]) => {
        this.itemBottomList = data;
      },
      error: (data) => {
        console.error('error get bottoms');
      },
      complete() {},
    });
  };

  getShoesList = () => {
    this.clotheInventoryService.getByTypeShoes().subscribe({
      next: (data: Item[]) => {
        this.itemShoesList = data;
        console.log(this.itemShoesList)
      },
      error: (data) => {
        console.error('error get shoes');
      },
      complete() {},
    });
  };



  getRandomTopBottom() {
    //fonction pour afficher un habits aleatoirement
    var topRandom = Math.floor(Math.random() * 4);
    var bottomRandom = Math.floor(Math.random() * 4);
    var shoesRandom = Math.floor(Math.random() * 4);

    this.itemOutfitTop = this.itemTopList[topRandom];
    this.itemOutfitBottom = this.itemBottomList[bottomRandom];
    this.itemOutfitShoes = this.itemShoesList[shoesRandom];
  }
}
