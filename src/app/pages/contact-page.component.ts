import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact-page',
  template: `
    <section class="card">
      <h2>Contact</h2>
      <p>We would love to hear from you. Try the following channels:</p>
      <ul>
        <li>Email: <a href="mailto:hello@example.com">hello@example.com</a></li>
        <li>Phone: <a href="tel:+1234567890">(123) 456-7890</a></li>
        <li>Social: Follow us on your favorite platforms.</li>
      </ul>
      <p>
        Replace these placeholders with your real contact details to make this page your own.
      </p>
    </section>
  `
})
export class ContactPageComponent { }
