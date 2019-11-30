import { AlertComponent } from './alert/alert.component';
import { AnswerSecurityQuestionComponent }
	from './security-question/answer-security-question/answer-security-question.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginFormInputsComponent }
	from './login/login-form/login-form-inputs.component';
import { GetSecurityQuestionComponent } from './security-question/get-security-question/get-security-question.component';
import { GetSecurityQuestionFormComponent }
	from './security-question/get-security-question/get-security-question-form/get-security-question-form.component';
import { GetSecurityQuestionFormInputsComponent }
	from './security-question/get-security-question/get-security-question-form/get-security-question-form-inputs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LibrariesComponent } from './libraries/libraries.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LogoutButtonComponent } from './logout-button.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProcessingButtonModule } from './processing-button/processing-button.module';
import { ValidatingInputsModule } from './validating-inputs/validating-inputs.module';
import { AnswerSecurityQuestionFormComponent }
	from './security-question/answer-security-question/answer-security-question-form/answer-security-question-form.component';
import { AnswerSecurityQuestionFormInputsComponent }
	from './security-question/answer-security-question/answer-security-question-form/answer-security-question-form-inputs.component';


@NgModule({
	declarations: [
		AppComponent,
		AlertComponent,
		AnswerSecurityQuestionComponent,
		GetSecurityQuestionComponent,
		GetSecurityQuestionFormComponent,
		GetSecurityQuestionFormInputsComponent,
		LibrariesComponent,
		LoginComponent,
		LoginFormComponent,
		LoginFormInputsComponent,
		LogoutButtonComponent,
		PageNotFoundComponent,
		AnswerSecurityQuestionFormComponent,
		AnswerSecurityQuestionFormInputsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ValidatingInputsModule,
		ProcessingButtonModule,
		AppRoutingModule, // must be loaded before any other routing module.
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
