import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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
  submitError = '';
  sending = false;

  submissions: Array<{ name: string; email: string; message: string; submittedAt: Date }> = [];

  submitForm(contactForm: NgForm): void {
    if (contactForm.invalid) {
      contactForm.control.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.submitError = '';
    this.submittedMessage = '';

    // Simulate a short network request for demo purposes.
    setTimeout(() => {
      this.submissions.unshift({
        name: this.formData.name.trim(),
        email: this.formData.email.trim(),
        message: this.formData.message.trim(),
        submittedAt: new Date()
      });

      this.submittedMessage = `Thanks, ${this.formData.name || 'friend'}! We'll be in touch at ${this.formData.email}.`;
      this.sending = false;
      contactForm.resetForm();
    }, 500);
  }
}
