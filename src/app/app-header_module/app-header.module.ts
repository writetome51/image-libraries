import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppHeaderComponent } from '@app/app-header_module/app-header.component';
import { LoggedInNavigatorModule }
	from './logged-in-navigator_module/logged-in-navigator.module';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [AppHeaderComponent],
	imports: [
		BrowserModule,
		CommonModule,
		LoggedInNavigatorModule,
		RouterModule
	],
	exports: [AppHeaderComponent]
})
export class AppHeaderModule {}
