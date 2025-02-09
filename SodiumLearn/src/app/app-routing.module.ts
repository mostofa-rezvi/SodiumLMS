import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MyProgressComponent } from './pages/my-progress/my-progress.component';
import { SocialSpaceComponent } from './pages/social-space/social-space.component';
import { MyFilesComponent } from './pages/my-files/my-files.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'my-courses', component: MyCoursesComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'my-progress', component: MyProgressComponent },
  { path: 'social-space', component: SocialSpaceComponent },
  { path: 'my-files', component: MyFilesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
