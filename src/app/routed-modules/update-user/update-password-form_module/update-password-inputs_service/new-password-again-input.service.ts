import { Injectable } from '@angular/core';
import { PasswordAgainInputService }
	from '@validating-input/password/password-again-input.service';
import { PrefixLabel_to_ValidatingInputService } // tslint:disable-next-line:max-line-length
	from '@validating-input/prefix-label-to-validating-input-service_decorator/prefix-label-to-validating-input-service.decorator';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@PrefixLabel_to_ValidatingInputService({prefix: 'new'})
export class __NewPasswordAgainInputService extends PasswordAgainInputService {
}

@Injectable({providedIn: UpdateUserServicesModule})
export class NewPasswordAgainInputService extends __NewPasswordAgainInputService {

	constructor() {
		super();

		this.data.propertyToMatch = 'newPassword';
		this.data.errorMessage = 'The two new password inputs must match';
	}

}
