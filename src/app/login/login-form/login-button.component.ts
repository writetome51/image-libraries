import { Component } from '@angular/core';
import { LoginProcessorService }
	from '../../services/data-operation-processor/login-processor.service';
import { DataProcessorComponent } from '../../data-processor.component';


@Component({
	selector: 'login-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Sign In
		</processing-button>
	`
})
export class LoginButtonComponent extends DataProcessorComponent {

	constructor(__loginProcessor: LoginProcessorService) {
		super(__loginProcessor);
	}

}
