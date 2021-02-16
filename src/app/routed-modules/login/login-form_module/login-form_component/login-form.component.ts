import { AppModulePathData } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { LoginProcessorService } from '../login-processor_service/login-processor.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

	moduleRoutes = AppModulePathData;


	constructor(public processor: LoginProcessorService) {
	}

}
