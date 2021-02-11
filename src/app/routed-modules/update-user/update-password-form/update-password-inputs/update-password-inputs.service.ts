import { CurrentPasswordInputService } from '../current-password-input.service';
import { CurrentUserInputsService } from '@validating-inputs/current-user-inputs.service';
import { Injectable } from '@angular/core';
import { NewPasswordAgainInputService } from './new-password-again-input.service';
import { NewPasswordInputService } from './new-password-input.service';


@Injectable({providedIn: 'root'})
export class UpdatePasswordInputsService extends CurrentUserInputsService {

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
