import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming events</h1>
        <hr />    
        <event-thumbnail [event] = "event1"></event-thumbnail>    
    </div>
    `
})

export class EventListComponent {
  
    event1 = {
        id: 1,
        name: 'Microservice YOW',
        date: '09/01/2019',
        time: '10:00',
        price: 600,
        imageUrl: '/assets/images/ng-conf.png',
        location: {
            address: '60 Margaret Street',
            city: 'Sydney',
            country: 'Australia'
        } 
    }
}
