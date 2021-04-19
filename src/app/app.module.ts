import { AppAlertComponent } from './app-alert.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTMLImageModule } from '@html-image_module/html-image.module';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInNavigatorModule } from './logged-in-navigator_module/logged-in-navigator.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
	declarations: [
		AppAlertComponent,
		AppComponent,
		PageNotFoundComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HTMLImageModule,
		HttpClientModule,
		LoggedInNavigatorModule,
		AppRoutingModule
	],
	providers: [Title], // for setting html <title>.  Available app-wide.

	// To suppress unnecessary angular compiler error concerning Components that
	// inherit from abstract Components:
	schemas: [NO_ERRORS_SCHEMA],

	bootstrap: [AppComponent]
})
export class AppModule {}
