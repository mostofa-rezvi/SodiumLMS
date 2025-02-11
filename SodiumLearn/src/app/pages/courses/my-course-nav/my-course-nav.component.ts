import { Component, OnInit } from '@angular/core';
import { MyCoursesService } from '../services/my-courses.service';
import { Review } from '../services/review.model';
import { Resource } from '../services/resource.model';

@Component({
  selector: 'app-my-course-nav',
  templateUrl: './my-course-nav.component.html',
  styleUrls: ['./my-course-nav.component.css']
})
export class MyCourseNavComponent implements OnInit {
  modules: any[] = [];
  displayedModules: any[] = [];
  lessons: any[] = [];
  selectedModule: any = null;
  showMore = false;

  reviews: Review[] = [];
  visibleReviews: Review[] = [];
  showAll = false;
  newReview: Review = {
    id: 0,
    name: '',
    designation: '',
    rating: 0,
    review: '',
    image: '',
    date: new Date().toDateString()
  };

  resources: Resource[] = [];

  constructor(private courseService: MyCoursesService) {}

  ngOnInit(): void {
    this.fetchModules();
    this.fetchReviews();
    this.fetchResource();
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

  fetchReviews() {
    this.courseService.getReviews().subscribe((data) => {
      this.reviews = data;
      this.updateVisibleReviews();
    });
  }

  fetchResource(){
    this.courseService.getResources().subscribe((data) => {
      this.resources = data;
    });
  }

  updateVisibleReviews() {
    this.visibleReviews = this.showAll ? this.reviews : this.reviews.slice(0, 6);
  }

  loadLessons(module: any) {
    this.selectedModule = module;
    this.lessons = module.lessons; // Directly load lessons from the module
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
    this.displayedModules = this.showMore ? this.modules.slice(0, 9) : this.modules.slice(0, 6);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.updateVisibleReviews();
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  submitReview() {
    if (!this.newReview.name || !this.newReview.review) return;

    if (!this.newReview.image) {
      this.newReview.image = 'https://via.placeholder.com/50';
    }

    this.newReview.id = this.reviews.length + 1;
    this.courseService.addReview(this.newReview).subscribe((response) => {
      this.reviews.unshift(response);
      this.updateVisibleReviews();
      this.newReview = {
        id: 0,
        name: '',
        designation: '',
        rating: 0,
        review: '',
        image: '',
        date: new Date().toDateString()
      };
    });
  }
}
