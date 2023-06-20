import Item from "./item.model";

interface Event{
  dateStart: Date,
  dateEnd: Date,
  description: string,
  oufit: Item[]
}

export default Event;
