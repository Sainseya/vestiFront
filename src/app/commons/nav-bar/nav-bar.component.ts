import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalWelcomePageComponent } from 'src/app/commons/modal-welcome-page/modal-welcome-page.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private dialog: MatDialog) {
  }

  openModal() {
    this.dialog.open(ModalWelcomePageComponent);
  }

}
