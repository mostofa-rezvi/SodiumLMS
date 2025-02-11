import {Component, OnInit} from '@angular/core';
import {MyCoursesService} from "../../services/my-courses.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent implements OnInit {
  modules: any[] = [];
  displayedModules: any[] = [];
  lessons: any[] = [];
  selectedModule: any = null;
  showMore = false;

  constructor(private courseService: MyCoursesService) {}

  ngOnInit(): void {
    this.fetchModules();
  }

  fetchModules() {
    this.courseService.getModules().subscribe((modules) => {
      this.modules = modules;
      this.displayedModules = this.modules.slice(0, 6);

      // Load first module lessons by default
      if (this.modules.length > 0) {
        this.loadLessons(this.modules[0]);
      }
    });
  }

  loadLessons(module: any) {
    this.selectedModule = module;
    this.lessons = module.lessons; // Directly load lessons from the module
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
    this.displayedModules = this.showMore ? this.modules.slice(0, 9) : this.modules.slice(0, 6);
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
