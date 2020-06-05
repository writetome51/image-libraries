import { Component } from '@angular/core';
import { LogoutProcessorService }
	from '../services/data-transport-processor/authentication/logout-processor.service';
import { StartDataProcessComponent } from '../start-data-process.component';


@Component({
	selector: 'logout-button',
	template: `
		<processing-button [context]="this" [clickHandler]="start">
			Sign Out
		</processing-button>
	`
})
export class LogoutButtonComponent extends StartDataProcessComponent {

	constructor(__logoutProcessor: LogoutProcessorService) {
		super(__logoutProcessor);
	}

}
