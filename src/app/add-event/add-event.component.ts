import { Component} from '@angular/core';
import events from 'src/event-data.json';

@Component({
  selector: 'app-edit',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  event:any={};
  body = this.event.body;
  date = this.event.date;
  description = this.event.description;
  image = this.event.image;
  name = this.event.name;
  time = this.event.time;
  venue = this.event.venue;

  add(){
    events.events.push({
      name:this.name,
      date:this.date,
      venue:this.venue,
      body:this.body,
      time:this.time,
      description:this.description,
      image:this.image,
      id:(events.events.length+1)+"",
      favoption:false
    });
    console.log(events);
    alert("EVENT ADDED");
  }
}
