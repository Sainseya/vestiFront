import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignupService} from "../../_service/signup.service";

class DialogData {
}
@Component({
  selector: 'app-dialog-signup',
  templateUrl: './dialog-signup.component.html',
  styleUrls: ['./dialog-signup.component.css']
})
export class DialogSignupComponent {
  user : any = [{
    username: "",
    password :"",
    email:""
  }]

  constructor(@Inject(MAT_DIALOG_DATA)public data: DialogData,private formBuilder: FormBuilder, private signUpModel: SignupService)  {}

  //Déclaration du formulaire
  userForm:FormGroup = this.formBuilder.group({
    username:['',[Validators.minLength(3), Validators.required]],
    password:['',[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
    email: ['', [Validators.email, Validators.required ]]
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
    console.log(this.user)
    this.signUpModel.signUp(this.userForm.value).subscribe(data => {})
    this.submitted = false;
    this.userForm.reset();
  }

  public get form() {
    return this.userForm.controls;
  }

}
