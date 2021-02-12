import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button/execute-function-button.module';
import { LoggedInNavigatorComponent } from './logged-in-navigator.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { NavigatorLinksComponent } from './navigator-links.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		LoggedInNavigatorComponent,
		LogoutButtonComponent,
		NavigatorLinksComponent
	],

	imports: [
		CommonModule,
		BrowserModule,
		ExecuteFunctionButtonModule,
		RouterModule
	],

	exports: [LoggedInNavigatorComponent]
})
export class LoggedInNavigatorModule {
}
