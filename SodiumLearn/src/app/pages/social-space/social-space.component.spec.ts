import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSpaceComponent } from './social-space.component';

describe('SocialSpaceComponent', () => {
  let component: SocialSpaceComponent;
  let fixture: ComponentFixture<SocialSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
