import { Component } from '@angular/core';
import { AppModuleRouteData } from '../../app-module-route.data';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

	moduleRoute = AppModuleRouteData;

}
