import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Thank you for your payment!</h1>
    <p>Your transaction was successful.</p>
  `
})
export class ThankYouComponent {}
