import { AppAlertComponent } from './app-alert/app-alert.component';
import { AppComponent } from './app.component';
import { AppNavigatorModule } from './app-navigator/app-navigator.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginFormInputsComponent } from './login/login-form/login-form-inputs.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginButtonComponent } from './login/login-form/login-button.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProcessingButtonModule } from './processing-button/processing-button.module';
import { ValidatingInputsModule } from './validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		AppComponent,
		AppAlertComponent,
		LoginComponent,
		LoginFormComponent,
		LoginFormInputsComponent,
		LoginButtonComponent,
		PageNotFoundComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppNavigatorModule,
		ValidatingInputsModule,
		ProcessingButtonModule,
		AppRoutingModule, // must be loaded before any other routing module.
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
