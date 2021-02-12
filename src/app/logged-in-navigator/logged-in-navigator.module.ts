import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button/execute-function-button.module';
import { LoggedInNavigatorComponent } from './logged-in-navigator.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { LoggedInNavigatorLinkData as link } from './logged-in-navigator-link.data';
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
		RouterModule.forRoot([
			{
				path: link.UpdateUserModule.path,
				loadChildren: () => import('../routed-modules/update-user/update-user.module')
					.then(mod => mod.UpdateUserModule)
			},

			{
				path: link.AddImagesModule.path,
				loadChildren: () => import('../routed-modules/add-images/add-images.module')
					.then(mod => mod.AddImagesModule)
			},

			{
				path: link.AllImagesModule.path,
				loadChildren: () => import('../routed-modules/all-images/all-images.module')
					.then(mod => mod.AllImagesModule)
			}
		])
	],

	exports: [LoggedInNavigatorComponent]
})
export class LoggedInNavigatorModule {
}
