
import { CalendarEvent } from 'angular-calendar';
import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction, MatCalendarCellCssClasses, MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Event } from 'src/app/models/event.model';
import Iitem from 'src/app/models/item.model';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EventPageComponent {
  selectedDate!: Date;
  datesToHighlight = ["2023/06/22", "2023/06/12", "2023/06/25", "2023/07/20"];
  itemOutfitTop: Iitem = {
        id: '3',
        name: 'chemise bordeaux',
        label: 'mon dressing',
        season: 'Eté',
        type: 'haut',
        color: 'rouge',
        size: 'XS',
        favorite: true,
        linkImage: '../assets/img/dressing/chemise-bordeaux.png',
        fit: 'Serré',
      }
  itemOutfitBottom: Iitem =  {
        id: '4',
        name: 'jean blanc',
        label: 'mon dressing',
        season: 'Hiver',
        type: 'bas',
        color: 'blanc',
        size: 'M',
        favorite: false,
        linkImage: '../assets/img/dressing/jean-blanc.png',
        fit: 'large',
      }

  events: Event[] = [{

    title: "Mariage de Nseya",
    date: new Date(this.datesToHighlight[0])


  },
  {
    title: "Vacances",
    date: new Date(this.datesToHighlight[1])
  }
  ]

  dateMatch: boolean = false
  eventNumber: number = -1

constructor(private renderer: Renderer2) { }

  onSelect(event: any) {

    this.selectedDate = event;



    if (this.selectedDate.getTime() == this.events[0].date.getTime()) {
      this.dateMatch = true
      this.eventNumber = 0
    } else if (this.selectedDate.getTime() == this.events[1].date.getTime()){
      this.dateMatch = true
      this.eventNumber = 1
    } else {
      this.dateMatch = false
    }
    console.log(this.eventNumber)


  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());

      return highlightDate ? 'my-date' : '';
    };
  }

  onSubmit() {

  }




}
