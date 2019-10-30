import { AlertModule } from './alert/alert.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserFormComponent } from './create-user/create-user-form/create-user-form.component';
import { CreateUserFormInputsComponent }
	from './create-user/create-user-form/create-user-form-inputs/create-user-form-inputs.component';
import { EditUserModule } from './edit-user/edit-user.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { LibraryModule } from './library/library.module';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { LoginFormComponent } from './introduction/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ValidatingFormModule } from './validating-form/validating-form.module';


@NgModule({
	declarations: [
		AppComponent,
		CreateUserComponent,
		CreateUserFormComponent,
		CreateUserFormInputsComponent,
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
		AppRoutingModule, // must be loaded before any other routing module.
		LoadingSpinnerModule,
		LibraryModule,
		EditUserModule,
		ValidatingFormModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
