import { AppAlertComponent } from './app-alert_component/app-alert.component';
import { AppComponent } from './app_component/app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTMLImageModule } from '@html-image/html-image.module';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInNavigatorModule } from './logged-in-navigator_module/logged-in-navigator.module';
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
	providers: [Title], // for setting html <title>.  Available app-wide.

	bootstrap: [AppComponent]
})
export class AppModule {
}
