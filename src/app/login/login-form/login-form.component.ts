import { AppModuleRoutesData } from '@app/app-module-routes.data';
import { Component } from '@angular/core';
import { LoginProcessorService } from './login-processor/login-processor.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

	moduleRoutes = AppModuleRoutesData;


	constructor(public processor: LoginProcessorService) {
	}

}
