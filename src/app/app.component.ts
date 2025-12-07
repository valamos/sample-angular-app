import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
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
