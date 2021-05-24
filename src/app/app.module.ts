import { AppComponent } from './app_component/app.component';
import { AppMessageCenterModule } from './app-message-center_module/app-message-center.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTMLImageModule } from '@html-image_module/html-image.module';
import { LoggedInNavigatorModule } from './logged-in-navigator_module/logged-in-navigator.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HTMLImageModule,
		AppMessageCenterModule,
		LoggedInNavigatorModule,
		AppRoutingModule,
	],
	providers: [Title], // for setting html <title>.  Available app-wide.

	bootstrap: [AppComponent]
})
export class AppModule {}
