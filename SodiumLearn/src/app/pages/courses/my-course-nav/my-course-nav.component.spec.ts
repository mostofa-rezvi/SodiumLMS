import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseNavComponent } from './my-course-nav.component';

describe('MyCourseNavComponent', () => {
  let component: MyCourseNavComponent;
  let fixture: ComponentFixture<MyCourseNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCourseNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCourseNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
