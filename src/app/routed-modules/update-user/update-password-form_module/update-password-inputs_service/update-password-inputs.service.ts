import { CurrentPasswordInputService } from '../current-password-input.service';
import { CurrentUserInputsService } from '@services/current-user-inputs/current-user-inputs.abstract.service';
import { Injectable } from '@angular/core';
import { NewPasswordAgainInputService } from './new-password-again-input.service';
import { NewPasswordInputService } from './new-password-input.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
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
