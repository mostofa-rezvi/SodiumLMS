import { Component } from '@angular/core';

@Component({
  selector: 'app-social-space',
  templateUrl: './social-space.component.html',
  styleUrl: './social-space.component.css',
})
export class SocialSpaceComponent {
  posts = [
    {
      author: 'John Doe',
      content: 'Hello World! This is my first post.',
      time: '2 mins ago',
    },
    {
      author: 'Jane Smith',
      content: 'Angular is awesome! 🚀',
      time: '10 mins ago',
    },
    {
      author: 'Alice Johnson',
      content: 'Bootstrap makes UI easy!',
      time: '30 mins ago',
    },
  ];
}
