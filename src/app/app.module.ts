import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginFormInputsComponent }
	from './login/login-form/login-form-inputs.component';
import { GetSecurityQuestionComponent } from './get-security-question/get-security-question.component';
import { GetSecurityQuestionFormComponent }
	from './get-security-question/get-security-question-form/get-security-question-form.component';
import { GetSecurityQuestionFormInputsComponent }
	from './get-security-question/get-security-question-form/get-security-question-form-inputs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LibrariesComponent } from './libraries/libraries.component';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LogoutButtonComponent } from './logout-button.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProcessingButtonComponent } from './processing-button/processing-button.component';
import { ValidatingInputsModule } from './validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		AppComponent,
		AlertComponent,
		GetSecurityQuestionComponent,
		GetSecurityQuestionFormComponent,
		GetSecurityQuestionFormInputsComponent,
		LibrariesComponent,
		LoadingSpinnerComponent,
		LoginComponent,
		LoginFormComponent,
		LoginFormInputsComponent,
		LogoutButtonComponent,
		PageNotFoundComponent,
		ProcessingButtonComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ValidatingInputsModule,
		AppRoutingModule, // must be loaded before any other routing module.
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
