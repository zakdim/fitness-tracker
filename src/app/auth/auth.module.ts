import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    ReactiveFormsModule,
    AngularFireAuthModule,
    SharedModule
  ]
})
export class AuthModule { }
