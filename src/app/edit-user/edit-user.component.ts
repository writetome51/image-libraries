import { Component } from '@angular/core';
import { SuccessOrErrorMessageService } from '../services/success-or-error-message.service';


@Component({
	selector: 'edit-user',
	templateUrl: './edit-user.component.html'
})
export class EditUserComponent {


	constructor(public successOrErrorMessage: SuccessOrErrorMessageService) {
	}


}
