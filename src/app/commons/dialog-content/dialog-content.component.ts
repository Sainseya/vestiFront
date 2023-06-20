import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

class DialogData {
}

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css'],
})
export class DialogContentComponent implements OnInit {
  user:any[] = [{
    username:"nseya",
    password:"password123456789"
  }
  ]

  constructor(@Inject(MAT_DIALOG_DATA)public data: DialogData,private formBuilder: FormBuilder)  {}

  //Déclaration du formulaire
  userForm:FormGroup = this.formBuilder.group({
    username:['',[Validators.minLength(3), Validators.required]],
    password:['',[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]]
  })

  submitted: boolean =false;

  public onSubmit(): void {
    this.submitted = true
    if (this.userForm.valid) {
      this.logUser();
    }
  }
  ngOnInit(): void {
  }

  private logUser() {
    this.user.push(this.userForm.value);
    this.userForm.reset();
    this.submitted = false;
  }

  public get form() {
    return this.userForm.controls;
  }
}



