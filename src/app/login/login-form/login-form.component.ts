import { Component } from '@angular/core';
import { AppModuleRoutesData } from '../../app-module-routes.data';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

	moduleRoutes = AppModuleRoutesData;

}
