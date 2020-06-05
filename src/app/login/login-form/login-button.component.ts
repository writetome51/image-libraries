import { Component } from '@angular/core';
import { LoginProcessorService }
	from '../../services/data-transport-processor/authentication/login-processor.service';
import { StartDataProcessComponent } from '../../start-data-process.component';


@Component({
	selector: 'login-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="start">
			Sign In
		</processing-button>
	`
})
export class LoginButtonComponent extends StartDataProcessComponent {

	constructor(__loginProcessor: LoginProcessorService) {
		super(__loginProcessor);
	}

}
