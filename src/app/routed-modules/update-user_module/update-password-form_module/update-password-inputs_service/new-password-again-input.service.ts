import { Injectable } from '@angular/core';
import { PasswordAgainInputService } from '@validating-input/password-again-input.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';
import { PrefixLabel_to_ValidatingInputService }
	from '@decorators/prefix-label-to-validating-input-service_decorator/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'new'})
export class __NewPasswordAgainInputService extends PasswordAgainInputService {}

@Injectable({providedIn: UpdateUserServicesModule})
export class NewPasswordAgainInputService extends __NewPasswordAgainInputService {

	constructor() {
		super();

		this.data.propertyToMatch = 'newPassword';
		this.data.errorMessage = 'The two new password inputs must match';
	}

}
