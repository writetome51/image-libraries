import { Component } from '@angular/core';
import { ProcessLogoutService } from './process-logout_service/process-logout.service';
import { ClickExecuteIDoThisContainerComponent }
	from '@abstract-components/click-execute-i-do-this-container.abstract.component';


@Component({
	selector: 'logout-button',
	template: `<execute-function-button [container]="this">Sign Out</execute-function-button>`
})
export class LogoutButtonComponent extends ClickExecuteIDoThisContainerComponent {

	constructor(_iDoThis: ProcessLogoutService) {
		super(_iDoThis);
	}

}
