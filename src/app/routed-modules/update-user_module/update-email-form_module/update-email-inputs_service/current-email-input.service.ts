import { Injectable } from '@angular/core';
import { LoggedInEmailVerificationInputService }
	from '../../logged-in-email-verification-input.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';
import { PrefixLabel_to_ValidatingInputService }
	from '@decorators/prefix-label-to-validating-input-service/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'current'})
export class __CurrentEmailInputService extends LoggedInEmailVerificationInputService {
}

@Injectable({providedIn: UpdateUserServicesModule})
export class CurrentEmailInputService extends __CurrentEmailInputService {
}
