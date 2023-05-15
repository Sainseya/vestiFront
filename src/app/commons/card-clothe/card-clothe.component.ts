import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-clothe',
  templateUrl: './card-clothe.component.html',
  styleUrls: ['./card-clothe.component.css']
})
export class CardClotheComponent {

  @Input() item:any;

  isHidden = false;

}
