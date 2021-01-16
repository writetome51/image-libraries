import { Component } from '@angular/core';
import { LogoutProcessorService } from './logout-processor/logout-processor.service';
import { StartProcessContainerComponent }
	from '@abstract-components/start-process-container.component';


@Component({
	selector: 'logout-button',
	template: `
		<start-function-execution-button [container]="this">
			Sign Out
		</start-function-execution-button>
	`
})
export class LogoutButtonComponent extends StartProcessContainerComponent {

	constructor(_processor: LogoutProcessorService) {
		super(_processor);
	}

}
