import { AppModuleRoutesData } from '../app-module-routes.data';
import { Component } from '@angular/core';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent {

	moduleRoutes = AppModuleRoutesData;

}
