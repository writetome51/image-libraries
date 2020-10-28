import { AppModuleRoutesData } from '../app-module-routes.data';
import { Component } from '@angular/core';


@Component({
	selector: 'app-login',
	template: `
		<login-form clearFormOnInit clearAlertOnDestroy></login-form>

		<p>Don't have an account?
			<a [routerLink]="moduleRoutes.NewUserModule" routerLinkActive="active">Create
				Account</a>
		</p>

		<site-explanation></site-explanation>
	`
})
export class LoginComponent {

	moduleRoutes = AppModuleRoutesData;

}
