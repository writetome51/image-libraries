import { Component } from '@angular/core';
import { LogoutProcessorService } from './services/data-transport-processor/logout-processor.service';
import { DataProcessorComponent } from './data-processor.component';


@Component({
	selector: 'logout-button',
	template: `
		<processing-button [context]="this" [clickHandler]="process">
			Sign Out
		</processing-button>
	`
})
export class LogoutButtonComponent extends DataProcessorComponent {

	constructor(__logoutProcessor: LogoutProcessorService) {
		super(__logoutProcessor);
	}

}
