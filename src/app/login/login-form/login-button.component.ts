import { Component } from '@angular/core';
import { LoginProcessorService } from './login-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'login-button',
	template: `
		<start-data-process-button [type]="'submit'" [container]="this">
			Sign In
		</start-data-process-button>
	`
})
export class LoginButtonComponent extends StartDataProcessContainerComponent {

	constructor(__loginProcessor: LoginProcessorService) {
		super(__loginProcessor);
	}

}
