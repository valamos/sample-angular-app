import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        ariaCurrentWhenActive="page"
      >Home</a>
      <a routerLink="/about" routerLinkActive="active" ariaCurrentWhenActive="page">About</a>
      <a routerLink="/events" routerLinkActive="active" ariaCurrentWhenActive="page">Events</a>
      <a routerLink="/contact" routerLinkActive="active" ariaCurrentWhenActive="page">Contact</a>
    </nav>
    <main class="main-container">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }
      a.active {
        background: rgba(255, 255, 255, 0.25);
      }
    `
  ]
})
export class AppComponent { }
