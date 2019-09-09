import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    EmailComponent,
    SignupComponent,
    SigninComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





