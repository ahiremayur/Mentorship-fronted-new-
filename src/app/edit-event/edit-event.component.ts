import { Component} from '@angular/core';
import events from 'src/event-data.json';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  ID = 1;
  event = events.events[this.ID];
  body = this.event.body;
  date = this.event.date;
  description = this.event.description;
  image = this.event.image;
  name = this.event.name;
  time = this.event.time;
  venue = this.event.venue;

  submit() {
    this.event.body = this.body; 
    this.event.date = this.date;
    this.description = this.description;
    this.image = this.image;
    this.name = this.name;
    this.time = this.time;
    this.venue = this.venue;

    console.log(events);
  }
  delete() {
    events.events.splice(this.ID, 1);
    console.log(events);
  }
}
