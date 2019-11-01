import { AlertModule } from './alert/alert.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditUserModule } from './edit-user/edit-user.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { LibraryModule } from './library/library.module';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { LoginFormComponent } from './introduction/login-form/login-form.component';
import { NewUserModule } from './new-user/new-user.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ValidatingInputsModule } from './validating-inputs/validating-inputs.module';
import { EmailPasswordFormInputsModule }
	from './email-password-form-inputs/email-password-form-inputs.module';


@NgModule({
	declarations: [
		AppComponent,
		IntroductionComponent,
		LibrariesComponent,
		LoginFormComponent,
		PageNotFoundComponent,
		ForgotPasswordComponent,
		ChangePasswordComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AlertModule,
		LoadingSpinnerModule,
		ValidatingInputsModule,
		EmailPasswordFormInputsModule,
		AppRoutingModule, // must be loaded before any other routing module.
		LibraryModule,
		NewUserModule,
		EditUserModule,

	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
