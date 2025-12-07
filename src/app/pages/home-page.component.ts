import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [RouterLink],
  template: `
    <section class="card">
      <h1>Welcome to Sample Angular App</h1>
      <p>
        This simple site demonstrates Angular routing with four core pages: Home, About,
        Events, and Contact. Use the navigation bar to explore each section.
      </p>
      <div class="button-group">
        <a routerLink="/about" class="button-link">Learn more about us</a>
        <a routerLink="/events" class="button-link">See upcoming events</a>
        <a routerLink="/contact" class="button-link">Get in touch</a>
      </div>
    </section>
  `
})
export class HomePageComponent { }
