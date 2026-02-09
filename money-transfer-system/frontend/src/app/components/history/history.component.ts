import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  transactions: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getHistory().subscribe((data: any) => {
      this.transactions = data;
    });
  }
}
