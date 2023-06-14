import { DressingComponent } from './../../commons/dressing/dressing.component';
import { Component, ViewChild } from '@angular/core';

import Iitem from 'src/app/models/item.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent {
  itemSeletedFromOutput!: Iitem; // Variable pour stocker l'élément sélectionné provenant de la sortie

  @ViewChild(DressingComponent) private dressingComp:DressingComponent | undefined;


  outputItemSeleted(item: Iitem) {
    // Fonction appelée lorsqu'un élément est sélectionné
    this.itemSeletedFromOutput = item; // Elle met à jour la variable itemSeletedFromOutput avec l'élément sélectionné (item)
  }

  switchDressing(number:any){
     this.dressingComp!.switchBetweenDressing(number)
  }
}
