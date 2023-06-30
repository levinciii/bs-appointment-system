import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', title: 'Bustamante-Segovia Dental Clinic', component: HomeComponent },
  { path: 'about', title: 'About Us', component: AboutComponent },
  { path: 'team', title: 'The Dental Team', component: TeamComponent },
  { path: 'facilities', title: 'Facilities', component: FacilitiesComponent },
  { path: 'contact', title: 'Contact Us', component: ContactComponent },
  { path: 'login', title: 'Log In', component: LoginComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
