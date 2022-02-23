import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './componants/nav-bar/nav-bar.component';
import { ButtonComponent } from './componants/button/button.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    LoginSignupComponent,
    HomeComponent,
    ProjectsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
