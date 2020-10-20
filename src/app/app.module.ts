import { AppAlertComponent } from './app-alert/app-alert.component';
import { AppComponent } from './app.component';
import { AppNavigatorModule } from '@app-navigator/app-navigator.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTMLImageModule } from '@app/shared/modules/html-image/html-image.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { FrameComponent } from './test-frame/frame/frame.component';
import { TestFrameComponent } from './test-frame/test-frame.component';


@NgModule({
	declarations: [
		AppAlertComponent,
		AppComponent,
		PageNotFoundComponent,

		// temp (for testing):
		FrameComponent,
		TestFrameComponent

	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		HTMLImageModule,
		AppNavigatorModule,
		AppRoutingModule
	],
	providers: [Title], // for setting <title>

	bootstrap: [AppComponent]
})
export class AppModule {
}
