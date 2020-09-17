import { AppAlertComponent } from './app-alert/app-alert.component';
import { AppComponent } from './app.component';
import { AppNavigatorModule } from '@app-navigator/app-navigator.module';
import { AppRoutingModule } from './app-routing.module';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginButtonComponent } from './login/login-form/login-button.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginFormInputsComponent } from './login/login-form/login-form-inputs.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';


@NgModule({
	declarations: [
		AppComponent,
		AppAlertComponent,
		LoginComponent,
		LoginFormComponent,
		LoginFormInputsComponent,
		LoginButtonComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppNavigatorModule,
		AppValidatingFormInputsModule,
		StartDataProcessButtonModule,
		AppRoutingModule, // must be loaded before any other routing module.
	],
	providers: [Title],
	bootstrap: [AppComponent]
})
export class AppModule {
}
