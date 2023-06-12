import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-texte-presentation',
  templateUrl: './card-presentation-text.component.html',
  styleUrls: ['./card-presentation-text.component.css']
})
export class CardPresentationTextComponent {
  @Input()longText !: string;
/*  //Les styles sont définis comme un objet, où la clé est le nom de la propriété CSS et la valeur est la valeur correspondante
  @Input()customStyles!:{[keys: string]: string};*/
}

