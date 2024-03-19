import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {LoginFormComponent} from "../../components/login-form/login-form.component";
import {RouterLink} from "@angular/router";
import {ForgotPasswordFormComponent} from "../../components/forgot-password-form/forgot-password-form.component";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    NavbarComponent,
    LoginFormComponent,
    RouterLink,
    ForgotPasswordFormComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {}
