import { AppNavigatorComponent } from './app-navigator.component';
import { AppNavigatorChoiceData as choice } from './app-navigator-choice.data';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExecuteFunctionButtonModule }
	from 'execute-function-button/execute-function-button.module';


@NgModule({
	declarations: [AppNavigatorComponent, LogoutButtonComponent],

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
			},
		])
	],

	exports: [AppNavigatorComponent]
})

export class AppNavigatorModule {
}
