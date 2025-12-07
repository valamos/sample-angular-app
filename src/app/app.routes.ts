import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { AboutPageComponent } from './pages/about-page.component';
import { EventsPageComponent } from './pages/events-page.component';
import { ContactPageComponent } from './pages/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home | Sample Angular App' },
  { path: 'about', component: AboutPageComponent, title: 'About | Sample Angular App' },
  { path: 'events', component: EventsPageComponent, title: 'Events | Sample Angular App' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact | Sample Angular App' },
  { path: '**', redirectTo: '' }
];
