import { Component } from '@angular/core';
import { AppModuleRouteService } from '../../app-module-route.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

	moduleRoute = AppModuleRouteService;

}
