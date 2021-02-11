import { AppModuleRoutesData } from '../app-module-routes.data';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModuleTitleData as moduleTitle } from './module-title.data';


@Component({
	selector: 'app-login',
	template: `
		<login-form clearFormOnInit clearAlertOnDestroy></login-form>

		<p>Don't have an account?
			<a [routerLink]="moduleRoutes.NewUserModule" routerLinkActive="active">
				Create Account
			</a>
		</p>

		<site-explanation></site-explanation>
	`
})
export class LoginComponent {

	moduleRoutes = AppModuleRoutesData;


	constructor(private __title: Title) {
		this.__title.setTitle(moduleTitle.data);
	}


}
