import { Component } from '@angular/core';
import { ProcessLogoutService } from './process-logout_service/process-logout.service';
import { ClickExecuteProcessContainerComponent }
	from '@abstract-components/click-execute-process-container.abstract.component';


@Component({
	selector: 'logout-button',
	template: `<execute-function-button [container]="this">Sign Out</execute-function-button>`
})
export class LogoutButtonComponent extends ClickExecuteProcessContainerComponent {

	constructor(_process: ProcessLogoutService) {
		super(_process);
	}

}
