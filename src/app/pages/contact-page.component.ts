import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact-page',
  imports: [FormsModule],
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submittedMessage = '';

  submitForm(): void {
    this.submittedMessage = `Thanks, ${this.formData.name || 'friend'}! We'll be in touch soon.`;
  }
}
