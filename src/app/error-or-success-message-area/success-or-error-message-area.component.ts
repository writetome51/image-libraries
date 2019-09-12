import { Component } from '@angular/core';
import { SuccessOrErrorMessageService } from '../services/success-or-error-message.service';


@Component({
	selector: 'success-or-error-message-area',
	templateUrl: './success-or-error-message-area.component.html'
})
export class SuccessOrErrorMessageAreaComponent {


	constructor(public successOrErrorMessage: SuccessOrErrorMessageService) {
	}


	get message(){
		if (this.successOrErrorMessage.success) return this.successOrErrorMessage.success;
		else return this.successOrErrorMessage.error;
	}


}
