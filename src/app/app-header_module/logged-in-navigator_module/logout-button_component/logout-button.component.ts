import { Component } from '@angular/core';
import { ProcessLogoutService } from './process-logout_service/process-logout.service';
import { ClickExecuteIDoThisContextDirective }
	from '@app/shared/abstract-directives/click-execute-i-do-this-context.abstract.directive';


@Component({
	selector: 'logout-button',
	template: `<execute-function-button [context]="this">Sign Out</execute-function-button>`
})
export class LogoutButtonComponent extends ClickExecuteIDoThisContextDirective {

	constructor(_iDoThis: ProcessLogoutService) {
		super(_iDoThis);
	}

}
