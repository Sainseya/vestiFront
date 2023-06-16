import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';
import Item from 'src/app/models/item.model';
import Iitem from 'src/app/models/item.model';
import IUsers from 'src/app/models/user.model';
import { ClotheInventoryService } from 'src/app/services/clothe-inventory.service';
import { Observable } from 'rxjs';

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
  itemAccesoirieList: Item[] = []
  itemBottomListClone: Iitem[] = this.itemBottomList;
  itemOutfitTop!: Iitem;
  itemOutfitBottom!: Iitem;
  itemOutfitShoes!: Iitem;
  itemOutfitAccesoiries!: Iitem;
  router: any;
  oldUserid:any = ""
  userId:any = ""
  isApiLoaded = true;

  /**
   * Creates an instance of OotdComponent.
   * @param {ClotheInventoryService} clotheInventoryService
   * @memberof OotdComponent
   */

  constructor(private clotheInventoryService: ClotheInventoryService) {}

  ngOnInit(): void {
    this.getClotheInventory()


  }

  getClotheInventory = () => {
    this.clotheInventoryService.getAll().subscribe({
      next: (data: IUsers[]) => {
        this.usersList = data;


        this.clotheInventoryService.setId(this.usersList[0].userId);
        this.userId = this.usersList[0].userId


      },
      error: (data) => {
        console.error('error get all');
      },
      complete:()=>{




      },
    });
  };

  getTopList = () => {
    this.clotheInventoryService.getByTypeTop(this.userId).subscribe({
      next: (data: Item[]) => {
        this.getClotheInventory();
        this.itemTopList = data;
      },
      error: (data) => {
        console.error('error get tops');
      },
      complete() {},
    });
  };

  getBottomList = () => {
    this.clotheInventoryService.getByTypeBottom(this.userId).subscribe({
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
    this.clotheInventoryService.getByTypeShoes(this.userId).subscribe({
      next: (data: Item[]) => {
        this.itemShoesList = data;

      },
      error: (data) => {
        console.error('error get shoes');
      },
      complete:() =>  {

      },
    });
  };

  getAccesoirieList = () => {
    this.clotheInventoryService.getByTypeAccessoire(this.userId).subscribe({
      next: (data: Item[]) => {
        this.itemAccesoirieList = data;

      },
      error: (data) => {
        console.error('error get shoes');
      },
      complete:() =>  {

      },
    });
  };

  getRandomTopBottom() {
    //fonction pour afficher un habits aleatoirement (haut, bas, chaussures, accessoire)

    if(this.isApiLoaded){
      this.getTopList()
      this.getBottomList()
      this.getShoesList()
      this.getAccesoirieList()
       this.isApiLoaded = false
    }

    var topRandom = Math.floor(Math.random() * 3);
    var bottomRandom = Math.floor(Math.random() * 3);
    var shoesRandom = Math.floor(Math.random() * 3);
    var accessoirieRandom = Math.floor(Math.random() * 3);

    this.itemOutfitAccesoiries = this.itemAccesoirieList[accessoirieRandom]
    this.itemOutfitTop = this.itemTopList[topRandom];
    this.itemOutfitBottom = this.itemBottomList[bottomRandom];
    this.itemOutfitShoes = this.itemShoesList[shoesRandom];
  }
}
