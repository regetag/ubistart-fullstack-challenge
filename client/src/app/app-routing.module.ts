import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSignInComponent } from "./pages/user-sign-in-page/user-sign-in.component";
import { UserSignUpComponent } from "./pages/user-sign-up-page/user-sign-up.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

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
