import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent }  from '../home/home.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about',  component: AboutMeComponent },
  { path: 'skills',  component: SkillsComponent },
  { path: 'exp',  component: ExperienceComponent },
  { path: 'edu',  component: EducationComponent },
  { path: 'contact',  component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRouteModule { }
