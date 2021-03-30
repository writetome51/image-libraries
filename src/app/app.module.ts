import { AppAlertComponent } from './app-alert.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { FormsModule } from '@angular/forms';
import { HTMLImageModule } from '@html-image_module/html-image.module';
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
		HTMLImageModule,
		HttpClientModule,
		LoggedInNavigatorModule,
		CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dnpg3umhb',  upload_preset: 'tiqeiglj'}),
		AppRoutingModule
	],
	providers: [Title], // for setting html <title>.  Available app-wide.

	bootstrap: [AppComponent]
})
export class AppModule {}
