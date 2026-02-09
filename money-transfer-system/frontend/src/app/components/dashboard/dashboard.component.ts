import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  balance: number = 0;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getBalance().subscribe((data: any) => {
      this.balance = data.balance;
    });
  }
}
