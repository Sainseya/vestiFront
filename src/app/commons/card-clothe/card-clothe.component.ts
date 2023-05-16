import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-clothe',
  templateUrl: './card-clothe.component.html',
  styleUrls: ['./card-clothe.component.css']
})
export class CardClotheComponent {

  @Input() item:any;


  isHidden = false;
  selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);

    this.item.fav = !this.item.fav
  }

}
