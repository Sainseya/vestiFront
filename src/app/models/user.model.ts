
import Item from "./item.model";
import Wardrobe from "./wardrobe.model";
import Event from "./event.model";

interface User {
  userId: string
  name: string
  surname: string
  pseudo: string
  email: string
  gender: string
  accountType: string
  wardrobes: Wardrobe[]
  events: Event[];
  outfit: Item[];

}
export default User;
