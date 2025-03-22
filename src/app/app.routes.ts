import { Routes } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {ThankYouComponent} from './thankyou/thankyou.component';

export const routes: Routes = [
  { path: '', component: PaymentComponent },
  { path: 'thank-you', component: ThankYouComponent },
];
