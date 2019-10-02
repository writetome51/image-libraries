import { Component } from '@angular/core';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';


@Component({
	selector: 'success-or-error-message',
	templateUrl: './success-or-error-message.component.html'
})
export class SuccessOrErrorMessageComponent {


	constructor(public successOrErrorMessage: SuccessOrErrorMessageService) {
	}


	closeMessage() {
		this.successOrErrorMessage.success = '';
	}


}
