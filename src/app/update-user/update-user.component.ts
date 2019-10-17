import { Component } from '@angular/core';
import { SuccessOrErrorMessageService } from '../success-or-error-message/success-or-error-message.service';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {


	constructor(public successOrErrorMessage: SuccessOrErrorMessageService) {
	}


}
