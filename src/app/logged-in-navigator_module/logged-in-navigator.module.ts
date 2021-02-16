import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button/execute-function-button.module';
import { LoggedInNavigatorComponent } from './logged-in-navigator.component';
import { LoggedInNavigatorServicesModule } from './logged-in-navigator-services.module';
import { LogoutButtonComponent } from './logout-button_component/logout-button.component';
import { NavigationLinksModule } from '@navigation-links/navigation-links.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		LoggedInNavigatorComponent,
		LogoutButtonComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		ExecuteFunctionButtonModule,
		LoggedInNavigatorServicesModule,
		NavigationLinksModule,
		RouterModule
	],
	exports: [LoggedInNavigatorComponent]
})
export class LoggedInNavigatorModule {
}
