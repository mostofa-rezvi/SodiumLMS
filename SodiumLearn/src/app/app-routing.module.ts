import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MyProgressComponent } from './pages/my-progress/my-progress.component';
import { SocialSpaceComponent } from './pages/social-space/social-space.component';
import { MyFilesComponent } from './pages/my-files/my-files.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyCourseNavComponent } from './pages/courses/my-course-nav/my-course-nav.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: MyCourseNavComponent},
  { path: 'explore', component: ExploreComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'progress', component: MyProgressComponent },
  { path: 'social-space', component: SocialSpaceComponent },
  { path: 'files', component: MyFilesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
