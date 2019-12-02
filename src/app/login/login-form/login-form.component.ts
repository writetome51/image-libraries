import { Component } from '@angular/core';
import { LoginProcessorService }
	from '../../services/data-operation-processor/login-processor.service';
import { AppModuleRouteService as moduleRoute } from '../../app-module-route.service';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent extends DataOperationProcessorComponent {

	moduleRoute = moduleRoute;


	constructor(__loginProcessor: LoginProcessorService) {
		super(__loginProcessor);
	}

}
