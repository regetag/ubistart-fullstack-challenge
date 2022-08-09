import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignInComponent } from './pages/user-sign-in-page/user-sign-in.component';
import { UserSignUpComponent } from './pages/user-sign-up-page/user-sign-up.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from './services/validation.service';

@NgModule({
  declarations: [
    AppComponent,
    UserSignInComponent,
    UserSignUpComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
