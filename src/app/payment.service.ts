import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private http: HttpClient) {}

  createPayment(amount: string): Observable<any> {
    return this.http.post('http://localhost:8081/api/payments/create', { amount });
  }
}
