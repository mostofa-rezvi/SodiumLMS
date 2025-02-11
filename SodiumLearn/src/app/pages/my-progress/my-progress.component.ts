import { Component, OnInit } from '@angular/core';
import { Progress } from './progress.model';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-my-progress',
  templateUrl: './my-progress.component.html',
  styleUrl: './my-progress.component.css',
})
export class MyProgressComponent implements OnInit {
  progressList: Progress[] = [];

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    this.progressService.getProgress().subscribe((data) => {
      this.progressList = data;
    });
  }
}
