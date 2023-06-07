import { Component } from '@angular/core';
import Iitem from 'src/app/models/item.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  itemSeletedFromOutput!:Iitem;

 
  outputItemSeleted(item:Iitem){
    this.itemSeletedFromOutput = item;

  }

}
