import Item from "./item.model";

interface Wardrobe {
  id: string,
  name: string,
  items: Item[]
}

export default Wardrobe;
