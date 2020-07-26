import { Component } from '@angular/core';
import { LogoutProcessorService } from './logout-processor/logout-processor.service';
import { StartDataProcessComponent }
	from '../../shared/abstract-components/start-data-process.component';


@Component({
	selector: 'logout-button',
	template: `<start-data-process-button [context]="this">Sign Out</start-data-process-button>`
})
export class LogoutButtonComponent extends StartDataProcessComponent {

	constructor(__logoutProcessor: LogoutProcessorService) {
		super(__logoutProcessor);
	}

}
