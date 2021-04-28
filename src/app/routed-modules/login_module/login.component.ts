import { AppModulePathData } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginModuleTitleData as moduleTitle } from './login-module-title.data';


@Component({
	selector: 'app-login',
	template: `
		<login-form clearFormOnInit clearAlertsOnDestroy></login-form>

		<p>Don't have an account?
			<a [routerLink]="moduleRoutes.NewUserModule" routerLinkActive="active">
				Create Account
			</a>
		</p>

		<site-explanation></site-explanation>
	`
})
export class LoginComponent {

	moduleRoutes = AppModulePathData;


	constructor(private __title: Title) {
		this.__title.setTitle(moduleTitle.data);
	}

}
