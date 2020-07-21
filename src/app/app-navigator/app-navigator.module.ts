import { AppNavigatorComponent } from './app-navigator.component';
import { AppNavigatorModuleRoutesData as moduleRoutes } from './app-navigator-module-routes.data';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '../shared-modules/start-data-process-button/start-data-process-button.module';


@NgModule({
	declarations: [AppNavigatorComponent, LogoutButtonComponent],

	imports: [
		CommonModule,
		BrowserModule,
		StartDataProcessButtonModule,
		RouterModule.forRoot([
			{
				path: moduleRoutes.UpdateUserModule,
				loadChildren: () => import('../update-user/update-user.module')
					.then(mod => mod.UpdateUserModule)
			},

			{
				path: moduleRoutes.AddImagesModule,
				loadChildren: () => import('../add-images/add-images.module')
					.then(mod => mod.AddImagesModule)
			},

			{
				path: moduleRoutes.AllImagesModule,
				loadChildren: () => import('../all-images/all-images.module')
					.then(mod => mod.AllImagesModule)
			},
		])
	],

	exports: [AppNavigatorComponent]
})

export class AppNavigatorModule {
}
