import { Component, Input } from '@angular/core';
import Iitem from 'src/app/models/item.model';
import { state, trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-view-one-item',
  templateUrl: './view-one-item.component.html',
  styleUrls: ['./view-one-item.component.css'],
  animations: [
    trigger('newItemTrigger', [

      state('notHere', style({

        opacity: 0,

        transform:'translate(-20%,0%) scale(0.8)'
      })),
      state('here', style({
        opacity: 1,
        transform:'translate(-0%,0%) scale(1)'

      })),
      transition('* => here', [
        animate('0.2s'),



      ]),


    ]),
  ],
})
export class ViewOneItemComponent {

  @Input() item!: Iitem;
  newItem = false;
  toggle() {
    this.newItem = !this.newItem;

  }
  ngOnChanges(changes: any) {

    this.toggle();
    setInterval(() => {

      if(this.newItem == true)
    {
      this.newItem = false;
    }

    }, 300);

    

  }
}
