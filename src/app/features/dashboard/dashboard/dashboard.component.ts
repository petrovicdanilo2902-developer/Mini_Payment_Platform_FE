import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userName = 'Danilo';
  payments = [
    { id: '001', amount: 25.50, currency: 'EUR', status: 'Success' },
    { id: '002', amount: 10.00, currency: 'EUR', status: 'Failed' },
    { id: '003', amount: 45.00, currency: 'USD', status: 'Pending' }
  ];
}
