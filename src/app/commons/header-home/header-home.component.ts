import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {

  @Input() drawer:any;

  @Output() switchDressing = new EventEmitter<any>();



  emitSwitchDressing(event:any){
    this.switchDressing.emit(event)
  }





}
