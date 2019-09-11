import { Component } from '@angular/core';
import { SuccessOrErrorMessageService } from '../services/success-or-error-message.service';


@Component({
	selector: 'error-or-success-message-area',
	templateUrl: './error-or-success-message-area.component.html'
})
export class ErrorOrSuccessMessageAreaComponent {


	constructor(public successOrErrorMessage: SuccessOrErrorMessageService) {
	}


	get message(){
		if (this.successOrErrorMessage.success) return this.successOrErrorMessage.success;
		else return this.successOrErrorMessage.error;
	}


}
