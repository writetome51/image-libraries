import { AppAlertComponent } from './app-alert/app-alert.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTMLImageModule } from '@html-image/html-image.module';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInNavigatorModule } from '@app/logged-in-navigator/logged-in-navigator.module';
import { NgModule } from '@angular/core';
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
		HttpClientModule,
		HTMLImageModule,
		LoggedInNavigatorModule,
		AppRoutingModule
	],
	providers: [Title], // for setting html <title>

	bootstrap: [AppComponent]
})
export class AppModule {
}
