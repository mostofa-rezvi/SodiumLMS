import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  notifications: any[] = [];
  unreadCount: number = 0;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.getNotifications().subscribe(data => {
      this.notifications = data;
      this.unreadCount = this.notifications.length;
    });
  }

  profileName = 'Lee Yang';

}
