import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button/execute-function-button.module';
import { LoggedInAppNavigatorComponent } from './logged-in-app-navigator.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { NavigatorChoiceData as choice } from './navigator-choice.data';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [LoggedInAppNavigatorComponent, LogoutButtonComponent],

	imports: [
		CommonModule,
		BrowserModule,
		ExecuteFunctionButtonModule,
		RouterModule.forRoot([
			{
				path: choice.UpdateUserModule.path,
				loadChildren: () => import('../update-user/update-user.module')
					.then(mod => mod.UpdateUserModule)
			},

			{
				path: choice.AddImagesModule.path,
				loadChildren: () => import('../add-images/add-images.module')
					.then(mod => mod.AddImagesModule)
			},

			{
				path: choice.AllImagesModule.path,
				loadChildren: () => import('../all-images/all-images.module')
					.then(mod => mod.AllImagesModule)
			}
		])
	],

	exports: [LoggedInAppNavigatorComponent]
})
export class LoggedInAppNavigatorModule {
}
