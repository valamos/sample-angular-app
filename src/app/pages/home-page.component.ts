import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent { }
