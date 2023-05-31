import { Component, Input } from '@angular/core';
import Iitem from 'src/app/models/item.model';

@Component({
  selector: 'app-view-one-item',
  templateUrl: './view-one-item.component.html',
  styleUrls: ['./view-one-item.component.css']
})
export class ViewOneItemComponent {

  @Input() item!:Iitem;

}
