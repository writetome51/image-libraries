import { AppAlertComponent } from './app-alert/app-alert.component';
import { AppComponent } from './app.component';
import { AppNavigatorModule } from './app-navigator/app-navigator.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { LoginButtonComponent } from './login/login-form/login-button.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginFormInputsComponent } from './login/login-form/login-form-inputs.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { StartDataProcessButtonModule }
	from './start-data-process-button/start-data-process-button.module';
import { ValidatingInputsModule } from './validating-inputs/validating-inputs.module';
import { MapComponent } from './map/map.component';



@NgModule({
	declarations: [
		AppComponent,
		AppAlertComponent,
		LoginComponent,
		LoginFormComponent,
		LoginFormInputsComponent,
		LoginButtonComponent,
		PageNotFoundComponent,
		MapComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppNavigatorModule,
		ValidatingInputsModule,
		StartDataProcessButtonModule,
		GoogleMapsModule,
		AppRoutingModule, // must be loaded before any other routing module.
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
