import { Component} from '@angular/core';
import events from 'src/event-data.json';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  ID = 0;
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
    this.event.description = this.description;
    this.event.image = this.image;
    this.event.name = this.name;
    this.event.time = this.time;
    this.event.venue = this.venue;

    console.log(events);
  }
  delete() {
    events.events.splice(this.ID, 1);
    alert("EVENT DELETED");
    this.event.body = ""; 
    this.event.date = "";
    this.event.description = "";
    this.event.image = "";
    this.event.name = "";
    this.event.time = "";
    this.event.venue = "";
    console.log(events);
  }
}
