import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EmailPasswordFormInputsModule }
	from './email-password-form-inputs/email-password-form-inputs.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LibrariesComponent } from './libraries/libraries.component';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LogoutButtonComponent } from './logout-button.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ValidatingInputsModule } from './validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		AppComponent,
		AlertComponent,
		ForgotPasswordComponent,
		LibrariesComponent,
		LoadingSpinnerComponent,
		LoginComponent,
		LoginFormComponent,
		LogoutButtonComponent,
		PageNotFoundComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ValidatingInputsModule,
		EmailPasswordFormInputsModule,
		AppRoutingModule, // must be loaded before any other routing module.
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
