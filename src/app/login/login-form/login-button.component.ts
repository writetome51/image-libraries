import { Component } from '@angular/core';
import { LoginProcessorService } from './login-processor.service';
import { StartDataProcessComponent }
	from '../../shared/abstract-components/start-data-process.component';


@Component({
	selector: 'login-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Sign In
		</start-data-process-button>
	`
})
export class LoginButtonComponent extends StartDataProcessComponent {

	constructor(__loginProcessor: LoginProcessorService) {
		super(__loginProcessor);
	}

}
