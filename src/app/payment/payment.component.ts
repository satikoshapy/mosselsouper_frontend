import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {PaymentService} from '../payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input [(ngModel)]="amount" placeholder="Amount in EUR" />
    <button (click)="pay()">Pay</button>
  `
})
export class PaymentComponent {
  amount = '10.00';

  constructor(private paymentService: PaymentService, private router: Router) {}

  pay() {
    this.paymentService.createPayment(this.amount).subscribe(res => {
      const response = typeof res === 'string' ? JSON.parse(res) : res;
      const paymentUrl = response._links.checkout.href;
      window.location.href = paymentUrl;
    });
  }
}
