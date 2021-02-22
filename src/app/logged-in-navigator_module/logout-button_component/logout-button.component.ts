import { Component } from '@angular/core';
import { LogoutProcessorService } from './logout-processor_service/logout-processor.service';
import { ClickExecuteProcessContainerComponent }
	from '@abstract-components/click-execute-process-container.abstract.component';


@Component({
	selector: 'logout-button',
	template: `
		<execute-function-button [container]="this">Sign Out</execute-function-button>
	`
})
export class LogoutButtonComponent extends ClickExecuteProcessContainerComponent {

	constructor(_processor: LogoutProcessorService) {
		super(_processor);
	}

}
