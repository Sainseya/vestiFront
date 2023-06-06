import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators,FormBuilder} from "@angular/forms";
import {WardrobeService} from "../../services/wardrobe.service";
import {fits, itemAttributsForLabel, seasons, sizes, types} from "./data";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // item!: FormGroup;
  submitted : boolean = false;
  typeOptions = types;
  sizeOptions = sizes;
  fitOptions = fits;
  seasonOptions = seasons;
  itemAttributsForLabel = itemAttributsForLabel;



  constructor(private formBuilder : FormBuilder,
              private wardrobeService: WardrobeService,
              ) {}
  item:FormGroup = this.formBuilder.group({
    label: [''],
    favorite: [false],
    type: ['', Validators.required],
    season: ['', Validators.required],
    size: ['', Validators.required],
    fit: ['', Validators.required],
    picture: ['', Validators.required],
    color: ['', Validators.required],
  })

  // ngOnInit() {
  // }

  onSubmitForm() {
    this.submitted = true;
    if (this.item.valid){
     this.onAddItem();
   }
  }

  private onAddItem(){
    this.wardrobeService.addItem(this.item.value).subscribe( response => {
      // réponse backend
    },
      error => {
      // afficher un message d'erreur
      });
    this.item.reset();
    this.submitted = false;
  }

  getOptions(attribute: string): any[] {
    switch (attribute) {
      case 'type':
        return this.typeOptions;
      case 'size':
        return this.sizeOptions;
      case 'season':
        return this.seasonOptions;
      case 'fit':
        return this.fitOptions;
      default:
        return [];
    }
  }


}
