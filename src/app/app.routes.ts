import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LostComponent } from './pages/lost/lost.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: LostComponent },
];
