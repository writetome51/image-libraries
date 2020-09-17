import { AppModuleRoutesData } from '@app/app-module-routes.data';
import { Component } from '@angular/core';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

	moduleRoutes = AppModuleRoutesData;

}
