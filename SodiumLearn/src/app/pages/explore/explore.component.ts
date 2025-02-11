import { Component, OnInit } from '@angular/core';
import { ExploreService } from './explore.service';
import { DemoCourse } from './explore.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent implements OnInit {
  courses: DemoCourse[] = [];

  constructor(private courseService: ExploreService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
}
