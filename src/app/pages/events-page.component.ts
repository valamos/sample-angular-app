import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-events-page',
  template: `
    <section class="card">
      <h2>Upcoming Events</h2>
      <p>Here are a few ideas for events you could highlight:</p>
      <ul>
        <li><strong>Meetups:</strong> Casual gatherings for community members.</li>
        <li><strong>Workshops:</strong> Hands-on sessions to learn something new.</li>
        <li><strong>Webinars:</strong> Virtual presentations with live Q&A.</li>
        <li><strong>Launches:</strong> Product updates or milestone celebrations.</li>
      </ul>
      <p>
        Update this list with your own schedule to keep visitors informed about what's happening next.
      </p>
    </section>
  `
})
export class EventsPageComponent { }
