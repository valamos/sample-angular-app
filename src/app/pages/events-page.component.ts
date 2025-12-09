import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EventItem {
  title: string;
  date: string;
  location: string;
  description?: string;
}

@Component({
  standalone: true,
  selector: 'app-events-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './events-page.component.html'
})
export class EventsPageComponent {
  events: EventItem[] = [
    {
      title: 'Community Meetup',
      date: '2024-09-12',
      location: 'Downtown Innovation Hub',
      description: 'Share updates, showcase projects, and network with other members.'
    },
    {
      title: 'Hands-on Workshop: Modern Web UI',
      date: '2024-10-03',
      location: 'Tech Lab 2',
      description: 'Build a live prototype together using the latest Angular tooling.'
    },
    {
      title: 'Product Launch & AMA',
      date: '2024-11-08',
      location: 'Online Webinar',
      description: 'Walkthrough of the upcoming release followed by audience Q&A.'
    }
  ];

  newEvent: EventItem = {
    title: '',
    date: '',
    location: '',
    description: ''
  };

  addEvent() {
    const trimmedTitle = this.newEvent.title.trim();
    const trimmedLocation = this.newEvent.location.trim();
    const trimmedDescription = this.newEvent.description?.trim() ?? '';

    if (!trimmedTitle || !this.newEvent.date || !trimmedLocation) {
      return;
    }

    this.events = [
      ...this.events,
      {
        title: trimmedTitle,
        date: this.newEvent.date,
        location: trimmedLocation,
        description: trimmedDescription
      }
    ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    this.newEvent = {
      title: '',
      date: '',
      location: '',
      description: ''
    };
  }

  removeEvent(index: number) {
    this.events = this.events.filter((_, i) => i !== index);
  }
}
