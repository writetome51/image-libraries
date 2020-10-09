import { AppAlertComponent } from './app-alert/app-alert.component';
import { AppComponent } from './app.component';
import { AppNavigatorModule } from '@app-navigator/app-navigator.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
	declarations: [
		AppAlertComponent,
		AppComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppNavigatorModule,
		AppRoutingModule
	],
	providers: [Title], // for setting <title>
	bootstrap: [AppComponent]
})
export class AppModule {
}
