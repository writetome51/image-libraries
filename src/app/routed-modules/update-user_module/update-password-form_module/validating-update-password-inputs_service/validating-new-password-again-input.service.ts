import { Injectable } from '@angular/core';
import { ValidatingPasswordAgainInputService } from '@validating-input/validating-password-again-input.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';
import { PrefixLabel_to_ValidatingInputService }
	from '@decorators/prefix-label-to-validating-input-service_decorator/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new'})
export class __ValidatingNewPasswordAgainInputService extends ValidatingPasswordAgainInputService {}

@Injectable({providedIn: UpdateUserServicesModule})
export class ValidatingNewPasswordAgainInputService
	extends __ValidatingNewPasswordAgainInputService {

	constructor() {
		super();

		this.data.propertyToMatch = 'newPassword';
		this.data.errorMessage = 'The two new password inputs must match';
	}

}
