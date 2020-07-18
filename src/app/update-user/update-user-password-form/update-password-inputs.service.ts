import { Injectable } from '@angular/core';
import { CurrentPasswordInputService }
	from '../../services/validating-input/password/current-password-input.service';
import { NewPasswordInputService }
	from '../../services/validating-input/password/new-password-input.service';
import { NewPasswordAgainInputService }
	from '../../services/validating-input/password/new-password-again-input.service';
import { CurrentUserInputsService }
	from '../../services/validating-inputs/current-user-inputs/current-user-inputs.service';


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
