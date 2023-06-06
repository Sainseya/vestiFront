class Item {
  private id!: string;
  label!: string;
  isFavorite!: boolean;
  type!: string;
  season!: string;
  size!: string;
  fit!: string;
  picture!: File;
  color!: string;

  constructor() {
    this.isFavorite = false;
  }


}

export default Item;
