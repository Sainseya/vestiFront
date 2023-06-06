import {Component, Input} from '@angular/core';
import {inputNames} from "@angular/cdk/schematics";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input()
  label !: string
}
