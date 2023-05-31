import { ClotheInventoryService } from './../../services/clothe-inventory.service';
import { Component, OnInit } from '@angular/core';
import IClothe from 'src/app/models/clothe.model';

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.component.html',
  styleUrls: ['./dressing.component.css']
})
export class DressingComponent implements OnInit {

  //variable pour le bouton afficher favoris
  disabledFav = true;
  //Liste des habits ou les donnes du service sont enregistrée
  clotheInventory: IClothe[] = [];
  //Liste des habits favoris
  listClothesFav: any[] = []

  constructor(private clotheInventoryService: ClotheInventoryService){}

  ngOnInit(): void {
    this.sortFavElement()
    this.getClotheInventory()
  }

  //Fonction qui recupere tous les habits et les mets dans clothe Inventory
  getClotheInventory = () =>  {
    this.clotheInventoryService.getAll().subscribe({
      next : (data: IClothe[]) => {
        this.clotheInventory = data
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

  //Fonction pour mettre dans une liste de favoris listClothesFav les vetement avec le boolean favori
  sortFavElement(){
     this.clotheInventory.forEach(element => {
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






}
