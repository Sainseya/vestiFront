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

  // Output pour envoyer la valeur favoris pour le composant dressign parent"
  @Output() selectedChange = new EventEmitter<boolean>();


/**
 * Rend le champs item.favorite true ou false et active l'output
 *
 * @type {void}
 */
  public toggleSelected() {
    this.selected = !this.selected;

    this.selectedChange.emit(this.selected);

    this.item.favorite = !this.item.favorite
  }

}
