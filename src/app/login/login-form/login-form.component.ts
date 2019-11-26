import { Component } from '@angular/core';
import { LoginProcessorService }
	from '../../services/data-operation-processor/login-processor.service';
import { PerformAppDataOperationService as performAppDataOperation }
	from '../../services/perform-app-data-operation.service';
import { AppModuleRouteService as moduleRoute } from '../../app-module-route.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

	moduleRoute = moduleRoute;


	constructor(private __loginProcessor: LoginProcessorService) {
	}


	async login() {
		await performAppDataOperation.go(this.__loginProcessor);
	}

}
