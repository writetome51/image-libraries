import { Component } from '@angular/core';
import { LogoutProcessorService } from './services/data-operation-processor/logout-processor.service';
import { DataOperationProcessorComponent } from './data-operation-processor.component';


@Component({
	selector: 'logout-button',
	template: `
		<processing-button [context]="this" [clickHandler]="process">
			Sign Out
		</processing-button>
	`
})
export class LogoutButtonComponent extends DataOperationProcessorComponent {

	constructor(__logoutProcessor: LogoutProcessorService) {
		super(__logoutProcessor);
	}

}
