import { Injectable } from '@angular/core';
import { ValidatingLoggedInEmailVerificationInputService }
	from '../../validating-logged-in-email-verification-input.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';
import { PrefixLabel_to_ValidatingInputService }
	from '@decorators/prefix-label-to-validating-input-service_decorator/prefix-label-to-validating-input-service.decorator';


@PrefixLabel_to_ValidatingInputService({prefix: 'current'})
export class __ValidatingCurrentEmailInputService
	extends ValidatingLoggedInEmailVerificationInputService {}

@Injectable({providedIn: UpdateUserServicesModule})
export class ValidatingCurrentEmailInputService extends __ValidatingCurrentEmailInputService {}
