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
  submitted = false;

  submitForm(form: NgForm): void {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
        control.updateValueAndValidity();
      });
      this.submittedMessage = '';
      this.submitted = false;
      return;
    }

    const trimmedName = this.formData.name.trim();
    const trimmedEmail = this.formData.email.trim();

    this.submittedMessage = `Thanks, ${trimmedName || 'friend'}! We'll be in touch at ${trimmedEmail}.`;

    form.resetForm();
    this.submitted = true;
  }
}
