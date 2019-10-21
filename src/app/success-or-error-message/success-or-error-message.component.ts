import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';


@Component({
	selector: 'success-or-error-message',
	templateUrl: './success-or-error-message.component.html'
})
export class SuccessOrErrorMessageComponent {


	constructor(public successOrErrorMessage: MessageService) {
	}


	closeMessage() {
		this.successOrErrorMessage.success = '';
	}


}
