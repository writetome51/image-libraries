import { AppComponent } from './app_component/app.component';
import { AppHeaderModule } from './app-header_module/app-header.module';
import { AppFooterComponent } from './app-footer.component';
import { AppMessageCenterModule } from './app-message-center_module/app-message-center.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HTMLImageModule } from '@html-image_module/html-image.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
	declarations: [
		AppComponent,
		AppFooterComponent,
		PageNotFoundComponent,
	],
	imports: [
		BrowserModule,
		HTMLImageModule,
		AppHeaderModule,
		AppMessageCenterModule,
		AppRoutingModule,
	],
	providers: [Title], // for setting html <title>.  Available app-wide.

	bootstrap: [AppComponent]
})
export class AppModule {}
