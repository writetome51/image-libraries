import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserFormComponent } from './create-user/create-user-form/create-user-form.component';
import { EditUserModule } from './edit-user/edit-user.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibraryModule } from './library/library.module';
import { LibrariesComponent } from './libraries/libraries.component';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { LoginFormComponent } from './introduction/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { SuccessOrErrorMessageModule } from './success-or-error-message/success-or-error-message.module';


@NgModule({
	declarations: [
		AppComponent,
		CreateUserComponent,
		CreateUserFormComponent,
		IntroductionComponent,
		LibrariesComponent,
		LoginFormComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		SuccessOrErrorMessageModule,
		AppRoutingModule, // must be loaded before any other routing module.
		LoadingSpinnerModule,
		LibraryModule,
		EditUserModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
