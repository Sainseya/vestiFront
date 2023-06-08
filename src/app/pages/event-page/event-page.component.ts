import { CalendarEvent } from 'angular-calendar';
import { Component,  Renderer2 } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Event } from 'src/app/models/event.model';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {
  selectedDate!: Date;

  events: Event[] = [];

  constructor(private renderer:Renderer2){}

  private highlightDays(days: string[]) {
    const dayElements = document.querySelectorAll(
      'mat-calendar .mat-calendar-table .mat-calendar-body-cell'
    );



    Array.from(dayElements).forEach((element) => {
      const matchingDay = days.find((d) => d === element.getAttribute('even')) !== undefined;

      if (matchingDay) {
        this.renderer.addClass(element, 'available');
        this.renderer.setAttribute(element, 'title', 'Event 1');
      } else {
        this.renderer.removeClass(element, 'available');
        this.renderer.removeAttribute(element, 'title');
      }
    });
  }


}
