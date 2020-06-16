import { AppNavigatorComponent } from './app-navigator.component';
import { AppNavigatorModuleRouteService as moduleRoute } from './app-navigator-module-route.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from './logout-button.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '../start-data-process-button/start-data-process-button.module';


@NgModule({
	declarations: [AppNavigatorComponent, LogoutButtonComponent],

	imports: [
		CommonModule,
		BrowserModule,
		StartDataProcessButtonModule,
		RouterModule.forRoot([
			{
				path: moduleRoute.UpdateUserModule,
				loadChildren: () => import('../update-user/update-user.module')
					.then(mod => mod.UpdateUserModule)
			}
		])
	],

	exports: [AppNavigatorComponent]
})

export class AppNavigatorModule {
}
