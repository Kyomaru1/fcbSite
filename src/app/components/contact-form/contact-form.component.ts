import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {
  email = new FormControl('', Validators.compose([Validators.requiredTrue, Validators.email]));
  firstName = new FormControl('', Validators.requiredTrue);
  lastName = new FormControl('', Validators.requiredTrue)
  instrument = new FormControl('', Validators.requiredTrue);
  yearsExperience = new FormControl('');
  messageBody = new FormControl('');

  constructor(private http: HttpClient){}

  onSubmit() {
      var mailMessage = `${this.firstName.value} ${this.lastName.value} has submitted the following information\n\n`
         mailMessage += `Instrument: ${this.instrument.value}\n`
         mailMessage += `Years of Experience ${this.instrument.value != null ? this.instrument.value : "None provided"}\n`
         mailMessage += `Return Email Address: ${this.email.value}\n`;
         mailMessage += `Message Body: \n`;
         mailMessage += `${this.messageBody.value}`;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mqkozkgv',
        { name: `${this.firstName.value} ${this.lastName.value}`, replyto: this.email.value, message: mailMessage },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }
