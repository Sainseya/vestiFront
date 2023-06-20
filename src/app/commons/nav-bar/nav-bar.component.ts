import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DialogContentComponent} from "../dialog-content/dialog-content.component";
import {DialogSignupComponent} from "../dialog-signup/dialog-signup.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogContentComponent, {
      data: {
      },
    });
  }

  openDialogSignup() {
    this.dialog.open(DialogSignupComponent, {
      data: {
      },
    });
  }
}

