import { Component } from '@angular/core';
import { LogoutProcessorService } from './logout-processor/logout-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'logout-button',
	template: `<start-data-process-button [container]="this">Sign Out</start-data-process-button>`
})
export class LogoutButtonComponent extends StartDataProcessContainerComponent {

	constructor(__logoutProcessor: LogoutProcessorService) {
		super(__logoutProcessor);
	}

}
