import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  stats: any = {};
  recentActivity: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getUsers().subscribe((data) => {
      this.users = data;
    });

    this.dashboardService.getStats().subscribe((data) => {
      this.stats = data;
    });

    this.dashboardService.getRecentActivity().subscribe((data) => {
      this.recentActivity = data;
    });
  }
}
