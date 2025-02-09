import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MyProgressComponent } from './pages/my-progress/my-progress.component';
import { SocialSpaceComponent } from './pages/social-space/social-space.component';
import { MyFilesComponent } from './pages/my-files/my-files.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    MyCoursesComponent,
    ExploreComponent,
    CalendarComponent,
    MyProgressComponent,
    SocialSpaceComponent,
    MyFilesComponent,
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
