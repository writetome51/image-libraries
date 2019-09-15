import { Component } from '@angular/core';
import { SuccessOrErrorMessageService } from '../services/success-or-error-message.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

	heading = 'Create Account';


	constructor(public successOrErrorMessage: SuccessOrErrorMessageService) {
	}

}
