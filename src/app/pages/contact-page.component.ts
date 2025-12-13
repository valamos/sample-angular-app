import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submittedMessage = '';

  submitForm(form: NgForm): void {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }

    this.submittedMessage = 'Thank you for contacting us.';
    this.formData = { name: '', email: '', message: '' };
    form.resetForm(this.formData);
  }
}
