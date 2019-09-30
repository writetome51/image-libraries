import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserFormComponent } from './create-user/create-user-form/create-user-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibraryModule } from './library/library.module';
import { LibrariesComponent } from './libraries/libraries.component';
import { LoginFormComponent } from './introduction/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { SuccessOrErrorMessageModule } from './success-or-error-message/success-or-error-message.module';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
	declarations: [
		AppComponent,
		CreateUserComponent,
		CreateUserFormComponent,
		IntroductionComponent,
		LibrariesComponent,
		LoginFormComponent,
		PageNotFoundComponent,
		UpdateUserComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		SuccessOrErrorMessageModule,
		AppRoutingModule,
		LibraryModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
