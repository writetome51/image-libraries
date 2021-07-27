import { ValidatingCurrentPasswordInputService } from './validating-current-password-input.service';
import { ValidatingCurrentUserInputsService }
	from '@services/validating-current-user-inputs_service/validating-current-user-inputs.abstract.service';
import { Injectable } from '@angular/core';
import { ValidatingNewPasswordAgainInputService }
	from './validating-new-password-again-input.service';
import { ValidatingNewPasswordInputService } from './validating-new-password-input.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ValidatingUpdatePasswordInputsService extends ValidatingCurrentUserInputsService {

	constructor(
		currentPasswordInput: ValidatingCurrentPasswordInputService,
		newPasswordInput: ValidatingNewPasswordInputService,
		newPasswordAgainInput: ValidatingNewPasswordAgainInputService
	) {
		super(
			currentPasswordInput,
			newPasswordInput,
			newPasswordAgainInput
		);
	}

}
