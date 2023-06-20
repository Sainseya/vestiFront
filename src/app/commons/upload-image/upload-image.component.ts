import {Component, EventEmitter, OnInit, Output, Self} from '@angular/core';
import {UploadFileService} from "../../services/upload-file.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {FormControlName, NgControl} from "@angular/forms";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit{
  /* Information de progression sur le chargement de l'image. */
  progressInfo: any | null;

  /* Nom de l'image que l'utilisateur a choisi d'ajouter. */
  selectedFileName!: string;

  /* La liste de fichiers image ajoutée. */
  selectedFile?: File;

  /* Message d'information à l'utilisateur */
  message: string[] = [];

  /* Aperçu de l'image qui va être ajouté. */
  previews: string[] = [];

  /* Envoie de données au formulaire parent. */
  @Output()
  photoAdded = new EventEmitter<string>();

  @Output()
  uuid!: string

  // @Output()
  // pictureCtrl!: FormControlName;

  // /* Image enregistrée dans le back */
  // imageInfos?: Observable<any>;

  constructor(private uploadFileService: UploadFileService){
    //           @Self() public controlName: NgControl) {
    // this.pictureCtrl.valueAccessor = this;
  }

  ngOnInit(): void {
    // this.imageInfos = this.uploadFileService.getFiles();
}

  selectFile(event: any): void {
    this.message = [];
    this.progressInfo = null;
    this.selectedFile = event.target.files[0];

    this.previews = [];
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.previews.push(e.target.result);
      };

      reader.readAsDataURL(this.selectedFile);

      this.selectedFileName = this.selectedFile.name;
    }
  }

  uploadFile(): void {
    this.message = [];

    if (this.selectedFile) {
      this.upload(this.selectedFile);
    }
  }

  upload(file: File): void {
    this.progressInfo = { value: 0, fileName: file.name };

    if (file) {
      this.uploadFileService.upload(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.uuid = event.fichier;
            this.progressInfo.value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'La photo a été ajoutée avec succès: ' + file.name;
            this.message.push(msg);
            this.photoAdded.emit(event.body.url);
          }
        },
        error: (err: any) => {
          this.progressInfo.value = 0;
          const msg = 'La photo n\'a pas pu être ajoutée : ' + file.name + '. Assurez-vous qu\'elle fait moins de 5MB.';
          this.message.push(msg);
        }
      });
    }
  }

}
