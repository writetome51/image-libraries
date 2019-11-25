import { Injectable } from '@angular/core';
import { CurrentPasswordInputService } from '../validating-input/current-password-input.service';
import { NewPasswordInputService } from '../validating-input/new-password-input.service';
import { NewPasswordAgainInputService } from '../validating-input/new-password-again-input.service';
import { CurrentUserInputsService } from './current-user-inputs.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordFormInputsService extends CurrentUserInputsService {

	constructor(
		currentPasswordInput: CurrentPasswordInputService,
		newPasswordInput: NewPasswordInputService,
		newPasswordAgainInput: NewPasswordAgainInputService
	) {
		super(
			currentPasswordInput,
			newPasswordInput,
			newPasswordAgainInput
		);
	}

}
