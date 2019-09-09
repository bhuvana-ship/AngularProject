import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "email", component: EmailComponent },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
