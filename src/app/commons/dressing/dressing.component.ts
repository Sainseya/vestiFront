import { ClotheInventoryService } from '../../services/clothe-inventory.service';
import {Component, OnInit, Output, EventEmitter, forwardRef} from '@angular/core';
import User from 'src/app/models/user.model';
import Item from 'src/app/models/item.model';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.component.html',
  styleUrls: ['./dressing.component.css']
})
export class DressingComponent implements OnInit {

  //variable pour le bouton afficher favoris
  disabledFav = true;
  //Liste des habits ou les donnes du service sont enregistrée
  usersList: User[] = [];
  itemInventory: Item[] = [];
  //Liste des habits favoris
  listItemFav: any[] = []
  itemSelected?: Item;

  @Output() selectedItemEvent = new EventEmitter<Item>();

  constructor(private clotheInventoryService: ClotheInventoryService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.sortFavElement()
    this.getClotheInventory()
  }

  //Fonction qui recupere tous les habits et les mets dans clothe Inventory
  getClotheInventory = () =>  {
    this.clotheInventoryService.getAll().subscribe({
      next : (data: User[]) => {
        this.usersList = data
        console.log(this.usersList[0].wardrobes[0].items)
          this.itemInventory = this.usersList[0].wardrobes[0].items
        },
      error :(data) => {
          console.error("error get all")
        },
       complete(){

        }


    })
  }

  //Fonction pour switcher entre les favoris et tous les vetements
  disabledFavFunction(){
    this.disabledFav = !this.disabledFav;
    this.sortFavElement();

  }

  //Fonction pour mettre dans une liste de favoris listItemFav les vetement avec le boolean favori
  sortFavElement(){
     this.itemInventory.forEach(element => {
      if(element.isFavorite && !this.listItemFav.includes(element) ){
        this.listItemFav.push(element);
      }

      this.listItemFav.forEach(element => {
        if(!element.isFavorite){
          this.listItemFav.splice(element, 1)
        }
      })

    });
  }

  selectItem(item:Item){
     this.itemSelected = item;
     this.selectedItemEvent.emit(this.itemSelected);
  }

  /* Permet d'ouvrir la modale contenant le formulaire de saisie d'un nouvel article, avec un effet de ralentissement */
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      "width" : "80%"
    });
  }





}
