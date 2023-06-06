import Item from "./item.model";

interface Event{
  id: string,
  dateStart: Date,
  dateEnd: Date,
  description: string,
  oufit: Item[]
}

export default Event;
