import { Component, Input, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {

  @Input() drawer:any;




  ngOnInit(): void {

}

toggleDarkTheme(): void {
  document.body.classList.toggle('dark-theme');
  console.log("darktheme")
}

}
