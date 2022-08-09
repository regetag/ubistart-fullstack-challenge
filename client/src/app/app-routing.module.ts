import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSignInComponent } from "./user-sign-in/user-sign-in.component";
import { UserSignUpComponent } from "./user-sign-up/user-sign-up.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "registrar", component: UserSignUpComponent },
  { path: "entrar", component: UserSignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
