class Item {
  type!: string;
  size!: string;
  fit!: string;
  season!: string;
  isFavorite?: boolean;
  color!: string;
  label!: string;
  picture!: File;

  constructor() {
    this.isFavorite = false;
  }

}

export default Item;
