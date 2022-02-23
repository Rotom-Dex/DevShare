import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginSignupComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'project', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
