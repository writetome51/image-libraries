import { Component } from '@angular/core';
import { ProcessLogoutService } from './process-logout_service/process-logout.service';
import { ClickExecuteIDoThisContextComponent }
	from '@abstract-components/click-execute-i-do-this-context.abstract.component';


@Component({
	selector: 'logout-button',
	template: `<execute-function-button [context]="this">Sign Out</execute-function-button>`
})
export class LogoutButtonComponent extends ClickExecuteIDoThisContextComponent {

	constructor(_iDoThis: ProcessLogoutService) {
		super(_iDoThis);
	}

}
