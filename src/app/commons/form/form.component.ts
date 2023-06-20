import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl, FormArray} from "@angular/forms";
import {ItemFormService} from "../../services/item-form.service";
import {fits, seasons, sizes, sizesClothes, sizesShoes, types} from "./data";
import Wardrobe from "../../models/wardrobe.model";
import {Observable, tap} from "rxjs";
import {async} from "@angular/core/testing";
import WardrobeModel from "../../models/wardrobe.model";
import {UploadFileService} from "../../services/upload-file.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
/* Déclaration des FormGroups et FormControls */
  wardrobeForm!: FormGroup;
  nameCtrlExistingWardrobes!: FormControl;
  nameCtrlNewWardrobe!: FormControl;
  items!:FormArray;
  itemForm!: FormGroup;
  fitCtrl!: FormControl;
  pictureCtrl!: FormControl;

  /* Variable faisant le lien avec le service et le back pour fournir les dressings de l'utilisateur */
  wardrobes$?: Observable<Wardrobe[]>;
  wardrobes!: Wardrobe[]
  // wardrobes: Wardrobe[] | null = null;

  /* Ce booléen permet un affichage conditionnel du champ "fit". Celui-ci apparaît seulement si le type de l'aticle est un vêtement. */
  showFit: boolean = false;

  /* Ces variables permettent l'utilisation des données stockées dans data.ts */
  protected readonly types = types;
  protected readonly sizes = sizes;
  protected readonly sizesClothes = sizesClothes;
  protected readonly sizesShoes = sizesShoes;
  protected readonly fits = fits;
  protected readonly seasons = seasons;

  /* Cette variable fait le lien avec le composant enfant permettant l'ajout d'une photo de l'article. */
  addedPhotoUrl: string | undefined;

  /* Cette variable permet d'ajouter un message d'erreur en cas de besoin à l'utilisateur */
  private errorMessage!: string;

/* Constructeur comprenant formbuilder pour la construction de formulaire, notre service faisant le lien avec le back et Activated route. */
    constructor(private formBuilder: FormBuilder,
              private itemFormService: ItemFormService,
                private uploadFileService: UploadFileService
  ) {}

  /* Les fonctions qui se lancent à l'initiation du composant formulaire. */
  ngOnInit(): void {
    this.initFormControls();
    this.itemFormService.getWardrobes().subscribe(wardrobes=>{
      this.wardrobes = wardrobes;
    })

    // this.getWardrobes();
  }

  /* Initialisation des FormGroups. */
  private initMainForm() {
    this.itemForm = this.formBuilder.group({})
    this.wardrobeForm = this.formBuilder.group({})
  }

  /* Initialisation des FormControls. */
  private initFormControls(): void {
    if (this.wardrobes$ === null){
      this.wardrobeForm = this.formBuilder.group({
        nameCtrlFirstCreation: ['', Validators.required],
        items : this.formBuilder.array([])
      });
    } else {
        this.wardrobeForm = this.formBuilder.group({
          nameCtrlExistingWardrobes: ['', Validators.required],
          nameCtrlNewWardrobe: ['', Validators.required],
          items : this.formBuilder.array([])
      });
      this.itemForm = this.formBuilder.group({
        typeCtrl: ['', Validators.required],
        sizeCtrl: ['', Validators.required],
        seasonCtrl: ['', Validators.required],
        isFavoriteCtrl: [false],
        colorCtrl: ['#039be5', Validators.required],
        labelCtrlNew: ['',Validators.required],
        labelCtrlExistingLabels: ['',Validators.required],
        pictureCtrl: ['', Validators.required]
      });
      this.itemForm.controls['typeCtrl'].valueChanges.subscribe((value: string) => {
        this.showFit = value === 'haut' || value === 'bas';
        this.itemForm.addControl('fitCtrl', ['',Validators.required]);
      });
      const itemsFormArray = this.wardrobeForm.get('items') as FormArray;
      itemsFormArray.push(this.itemForm);
    }
  }

  /* Il va chercher la valeur du type sélectionnée par l'utilisateur pour permettre le bon affichage des tailles correspondantes. */
  get itemType(): string {
    return this.itemForm.controls['typeCtrl'].value;
  }

  /* Il va chercher les labels que l'utilisateur aurait déjà créés. */
  // hasLabels() : boolean {
  //   for (const wardrobe of this.wardrobes$) {
  //     for (const item of wardrobe.items) {
  //       if (item.label) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // }

  labels!: string[];
  hasLabels(): boolean {
    let hasLabels = false;

    this.wardrobes$?.subscribe((wardrobes: Wardrobe[]) => {
      for (const wardrobe of wardrobes) {
        for (const item of wardrobe.items) {
          if (item.label) {
            hasLabels = true;
            this.labels.push(item.label)
            // Si vous souhaitez effectuer une opération supplémentaire ici,
            // vous pouvez le faire avant de retourner true.
            break; // Si vous souhaitez arrêter la boucle interne après avoir trouvé une étiquette
          }
        }

        if (hasLabels) {
          break; // Si vous souhaitez arrêter la boucle externe après avoir trouvé une étiquette
        }
      }
    });

    return hasLabels;
  }

  /* Enregistrement de la valeur du composant enfant d'ajout de photo au controleur adéquat de formulaire. */
  onPhotoAdded(url: string): void {
    this.addedPhotoUrl = url;
    this.pictureCtrl.setValue(url);
  }


/* Soumission de formulaire */
  onSubmitForm() {
    if (this.wardrobeForm.valid) {
      if (this.wardrobeForm.value.nameCtrlNewWardrobe != null) {
        this.wardrobeForm.removeControl('nameCtrlExistingWardrobes');
      } else {
        this.wardrobeForm.removeControl('nameCtrlNewWardrobe');
      }
      if (this.wardrobeForm.value.labelCtrlNew != null) {
        this.wardrobeForm.removeControl('labelCtrlExistingLabels');
      } else {
        this.wardrobeForm.removeControl('labelCtrlNew');
      }
      if (this.wardrobeForm.contains('nameCtrlNewWardrobe')) {
        // this.wardrobeForm.setControl('pictureCtrl', this.uploadFileService.getFiles())
        this.itemFormService.saveWardrobe(this.wardrobeForm.value);
      } else {
        const wardrobeName = this.wardrobeForm.value.nameCtrlNewWardrobe
          || this.wardrobeForm.value.nameCtrlExistingWardrobes;
        // this.itemForm.setControl('pictureCtrl', this.uploadFileService.getFiles())
        // this.id = this.route.snapshot.paramMap.get('id')
        this.itemFormService.saveItem(this.itemForm.value, wardrobeName);
      }
      this.wardrobeForm.reset();
    } else {
      this.errorMessage = 'Une erreur s\'est produite lors de la soumission du formulaire.';
    }
  }

    // getWardrobes() {
    //   this.itemFormService.getWardrobes()
    //     .pipe(
    //       tap((data: Wardrobe[]) => {
    //         this.wardrobes = data;
    //       })
    //     )
    //     .subscribe(
    //       () => {},
    //       (error) => {
    //         console.error('Une erreur s\'est produite lors de la récupération des dressings :', error);
    //       }
    //     );
    // }
    // this.submitted = true;
    // if (this.item.valid){
    //  this.onAddItem();}
    // }

    // private onAddItem(){
    //   this.wardrobeService.addItem(this.item.value).subscribe( response => {
    //     // réponse backend
    //   },
    //     error => {
    //     // afficher un message d'erreur
    //     });
    //   this.item.reset();
    //   this.submitted = false;
    // }
  }
